"use client";

import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";
import { ReactNode } from "react";

type CustomModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const CustomModal = ({
                       isOpen,
                       onClose,
                       title,
                       children,
                       size = "xs"
                     }: CustomModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalContent>
        <ModalHeader className="border-b">
          <h3 className="text-xl font-semibold">{title}</h3>
        </ModalHeader>
        <ModalBody className="space-y-4 py-6">{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;