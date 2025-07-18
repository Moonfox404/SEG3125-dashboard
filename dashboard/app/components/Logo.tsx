import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2 text-5xl text-secondary">
      <FontAwesomeIcon icon={faVenusMars} />
      <span className="text-3xl">Explore Trends</span>
    </div>
  );
};

export default Logo;
