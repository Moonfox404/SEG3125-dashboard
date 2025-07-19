import { PropsWithChildren } from "react";
import Logo from "./Logo";

type NavBarProps = PropsWithChildren<{
  showLogo?: boolean;
}>;

const NavBar = ({ children, showLogo }: NavBarProps) => {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex navbar-start">
        {children}
        {showLogo && <Logo size="sm" />}
      </div>
      <div className="flex navbar-end">
        <button className="btn btn-ghost text-secondary">
          Français
        </button>
      </div>
    </div>
  );
}

export default NavBar;
