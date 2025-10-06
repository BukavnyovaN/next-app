'use client';

import CustomModal from "@/components/common/modal";
import RegistrationForm from "@/forms/registration.form";

type RegistrationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const RegistrationModal = ({ isOpen, onClose }: RegistrationModalProps) => {
  return (
    <CustomModal onClose={onClose} title={'Создать аккаунт'} isOpen={isOpen}>
      <RegistrationForm onClose={onClose}/>
    </CustomModal>
  );
};

export default RegistrationModal;