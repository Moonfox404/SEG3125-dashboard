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
        <div className="hidden sm:block">
          {showLogo && <Logo size="sm" />}
        </div>
      </div>
      <div className="navbar-center sm:hidden">
        {showLogo && <Logo size="sm" />}
      </div>
      <div className="flex navbar-end">
        <button className="btn btn-ghost text-secondary hidden sm:block">
          Français
        </button>
        <button className="btn btn-ghost text-secondary size-fit sm:hidden">
          FR
        </button>
      </div>
    </div>
  );
}

export default NavBar;
