/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const MobileNav = ({ hamburger, setHamburger }) => {
  const [screenWidth, setScreenWidth] = useState([window.innerWidth]);

  useEffect(() => {
    const changescreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    // prettier-ignore
    window.addEventListener('resize', changescreenWidth);
  }, []);

  return (
    <>
      {screenWidth < 900 && hamburger && (
        <div
          className={hamburger && " mobile-nav-container"}
          onClick={() => setHamburger(false)}
        >
          <div
            className={
              hamburger === true ? "mobile-nav mobile-nav-width" : "mobile-nav"

              // hamburger && "mobile-nav activated"
            }
          >
            <ul className="mobile-links">
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
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
