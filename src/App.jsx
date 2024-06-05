import { useState } from "react";
import logo from "./assets/logo.svg";
import logoName from "./assets/logo-name.svg";
import { NavLink } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="logo" id="logo" />

          <img src={logoName} alt="logo-name" id="logo-name" />
        </div>

        <nav>
          <ul>
            <NavLink to={"/home"}>MAIN</NavLink>
            {/* <NavLink to={"/gallery"}>
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
            </NavLink> */}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default App;
