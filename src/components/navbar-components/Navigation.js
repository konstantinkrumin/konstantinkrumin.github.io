import React, { useState, useContext } from "react";
import Context from "../../context";

import NavLink from "./Navlink";

export default function Navigation() {
  const { textContent, FontAwesomeIcon } = useContext(Context);

  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <span className="navigation">
      <span className="nav-md-lg-xl-screens">
        <NavLink title={textContent.navigation.home} link="/" />
        <NavLink title={textContent.navigation.portfolio} link="/portfolio" />
        <NavLink title={textContent.navigation.resume} link="/resume" />
      </span>
      <span className="nav-small-screens">
        {isOpen === true ? (
          <span className="button" onClick={handleClick}>
            <FontAwesomeIcon icon={["fas", "times"]} />
          </span>
        ) : (
          <span className="button" onClick={handleClick}>
            <FontAwesomeIcon icon={["fas", "bars"]} />
          </span>
        )}
        <ul
          className={
            isOpen ? "nav-links-sm-screen show-nav" : "nav-links-sm-screen"
          }
        >
          <li className="navlink-sm-screen" onClick={handleClick}>
            <NavLink title={textContent.navigation.home} link="/" />
          </li>
          <li className="navlink-sm-screen" onClick={handleClick}>
            <NavLink
              title={textContent.navigation.portfolio}
              link="/portfolio"
            />
          </li>
          <li className="navlink-sm-screen" onClick={handleClick}>
            <NavLink title={textContent.navigation.resume} link="/resume" />
          </li>
        </ul>
      </span>
    </span>
  );
}
