import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import logo from "../../images/logo.png";
import logo2 from "../../images/logo2.png";
import { links } from "../../data";
import "./navbar.css";
const Navbar = () => {
  const [navState, setNavState] = useState(false);

  return (
    <div className="nav__div">
      <nav>
        <div className="container nav__container">
          <Link to="/" className="logo">
            <img src={logo} alt="Nav Logo" className="bottom" />
            <img src={logo2} alt="Nav Logo" className="top" />
          </Link>
          <Link to="/" className="logo__mobile" onClick={()=>setNavState(false)}>
            <img src={logo2} alt="Nav Logo" />
            <h1> DKAY FITNESS</h1>
          </Link>

          <div className="nav__slide">
            <div className={`nav__links ${navState ? 'showNav' : 'hideNav'}`}>
              {
                //Destructuring links as links.name, links.path
                links.map(({ name, path }, index) => {
                  return (
                    <h4 key={index}>
                      <NavLink onClick={()=>setNavState(false)}
                        className={({ isActive }) =>
                          isActive ? "active-nav nav__link" : "nav__link"
                        }
                        to={path}
                      >
                        {" "}
                        {name}{" "}
                      </NavLink>
                    </h4>
                  );
                })
              }
            </div>
          </div>
          <button className={`nav__toggle-btn ${navState}`} onClick={()=>setNavState((prev)=>!prev)}>
            <GoThreeBars />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
