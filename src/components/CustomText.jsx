/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const CustomText = ({ text, color, weight, marginTop, className }) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1000
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    fontSize: windowWidth <= 700 ? "46px" : "64px",
    color: color || "#BDBDBD",
    lineHeight: windowWidth <= 700 ? "46px" : "64px",
    fontWeight: weight || "300",
    marginTop,
  };

  return (
    <h1 className={className} style={styles}>
      {text}
    </h1>
  );
};

export default CustomText;
