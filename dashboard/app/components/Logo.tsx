import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type LogoProps = {
  size? : "sm" | "lg";
}

const Logo = ({size}: LogoProps) => {
  return (
    <a className="size-fit" href="/">
      <div className={"flex items-center space-x-2 text-secondary " + (size && size === "sm" ? "text-3xl" : "text-5xl")}>
        <FontAwesomeIcon icon={faVenusMars} />
        <span className={size && size === "sm" ? "text-2xl" : "text-3xl"}>
          Explore + Visualise
        </span>
      </div>
    </a>
  );
};

export default Logo;
