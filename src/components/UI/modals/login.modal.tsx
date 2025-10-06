'use client';

import CustomModal from "@/components/common/modal";
import LoginForm from "@/forms/login.form";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
    <CustomModal onClose={onClose} title={'Войти в аккаунт'} isOpen={isOpen}>
      <LoginForm onClose={onClose}/>
    </CustomModal>
  );
};

export default LoginModal;