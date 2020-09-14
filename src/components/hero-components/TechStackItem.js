import React, { useContext } from "react";

import Context from "../../context";

export default function TechStackItem(props) {
  const { FontAwesomeIcon } = useContext(Context);

  return (
    <div className="tech-stack-item">
      <FontAwesomeIcon icon={["fab", props.iconName]} size="2x" />
      <div className="tech-stack-item-subtext">{props.title}</div>
    </div>
  );
}
