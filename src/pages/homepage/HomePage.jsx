import houseIMG from "../../assets/house.svg";
import CustomText from "../../components/CustomText";
import leftArrow from "../../assets/arrow-left.svg";
import rightArrow from "../../assets/arrow-right.svg";
import img1 from "../../assets/about1.svg";
import img2 from "../../assets/about2.svg";
import img3 from "../../assets/about3.svg";
import slider from "../../assets/slide-numbers.svg";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";

const HomePage = () => {
  return (
    <div id="homepage">
      <div className="hero-container">
        <div className="contents">
          <CustomText text="PROJECT" />
          <CustomText text="Lorum" color="#333333" weight="700" />

          <div className="arrows">
            <img src={leftArrow} alt="arrow" />
            <img src={rightArrow} alt="arrow" />
          </div>

          <img src={slider} alt="" />
        </div>

        <div className="image">
          <img src={houseIMG} alt="house" />

          <Button
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
    </div>
  );
};

export default HomePage;
