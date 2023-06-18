import React, { useState } from "react";
import "./navbar.scss";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Button from "../button/Button";

const Menu = () => (
  <>
    <p className="navText">
      <a href="#home">Home</a>
    </p>
    <p className="navText">
      <a href="#wgpt3">What is GPT</a>
    </p>
    <p className="navText">
      <a href="#possibility">Open AI</a>
    </p>
    <p className="navText">
      <a href="#features">Case Studies</a>
    </p>
    <p className="navText">
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gptNav">
      <div className="gptNavItems">
        <div className="navLinks">
          <div className="gptNavLogo">
            <img src={"/images/logo.svg"} alt="logo" className="logo" />
          </div>
          <div className="gptNavItemWrapper">
            <Menu />
          </div>
        </div>
        <div className="btnContainer">
          <div className="navBtn">
            <p className="navText">Sign In</p>
            <Button btntext="Sign up" />
          </div>
          <div className="gptPhoneMenu">
            {toggleMenu ? (
              <RiCloseLine
                className="mobileIcon"
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                className="mobileIcon"
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="gptMobileNavWrapper scaleUpCenter">
                <div className="gptNavItems">
                  <Menu />
                  <div className="gptMobileBtn">
                    <p className="navText">Sign In</p>
                    <Button btntext="Sign up" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
