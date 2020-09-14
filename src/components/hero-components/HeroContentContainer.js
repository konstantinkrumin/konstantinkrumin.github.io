import React from "react";

import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroTechStack from "./HeroTechStack";

export default function HeroContentContainer() {
  return (
    <div className="hero-content-container">
      <HeroTitle />
      <HeroDescription />
      <HeroTechStack />
    </div>
  );
}
