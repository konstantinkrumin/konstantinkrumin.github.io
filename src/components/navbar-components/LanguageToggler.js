import React, { useContext } from "react";
import Context from "../../context";

export default function LanguageToggler() {
  const { handleSwitch } = useContext(Context);

  return (
    <div>
      EN{" "}
      <label className="switch">
        <input type="checkbox" onChange={handleSwitch} />
        <span className="slider round"></span>
      </label>{" "}
      RU
    </div>
  );
}
