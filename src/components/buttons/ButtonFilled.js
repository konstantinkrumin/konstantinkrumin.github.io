import React, { useContext } from "react";
import Context from "../../context";

export default function ButtonFilled(props) {
  const { FontAwesomeIcon } = useContext(Context);

  return (
    <a href={props.link} target="_blank" className="button-filled">
      <FontAwesomeIcon icon={[props.iconPrefix, props.iconName]} />{" "}
      {props.title}
    </a>
  );
}
