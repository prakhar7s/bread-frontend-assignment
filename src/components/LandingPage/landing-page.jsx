import "./landing-page.css";

import imageUrl from "../../assets/landing-page-image.png";
import CustomForm from "../reused-components/form/custom-form";

const LandingPage = () => {
  return (
    <div className="landing-page d-flex align-items-center">
      <div
        data-aos="fade-right"
        className="left-section d-flex flex-column align-items-start justify-content-center"
      >
        <p className="heading">
          Become a true <span>SUPERFAN</span>
        </p>
        <p className="text-muted paragraph">
          Support your favourite creator by sharing their #TweetsFromHome wall
          with your loved ones and grow their community
        </p>
        <CustomForm btnLabel="View Tweets From Home" align="flex-start" />
      </div>
      <div data-aos="fade-left" className="skewed-image">
        <img src={imageUrl} alt="rightImage" />
      </div>
    </div>
  );
};
export default LandingPage;
