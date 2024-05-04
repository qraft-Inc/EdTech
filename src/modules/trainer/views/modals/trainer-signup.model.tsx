"use client";
import React from "react";
import Modal from "@mui/material/Modal";
import { TrainerSignupModel } from "@/modules/trainer/models/trainer-signup-modal.model";
import { LocaleModel } from "@/common/models/locales.model";
import TrainerSignUpCard from "@/modules/trainer/views/widgets/trainer-signup-card.widget";

type TrainerSignupProps = TrainerSignupModel & LocaleModel;

const TrainerSignupModal = (props: TrainerSignupProps) => {
  return (
    <div>
      <Modal
        open={props.open || false}
        onClose={props.toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center"
      >
        <TrainerSignUpCard t={props.t} toggleModal={props.toggleModal} />
      </Modal>
    </div>
  );
};

export default TrainerSignupModal;
