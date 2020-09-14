import React from "react";

import TileTitleSection from "./TileTitleSection";
import TilePreviewSection from "./TilePreviewSection";

export default function ProjectTile({
  title,
  imagePreview,
  liveLink,
  codeSourceLink
}) {
  return (
    <div className="project-tile">
      <TileTitleSection title={title} />
      <TilePreviewSection
        imagePreview={imagePreview}
        liveLink={liveLink}
        codeSourceLink={codeSourceLink}
      />
    </div>
  );
}
