import React from "react";

import ResumeTextContainer from "./ResumeTextContainer";
import DownloadButtonsContainer from "./DownloadButtonsContainer";

export default function ResumeTextSection() {
  return (
    <div className="resume-text-container">
      <ResumeTextContainer />
      <DownloadButtonsContainer />
    </div>
  );
}
