import React from "react";
import { Link } from "react-router-dom";

export default function NavLink(props) {
  return (
    <Link to={props.link}>
      <span className="button navlink">{props.title}</span>
    </Link>
  );
}
