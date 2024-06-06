import img1 from "../../assets/gal1.svg";
import img2 from "../../assets/gal2.svg";
import img3 from "../../assets/gal3.svg";
import img4 from "../../assets/gal4.svg";
import img5 from "../../assets/gal5.svg";
import img6 from "../../assets/gal6.svg";
import img7 from "../../assets/gal7.svg";
import img8 from "../../assets/gal8.svg";
import img9 from "../../assets/gal9.svg";
import img10 from "../../assets/gal10.svg";
import leftArrow from "../../assets/arrow-left.svg";
import rightArrow from "../../assets/arrow-right.svg";
import slider from "../../assets/slide.svg";

import "./Gallery.css";
import CustomText from "../../components/CustomText";

const Gallery = () => {
  return (
    <div id="gallery">
      <div className="gallery-header">
        <CustomText text={"Photo"} />
        <CustomText text={"Gallery"} weight="700" color={"#333333"} />
      </div>

      <div className="gallery-contents">
        <img src={img1} alt="image" />
        <img src={img2} alt="image" />
        <img src={img3} alt="image" />
        <img src={img4} alt="image" />
        <img src={img5} alt="image" />
        <img src={img6} alt="image" />
        <img src={img7} alt="image" />
        <img src={img8} alt="image" />
        <img src={img9} alt="image" />
        <img src={img10} alt="image" />
      </div>

      <div id="pagination">
        <img src={slider} alt="" />

        <div className="arrows">
          <img src={leftArrow} alt="arrow" />
          <img src={rightArrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
