import React, { useContext } from "react";
import Context from "../../context";

import ProjectTile from "./ProjectTile";

export default function PortfolioTilesContainer() {
  const { textContent } = useContext(Context);

  return (
    <div className="portfolio-tiles-container">
      {textContent.portfolio.map((item, index) => (
        <ProjectTile
          key={index}
          title={item.title}
          imagePreview={item.imagePreview}
          liveLink={item.links.liveProject}
          codeSourceLink={item.links.codeSource}
        />
      ))}
    </div>
  );
}
