import React from "react";
import { useTranslation } from "react-i18next";
import SignUpCard from "@/modules/auth/views/widgets/signup-card.widget";

const SignUp = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center">
      <SignUpCard t={t} />
    </div>
  );
};

export default SignUp;
