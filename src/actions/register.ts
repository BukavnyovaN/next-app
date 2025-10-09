"use server";

import { saltAndHashPassword } from "@/utils/password";
import prisma from "@/utils/prisma";
import { FormData } from "@/types/form-data";

export async function registerUser(formData : FormData) {
  const { email, password, confirmPassword } = formData;

  if (password !== confirmPassword) {
    return { error: "Пароли не совпадают" };
  }

  if (password.length < 6) {
    return { error: "Пароль должен быть не менее 6 символов" };
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return { error: "Пользователь с таким email уже существует" };
    }

    const pwHash = await saltAndHashPassword(password);

    const user = await prisma.user.create({
      data: {
        email: email,
        password: pwHash
      }
    });

    return user;
  } catch (error) {
    console.error("Ошибка регистрации:", error);
    return { error: "Ошибка при регистрации" };
  }
}