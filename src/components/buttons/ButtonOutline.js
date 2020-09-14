import React, { useContext } from 'react';
import Context from '../../context';

export default function ButtonOutline(props) {
  const { FontAwesomeIcon, textContent } = useContext(Context);

  return (
    <a
      type="button"
      target="_blank"
      href={
        props.isCV === true
          ? textContent.downloads.cv
          : textContent.downloads.resume
      }
      className="button-outline"
    >
      <FontAwesomeIcon icon={props.icon} /> {props.title}
    </a>
  );
}
