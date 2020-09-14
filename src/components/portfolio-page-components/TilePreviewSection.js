import React, { useContext } from 'react';
import Context from '../../context';

import ButtonFilled from '../buttons/ButtonFilled';

export default function TilePreviewSection({
  imagePreview,
  liveLink,
  codeSourceLink,
}) {
  const { textContent } = useContext(Context);

  let divStyle = {
    backgroundImage: 'url(' + imagePreview + ')',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    objectFit: 'cover',
  };

  return (
    <div style={divStyle} className="tile-preview-section">
      <ButtonFilled
        title={textContent.portfolioButtons.live}
        iconPrefix="fas"
        iconName="eye"
        link={liveLink}
      />
      <ButtonFilled
        title={textContent.portfolioButtons.code}
        iconPrefix="fab"
        iconName="github"
        link={codeSourceLink}
      />
    </div>
  );
}
