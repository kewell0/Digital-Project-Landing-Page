import "./Footer.css";
import logo from "../../assets/footer-logo.svg";
import facebook from "../../assets/facebook.svg";
import x from "../../assets/x.svg";
import linkedn from "../../assets/linkedn.svg";
import pin from "../../assets/pin.svg";
import location from "../../assets/location.svg";
import phone from "../../assets/phone.svg";
import email from "../../assets/message.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <div className="top">
        <img id="logo" src={logo} alt="logo" />

        <div className="information">
          <h4>Information</h4>
          <ul>
            <Link to="/">
              <li>Main</li>
            </Link>
            <Link to="gallery">
              <li>Gallery</li>
            </Link>
            <Link to="projects">
              <li>Projects</li>
            </Link>
            <Link to="certifications">
              <li>Certifications</li>
            </Link>
            <Link to="contacts">
              <li>Contacts</li>
            </Link>
          </ul>
        </div>

        <div className="contacts">
          <h4>Contacts </h4>
          <ul>
            <li>
              <img src={location} alt="location" />
              1234 Sample Street <br /> Austin Texas 78704
            </li>
            <li>
              <img src={phone} alt="tel" />
              512.333.2222
            </li>
            <li>
              <img src={email} alt="email" />
              sampleemail@gmail.com
            </li>
          </ul>
        </div>

        <div className="socials">
          <h4>Social Media </h4>
          <div className="social-icons">
            <img src={facebook} alt="facebook" />
            <img src={x} alt="x" />
            <img src={linkedn} alt="instagram" />
            <img src={pin} alt="pin" />
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="horizontal-line" />
        <p>© 2021 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
