"use client";

import { PropsWithChildren } from "react";
import Logo from "./Logo";

import "@/app/i18n"
import { useTranslation } from "react-i18next";

type NavBarProps = PropsWithChildren<{
  showLogo?: boolean;
}>;

const NavBar = ({ children, showLogo }: NavBarProps) => {
  const [t, i18n] = useTranslation();

  const onTranslationClick = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  };

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex navbar-start">
        {children}
        <div className="hidden sm:block">
          {showLogo && <Logo size="sm" />}
        </div>
      </div>
      <div className="navbar-center sm:hidden">
        {showLogo && <Logo size="sm" />}
      </div>
      <div className="flex navbar-end">
        <button className="btn btn-ghost text-secondary hidden sm:block" onClick={onTranslationClick}>
          {t("lng-select")}
        </button>
        <button className="btn btn-ghost text-secondary size-fit sm:hidden" onClick={onTranslationClick}>
          {t("lng-select-short")}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
