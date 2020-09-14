import React from "react";

import SocialMediaIcon from "./SocialMediaIcon";

export default function SocialMediaIcons(props) {
  const socialMediaIconsInfo = [
    {
      href: "mailto:konstantin.krumin@gmail.com",
      extraClass: "",
      iconPrefix: "far",
      iconName: "envelope"
    },
    {
      href: "https://www.linkedin.com/in/konstantinkrumin/",
      extraClass: "",
      iconPrefix: "fab",
      iconName: "linkedin"
    },
    {
      href: "https://twitter.com/KonstantinIK1",
      extraClass: "",
      iconPrefix: "fab",
      iconName: "twitter"
    },
    {
      href: "https://github.com/konstantinkrumin",
      extraClass: "",
      iconPrefix: "fab",
      iconName: "github"
    },
    {
      href: "https://codepen.io/konstantinkrumin",
      extraClass: "hide-sm-screen",
      iconPrefix: "fab",
      iconName: "codepen"
    },
    {
      href: "https://www.freecodecamp.org/konstantin.krumin",
      extraClass: "hide-sm-screen",
      iconPrefix: "fab",
      iconName: "free-code-camp"
    }
  ];

  return (
    <div className={`profile-links-section ${props.SocialMediaIconsLandscape}`}>
      {socialMediaIconsInfo.map((item, index) => (
        <SocialMediaIcon
          key={index}
          href={item.href}
          extraClass={item.extraClass}
          iconPrefix={item.iconPrefix}
          iconName={item.iconName}
        />
      ))}
    </div>
  );
}
