import React, { useContext } from "react";
import Context from "../../context";

export default function ResumeTextContainerLeftSide() {
  const { textContent, FontAwesomeIcon } = useContext(Context);

  return (
    <div className="resume-text-container-left-side">
      <div className="resume-left-side-item">
        <FontAwesomeIcon icon={["fas", "graduation-cap"]} />{" "}
        {textContent.resume.education.title}
      </div>
      <div className="resume-left-side-item-sm">
        <FontAwesomeIcon icon={["fas", "briefcase"]} />{" "}
        {textContent.resume.workExperience.title}
      </div>
      <div className="resume-left-side-item-lg">
        <FontAwesomeIcon icon={["fas", "file-code"]} />{" "}
        {textContent.resume.stack.title}
      </div>
      <div className="resume-left-side-item resume-languages-section">
        <FontAwesomeIcon icon={["fas", "comment-dots"]} />{" "}
        {textContent.resume.languages.title}
      </div>
    </div>
  );
}
