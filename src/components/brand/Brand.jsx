import React from "react";
import "./brand.scss";

const Brand = () => {
  return (
    <div className="brandSection">
      <div className="imgContainer">
        <img src="/images/google.png" alt="google" />
      </div>
      <div className="imgContainer">
        <img src="/images/slack.png" alt="google" />
      </div>
      <div className="imgContainer">
        <img src="/images/atlassian.png" alt="google" />
      </div>
      <div className="imgContainer">
        <img src="/images/dropbox.png" alt="google" />
      </div>
      <div className="imgContainer">
        <img src="/images/shopify.png" alt="google" />
      </div>
    </div>
  );
};

export default Brand;
