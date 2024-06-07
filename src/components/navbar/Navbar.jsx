import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import logoName from "../../assets/logo-name.svg";
import hamburgerIcon from "../../assets/hamburger-menu.svg";
import "./Navbar.css";
import MobileNav from "./MobileNav";

export const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <>
      <MobileNav hamburger={hamburger} setHamburger={setHamburger} />
      <header>
        <div className="logo">
          <img src={logo} alt="logo" id="logo" />
          <img src={logoName} alt="logo-name" id="logo-name" />
        </div>

        <nav>
          <ul>
            <NavLink to={"/"}>
              <li>MAIN</li>
            </NavLink>
            <NavLink to={"/gallery"}>
              <li>GALLERY</li>
            </NavLink>
            <NavLink to={"/projects"}>
              <li>PROJECTS</li>
            </NavLink>
            <NavLink to={"/certifications"}>
              <li>CERTIFICATIONS</li>
            </NavLink>
            <NavLink to={"/contacts"}>
              <li>CONTACTS</li>
            </NavLink>
          </ul>
        </nav>
        <div id="hamburger" onClick={toggleHamburger}>
          {hamburger ? <h2>X</h2> : <img src={hamburgerIcon} alt="icon" />}
        </div>
      </header>
    </>
  );
};
