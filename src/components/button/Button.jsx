/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import rightArrow from "../../assets/arrow-right.svg";
import rightArrowWhite from "../../assets/arrow-right-White.svg";

import "./Button.css";

const Button = ({ title, style, whiteIcon }) => {
  return (
    <Link id="btn" style={style}>
      {title}

      <div>
        <img src={whiteIcon ? rightArrowWhite : rightArrow} alt="icon" />
      </div>
    </Link>
  );
};

export default Button;
