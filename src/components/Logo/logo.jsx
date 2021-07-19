import "./logo.css";
import headerLogoUrl from "../../assets/logo.svg";
import footerLogoUrl from "../../assets/twitter-logo.png";

import "./logo.css";

const Logo = ({ headerLogo, heading }) => {
  return (
    <div className="logo d-flex">
      <img src={headerLogo ? headerLogoUrl : footerLogoUrl} alt="logo" />
      <div className="content d-flex flex-column">
        <h1>{heading}</h1>
        <h2>
          <span>A</span> 🍞<span>Bread crumb</span>
        </h2>
      </div>
    </div>
  );
};

export default Logo;
