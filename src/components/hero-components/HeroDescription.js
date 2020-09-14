import React, { useContext } from "react";
import Context from "../../context";

export default function HeroDescription() {
  const { textContent } = useContext(Context);

  return (
    <div className="hero-description">
      <p className="hero-description-text">{textContent.home.description}</p>
    </div>
  );
}
