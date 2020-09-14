import React from "react";

import ResumeTextContainerLeftSide from "./ResumeTextContainerLeftSide";
import ResumeTextContainerRightSide from "./ResumeTextContainerRightSide";

export default function ResumeTextContainer() {
  return (
    <div className="resume-text-container-internal">
      <ResumeTextContainerLeftSide />
      <ResumeTextContainerRightSide />
    </div>
  );
}
