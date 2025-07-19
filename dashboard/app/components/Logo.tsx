"use client";

import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

type LogoProps = {
  size? : "sm" | "lg";
}

const Logo = ({size}: LogoProps) => {
  const [t, i18n] = useTranslation();

  return (
    <a className="size-fit" href="/">
      <div className={"flex items-center space-x-2 text-secondary " + (size && size === "sm" ? "text-3xl" : "text-5xl")}>
        <FontAwesomeIcon icon={faVenusMars} />
        <span className={size && size === "sm" ? "text-xl" : "text-3xl"}>
          {t("site-name")}
        </span>
      </div>
    </a>
  );
};

export default Logo;
