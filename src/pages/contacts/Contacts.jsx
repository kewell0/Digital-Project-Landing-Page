import CustomText from "../../components/CustomText";
import map from "../../assets/map.svg";

import "./Contacts.css";
import Button from "../../components/button/Button";

const Contacts = () => {
  return (
    <div id="contacts">
      <div className="contacts-left">
        <div>
          <CustomText text={"Contact"} marginTop="60px" />
          <CustomText text={"Informaion"} weight="700" color={"#333333"} />
        </div>
        <div className="contact-details">
          <h3>Company Name</h3>
          <p>1234 Sample Streer Austin Texas 76401</p>
        </div>

        <h3>512.333.2222</h3>

        <p className="email">sampleemail@gmail.com</p>

        <Button
          title="CONTACT US"
          style={{ background: "#333333", color: "white" }}
          whiteIcon="yes"
        />
      </div>

      <div className="contact-map">
        <img src={map} alt="map" />
      </div>
    </div>
  );
};

export default Contacts;
