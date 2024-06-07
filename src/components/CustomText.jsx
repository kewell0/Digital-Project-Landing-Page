/* eslint-disable react/prop-types */
const CustomText = ({ text, color, weight, marginTop, className }) => {
  return (
    <h1
      className={className}
      style={{
        fontSize: "64px",
        color: color || "#BDBDBD",
        lineHeight: "64px",
        fontWeight: weight || "300",
        marginTop,
      }}
    >
      {text}
    </h1>
  );
};

export default CustomText;
