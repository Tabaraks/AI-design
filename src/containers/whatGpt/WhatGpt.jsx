import React from "react";
import { Feature } from "../../components";
import "./whatGpt.scss";

const WhatGpt = () => {
  return (
    <div className="whatGptSection sectionMargin" id="wgpt">
      <div className="gptFeature">
        <Feature title={"What is GPT-3"} />
        <p className="featureTxt formatting">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </div>
      <div className="whatGptHeading">
        <h1 className="gradientText heading">
          The possibilities are beyond your imagination
        </h1>
        <p className="content">Explore The Library</p>
      </div>
      <div className="gptContentContainer">
        <div className="featureWrapper">
          <Feature title={"Chatbots"} />
          <p className="featureTxt">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought.
          </p>
        </div>
        <div className="featureWrapper">
          <Feature title={"Knowledgebase"} />
          <p className="featureTxt">
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </p>
        </div>
        <div className="featureWrapper">
          <Feature title={"Education"} />
          <p className="featureTxt">
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatGpt;
