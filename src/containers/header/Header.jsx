import React from "react";
import "./header.scss";
import Button from "./../../components/button/Button";
const Header = () => {
  return (
    <div className="headWrapper sectionPadding">
      <div className="headerContent">
        <h1 className="gradientText heading">
          Lets Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="headerPara">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="headerInput">
          <input type="email" placeholder="Your Email Address" />
          <Button btnStyle className="btnStyle" btntext="Get Started" />
        </div>
        <div className="headerPeople">
          <img src="/images/people.png" alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="headerImg">
        <img className="peopleImg" src="/images/ai.png" alt="AI" />
      </div>
    </div>
  );
};

export default Header;
