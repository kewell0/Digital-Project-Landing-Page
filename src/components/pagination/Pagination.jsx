import leftArrow from "../../assets/arrow-left.svg";
import rightArrow from "../../assets/arrow-right.svg";
import slider from "../../assets/slide.svg";
import "./Pagination.css";

const Pagination = () => {
  return (
    <div id="pagination">
      <img src={slider} alt="" />

      <div className="arrows">
        <img src={leftArrow} alt="arrow" />
        <img src={rightArrow} alt="arrow" />
      </div>
    </div>
  );
};

export default Pagination;
