import "./custom-form.css";

import SearchIcon from "@material-ui/icons/Search";

const CustomForm = ({ btnLabel, align }) => {
  return (
    <form
      style={{ alignItems: align }}
      className="left-section-form d-flex flex-column"
    >
      <div className="input-div">
        <SearchIcon />
        <input type="input" placeholder="Search your favourite creator" />
      </div>
      <a className="custom-btn" href={`#${btnLabel}`}>
        {btnLabel}
      </a>
    </form>
  );
};

export default CustomForm;
