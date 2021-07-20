import Logo from "../Logo/logo";

import "./header.css";

import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  return (
    <div className="header d-flex align-items-center">
      <Logo headerLogo heading="Tweets from Home" />
      <div className="hamburger-menu">
        <MenuIcon />
      </div>
      <div className="links align-items-start justify-content-center">
        <a className="signin-btn" href="#signin">
          Sign In
        </a>
        <a className="home-btn" href="#home">
          Home
        </a>
      </div>
    </div>
  );
};

export default Header;
