import Logo from "../Logo/logo";

import "./header.css";

const Header = () => {
  return (
    <div className="header d-flex align-items-center">
      <Logo headerLogo heading="Tweets from Home" />
      <div className="links d-flex align-items-start justify-content-center">
        <a className="btn signin-btn" href="#signin">
          Sign In
        </a>
        <a className="btn custom-btn" href="#home">
          Home
        </a>
      </div>
    </div>
  );
};

export default Header;
