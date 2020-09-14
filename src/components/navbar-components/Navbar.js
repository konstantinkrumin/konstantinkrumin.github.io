import React from "react";

import LanguageToggler from "./LanguageToggler";
import SocialMediaIcons from "../common-components/SocialMediaIcons";
import Navigation from "./Navigation";

export default function Navbar() {
  return (
    <div className="navbar">
      <LanguageToggler />
      <SocialMediaIcons SocialMediaIconsLandscape="social-media-icons-landscape" />
      <Navigation />
    </div>
  );
}
