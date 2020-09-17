import React, { useContext } from 'react';
import Context from '../../context';

export default function ResumeButton() {
  const { FontAwesomeIcon, textContent } = useContext(Context);

  return (
    <a
      type="button"
      target="_blank"
      rel="noopener noreferrer"
      href={textContent.downloads.resume}
      className="button button-download-resume"
    >
      <FontAwesomeIcon icon={['fas', 'cloud-download-alt']} />{' '}
      {textContent.navigation.resume}
    </a>
  );
}
