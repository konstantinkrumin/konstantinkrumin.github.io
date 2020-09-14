import React, { useContext } from "react";
import Context from "../../context";

import RightSideItem from "./RightSideItem";

export default function ResumeTextContainerRightSide() {
  const { textContent } = useContext(Context);

  return (
    <div className="resume-text-container-right-side">
      <div className="resume-right-side-item">
        <RightSideItem text={textContent.resume.education.degree} />
        <RightSideItem text={textContent.resume.education.university} />
        <RightSideItem text={textContent.resume.education.gpa} />
        <RightSideItem text={textContent.resume.education.years} />
      </div>

      <div className="resume-right-side-item-sm">
        <RightSideItem text={textContent.resume.workExperience.jobPosition} />
        <RightSideItem text={textContent.resume.workExperience.jobPlace} />
        <RightSideItem text={textContent.resume.workExperience.years} />
      </div>

      <div className="resume-right-side-item-lg stacklist">
        {textContent.resume.stack.stackList.map((item, index) => (
          <div key={index} className="stacklist-item">
            {item}
          </div>
        ))}
      </div>

      <div className="resume-right-side-item resume-languages-section">
        {textContent.resume.languages.languagesList.map((item, index) => (
          <RightSideItem key={index} text={item} />
        ))}
      </div>
    </div>
  );
}
