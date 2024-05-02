import React from "react";
import { useTranslation } from "react-i18next";
import AuthenticationCard from "@/modules/auth/views/widgets/authentication-card.widget";

const Login = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center">
      <AuthenticationCard t={t} />
    </div>
  );
};

export default Login;
