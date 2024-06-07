/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import rightArrow from "../../assets/arrow-right.svg";
import rightArrowWhite from "../../assets/arrow-right-White.svg";

import styles from "./Button.module.css";

const Button = ({ title, style, whiteIcon, className }) => {
  return (
    <div className={className}>
      <Link id={styles.btn} style={style}>
        {title}

        <div>
          <img
            className={styles.icon}
            src={whiteIcon ? rightArrowWhite : rightArrow}
            alt="icon"
          />
        </div>
      </Link>
    </div>
  );
};

export default Button;
