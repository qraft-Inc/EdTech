import React from "react";

export interface ModalModel {
  title: string;
  open: boolean;
  loading?: boolean;
  toggleModal: () => void;
  children: React.ReactNode;
}
