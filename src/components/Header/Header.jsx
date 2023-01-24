import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/main_header.png";

const Header = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkout</h4>
          <h1>Join the legends of the fitness world</h1>
          <p>
            30 pushups each day. Then 40. Then 50. Then 60. One day you'll reach
            a hundred. That will be the day of your salvation. That is when you
            will be granted the gift of pullups. You'll start from 5 pullups.
            Then 6, then 7, then one day you'll reach 20.
          </p>

          <Link to="/plans" className="btn lg">
            Get started
          </Link>

          
        </div>

        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
