import React, { useContext } from 'react';
import Context from '../../context';

import ButtonOutline from '../buttons/ButtonOutline';

export default function DownloadButtonsContainer() {
  const { textContent } = useContext(Context);

  return (
    <div className="buttons-container">
      <ButtonOutline
        isCV={false}
        title={textContent.resume.buttons.resume}
        icon="cloud-download-alt"
      />
      <ButtonOutline
        isCV={true}
        title={textContent.resume.buttons.cv}
        icon="file-download"
      />
    </div>
  );
}
