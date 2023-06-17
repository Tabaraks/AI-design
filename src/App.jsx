import React from "react";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGpt,
} from "./containers";

import { Article, Brand, Cta, Feature, Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <div className="gradientBg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
