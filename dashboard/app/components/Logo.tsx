import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Logo = () => {
  return (
    <a className="size-fit" href="/">
      <div className="flex items-center space-x-2 text-5xl text-secondary">
        <FontAwesomeIcon icon={faVenusMars} />
        <span className="text-3xl">Explore Trends</span>
      </div>
    </a>
  );
};

export default Logo;
