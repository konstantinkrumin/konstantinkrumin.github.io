import React, { useContext } from 'react';

import Context from '../../context';

export default function SocialMediaIcon(props) {
  const { FontAwesomeIcon } = useContext(Context);
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`button profile-links ${props.extraClass}`}
    >
      <FontAwesomeIcon icon={[props.iconPrefix, props.iconName]} />
    </a>
  );
}
