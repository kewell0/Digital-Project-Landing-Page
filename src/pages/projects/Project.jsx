import Button from "../../components/button/Button";

// eslint-disable-next-line react/prop-types
export const Project = ({ img, name, details }) => {
  return (
    <div className="project">
      <img src={img} alt="project" />

      <div className="project-details">
        <h2>{name}</h2>
        <p>{details}</p>

        <Button title="VIEW MORE" />
      </div>
    </div>
  );
};
