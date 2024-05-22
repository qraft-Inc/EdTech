"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import TrainerSignUpCarousel from "@/modules/trainer/views/widgets/trainer-signup-carousel.widget";
import JoinUs from "@/modules/trainer/views/widgets/join-us.widget";
import OverrollStatistics from "@/modules/trainer/views/widgets/overroll-statistics.widget";
import Guidelines from "@/modules/trainer/views/widgets/guidelines.widget";
import TrainerSignupModal from "@/modules/trainer/views/modals/trainer-signup.model";

const TrainerSignup = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const { t } = useTranslation();

  const handleModalToggle = () => setOpen(!open);

  return (
    <div className="w-full items-center justify-center">
      <TrainerSignupModal open={open} toggleModal={handleModalToggle} t={t} />
      <TrainerSignUpCarousel toggleModal={handleModalToggle} />
      <JoinUs />
      <OverrollStatistics />
      <Guidelines />
    </div>
  );
};

export default TrainerSignup;
