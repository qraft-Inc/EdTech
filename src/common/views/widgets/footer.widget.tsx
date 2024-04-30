import React from "react";
import { useTranslation } from "react-i18next";
import Socials from "@/common/views/widgets/socials.widget";
import Logo from "@/common/views/widgets/logo.widget";
import AboutUs from "@/common/views/widgets/about-us.widget";
import Policies from "@/common/views/widgets/policies";
import ContactUs from "@/common/views/widgets/contact-us";
import Copyright from "@/common/views/widgets/copy-right";
import LanguageSwitcher from "@/common/views/widgets/language-switcher.widget";

const Footer = () => {
  const { t } = useTranslation();
  return (
    // <!-- Footer container -->
    <footer className="bg-neutral-800 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
        <div className="me-12 hidden lg:block">
          <span className=" text-neutral-300">{t("contact_us")}</span>
        </div>
        <Socials />
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <Logo />
            <p className="text-neutral-300 mt-4">
              {t("homepage:company_vision")}
            </p>
          </div>
          <AboutUs t={t} />
          <Policies t={t} />
          <ContactUs t={t} />
          <LanguageSwitcher />
        </div>
      </div>

      <Copyright t={t} />
    </footer>
  );
};

export default Footer;
