import Aos from "aos";
import { useEffect } from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import LandingPage from "../LandingPage/landing-page";
import LowerSection from "../LowerSection/lower-section";
import MiddleSection from "../MiddleSection/middle-section";

import "./tweets-from-home.css";

const TweetsFromHome = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

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
