import houseIMG from "../../assets/house.svg";
import CustomText from "../../components/CustomText";
import leftArrow from "../../assets/arrow-left.svg";
import rightArrow from "../../assets/arrow-right.svg";
import img1 from "../../assets/about1.svg";
import img2 from "../../assets/about2.svg";
import img3 from "../../assets/about3.svg";
import slider from "../../assets/slide-numbers.svg";
import Button from "../../components/button/Button";

import project1 from "../../assets/project1.svg";
import project2 from "../../assets/project2.svg";
import project3 from "../../assets/project3.svg";
import project4 from "../../assets/project4.svg";
import project5 from "../../assets/project5.svg";

import contactIMG from "../../assets/contact.svg";

const HomePage = () => {
  return (
    <div id="homepage">
      <div className="hero-container">
        <div className="contents">
          <CustomText text="PROJECT" className="hero-header" />
          <CustomText
            text="Lorum"
            color="#333333"
            weight="700"
            className="hero-header"
          />

          <div className="arrows">
            <img src={leftArrow} alt="arrow" />
            <img src={rightArrow} alt="arrow" />
          </div>

          <img className="slider1" src={slider} alt="" />
        </div>

        <div className="image">
          <img src={houseIMG} alt="house" />

          <Button
            className="hero-btn"
            title="VIEW PROJECT"
            style={{ position: "absolute", bottom: "42px" }}
          />
        </div>
      </div>

      <div className="about">
        <div className="images">
          <div className="left">
            <img src={img1} alt="image" />
            <img src={img2} alt="image" />
          </div>
          <div>
            <img src={img3} alt="image" />
          </div>
        </div>

        <div className="content">
          <CustomText text="About" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>

          <Button title="READ MORE" />
        </div>
      </div>

      <div id="focus">
        <CustomText text="Main Focus/Mission Statement" />

        <div className="content">
          <div className="left">
            <h1>1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat.
            </p>
          </div>

          <div className="right">
            <h1>2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat, magna mauris porttitor
              tortor, a auctor est felis ut nisl.
            </p>
          </div>
        </div>
      </div>

      <div id="projects">
        <CustomText text="Our Projects" />

        <div className="images">
          <img src={project1} alt="image" />
          <img src={project2} alt="image" />
          <img src={project3} alt="image" />
          <img src={project4} alt="image" />
          <img src={project5} alt="image" />
        </div>

        <div className="button">
          <Button
            title="ALL PROJECTS"
            style={{ background: "#333333", color: "white" }}
            whiteIcon="yes"
          />
        </div>
      </div>

      <div id="contact">
        <CustomText text="Contact Us" />

        <div className="contact-wrapper">
          <form action="#" className="form">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Interested In" />
            <textarea placeholder="Message"></textarea>

            <div className="sendForm">
              <Button
                title="SEND EMAIL"
                style={{ background: "#333333", color: "white" }}
                whiteIcon="yes"
              />
            </div>
          </form>

          <div>
            <img src={contactIMG} alt="contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
