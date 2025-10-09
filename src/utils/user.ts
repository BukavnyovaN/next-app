import prisma from "./prisma";

export async function getUserFromDb(email: string) {
  return prisma.user.findFirst({
    where: {
      email
    }
  });
}