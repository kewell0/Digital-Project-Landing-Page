import CustomText from "../../components/CustomText";

import img1 from "../../assets/p1.svg";
import img2 from "../../assets/p2.svg";
import img3 from "../../assets/p3.svg";
import "./Projects.css";
import { Project } from "./Project";
import Pagination from "../../components/pagination/Pagination";

const Projects = () => {
  return (
    <div id="projects">
      <div className="projects-header">
        <CustomText text={"Our"} />
        <CustomText text={"Projects"} weight="700" color={"#333333"} />
      </div>

      <div className="projects-contents">
        <Project
          img={img1}
          name="Sample Project 1"
          details="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book."
        />

        <Project
          img={img2}
          name="Sample Project 2"
          details="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book."
        />
        <Project
          img={img3}
          name="Sample Project 3"
          details="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book."
        />
      </div>

      <Pagination />
    </div>
  );
};

export default Projects;
