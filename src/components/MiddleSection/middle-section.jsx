import "./middle-section.css";

import imageUrl from "../../assets/middle-section-image.png";

const MiddleSection = () => {
  const hashtags = [
    {
      id: 1,
      name: "#HiArmy",
      bg: "#ffdce5",
    },
    {
      id: 2,
      name: "#everydays",
      bg: "#d1f7c4",
    },
    {
      id: 3,
      name: "#teamtrees",
      bg: "#fee2d5",
    },
    {
      id: 4,
      name: "#BTS",
      bg: "#72DDC3",
    },
    {
      id: 5,
      name: "#botarmy",
      bg: "#9cc7ff",
    },
  ];

  return (
    <div className="middle-section  d-flex align-items-start justify-content-between">
      <p className="middle-page-heading text-center">
        <span>Creators</span> are powerful
      </p>
      <div className="left-img" data-aos="zoom-in">
        <img src={imageUrl} alt="leftImage" />
      </div>
      <div className="content" data-aos="fade-up-left">
        <div className="heading text-uppercase text-center">
          Creator Shape Culture
        </div>
        <p>2 in 3 twitter users agree that creators change and shape culture</p>
        <div className="hashtags">
          {hashtags.map((hashtag) => (
            <span style={{ background: hashtag.bg }} key={hashtag.id}>
              {hashtag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
