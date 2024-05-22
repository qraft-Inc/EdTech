import React from "react";
import Modal from "@mui/material/Modal";
import Loader from "@/common/views/widgets/loader.widget";
import { ModalModel } from "@/common/models/modal.model";
import { CancelOutlined } from "@mui/icons-material";

const BaseModel = ({
  title,
  open,
  loading,
  toggleModal,
  children,
}: ModalModel) => {
  return (
    <Modal
      open={open || false}
      onClose={toggleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center w-[30%] bg-white rounded-sm p-4 outline-none">
        {loading ? <Loader /> : null}
        <div className="flex items-center justify-between w-full">
          <h3 className="text-2xl text-blue-950 font-light">{title}</h3>
          <CancelOutlined
            className="hover:cursor-pointer"
            style={{ fontSize: 30 }}
            onClick={toggleModal}
          />
        </div>
        {children}
      </div>
    </Modal>
  );
};

export default BaseModel;
