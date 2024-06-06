/* eslint-disable react/prop-types */
const CustomText = ({ text, color, weight, marginTop }) => {
  return (
    <h1
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
