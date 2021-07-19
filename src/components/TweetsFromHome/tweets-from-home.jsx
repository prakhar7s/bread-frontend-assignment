import Footer from "../Footer/footer";
import Header from "../Header/header";
import LandingPage from "../LandingPage/landing-page";
import LowerSection from "../LowerSection/lower-section";
import MiddleSection from "../MiddleSection/middle-section";

import "./tweets-from-home.css";

const TweetsFromHome = () => {
  return (
    <div className="tweets-from-home">
      <Header />
      <LandingPage />
      <MiddleSection />
      <LowerSection />
      <Footer />
    </div>
  );
};

export default TweetsFromHome;
