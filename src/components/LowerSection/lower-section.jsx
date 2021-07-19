import CustomForm from "../reused-components/form/custom-form";
import "./lower-section.css";

const LowerSection = () => {
  return (
    <div className="lower-section d-flex flex-column align-items-center justify-content">
      <div className="heading text-center">
        With #TweetsFromHome, express your love for your favourite creator
      </div>
      <p className="text-center">
        Choose the top tweets that you absolutely admire to create your version
        of their #TweetsFromHome wall and simply share on Twitter.
      </p>
      <CustomForm btnLabel="Sign In to continue" align="center" />
    </div>
  );
};

export default LowerSection;
