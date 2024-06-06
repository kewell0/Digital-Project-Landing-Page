/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import rightArrow from "../../assets/arrow-right.svg";

import "./Button.css";

const Button = ({ title, style }) => {
  return (
    <Link id="btn" style={style}>
      {title}

      <div>
        <img src={rightArrow} alt="icon" />
      </div>
    </Link>
  );
};

export default Button;
