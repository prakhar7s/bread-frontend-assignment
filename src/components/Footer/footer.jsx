import Logo from "../Logo/logo";
import "./footer.css";

// Link images
import globalizationImage from "../../assets/globalization.svg";
import twitterImage from "../../assets/twitter.png";
import instaImage from "../../assets/insta.svg";
import mailImage from "../../assets/mail.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-and-links">
        <Logo heading="My Twitter Яewind" />
        <div className="foooter-links">
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
    </div>
  );
};

export default Footer;
