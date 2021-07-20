import Logo from "../Logo/logo";
import "./footer.css";

// Link images
import globalizationImage from "../../assets/globalization.svg";
import twitterImage from "../../assets/twitter.png";
import instaImage from "../../assets/insta.svg";
import mailImage from "../../assets/mail.png";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const Footer = () => {
  return (
    <div className="footer justify-content-between align-items-center">
      <div className="logo-and-links">
        <Logo heading="My Twitter Яewind" />
        <div className="footer-links d-flex justify-content-between">
          <a href="#globalization">
            <img src={globalizationImage} alt="globalization" />
          </a>
          <a href="#twitter">
            <img src={twitterImage} alt="twitter" />
          </a>
          <a href="#instagram">
            <img src={instaImage} alt="instagram" />
          </a>
          <a href="#mail">
            <img src={mailImage} alt="mail" />
          </a>
        </div>
      </div>

      <a href="#early access" className="early-access-link">
        Get early access for Bread <ArrowForwardIcon />
      </a>
      <div className="policy d-flex flex-column justify-content-between">
        <span>Privacy Policy</span>
        <span>Terms of Use</span>
      </div>
    </div>
  );
};

export default Footer;
