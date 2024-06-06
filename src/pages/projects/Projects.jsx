import CustomText from "../../components/CustomText";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects">
      <div className="projects-header">
        <CustomText text={"Our"} />
        <CustomText text={"Projects"} weight="700" color={"#333333"} />
      </div>

      <div className="projects-contents"></div>
    </div>
  );
};

export default Projects;
