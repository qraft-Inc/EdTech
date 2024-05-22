"use client";
import React from "react";
import { TrainerSignupModel } from "@/modules/trainer/models/trainer-signup-modal.model";
import BaseButton from "@/common/views/buttons/base-button";

const TrainerSignUpCarousel = (props: TrainerSignupModel) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center h-[60vh] w-[100%] bg-gray-100">
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-5xl font-bold">Train with us</h1>
            <p className=" text-xl font-thin text-neutral-600">
              Become a trainer and create impact on peoples lives
            </p>
            <div className="flex justify-between items-center w-[90%] mt-10">
              <BaseButton label="Get Started" onClick={props.toggleModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerSignUpCarousel;
