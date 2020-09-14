import React from "react";

import TechStackItem from "./TechStackItem";

export default function HeroTechStack() {
  const techStackItems = [
    {
      title: "JavaScript",
      iconName: "js"
    },
    {
      title: "React",
      iconName: "react"
    },
    {
      title: "HTML5",
      iconName: "html5"
    },
    {
      title: "CSS3",
      iconName: "css3-alt"
    },
    {
      title: "Sass",
      iconName: "sass"
    },
    {
      title: "Bootstrap",
      iconName: "bootstrap"
    },
    {
      title: "Python",
      iconName: "python"
    },
    {
      title: "Git",
      iconName: "git-alt"
    }
  ];

  return (
    <div className="hero-tech-stack-section">
      {techStackItems.map((item, index) => (
        <TechStackItem
          key={index}
          title={item.title}
          iconName={item.iconName}
        />
      ))}
    </div>
  );
}
