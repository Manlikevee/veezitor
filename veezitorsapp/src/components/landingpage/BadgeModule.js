import React, { useState } from 'react';

const BadgeModule = ({ title, body }) => {
  const [isActive, setIsActive] = useState(false);
  const [contentHeight, setContentHeight] = useState('0px');

  const toggleAccordion = () => {
    setIsActive(!isActive);
    setContentHeight(isActive ? '0px' : `${document.querySelector('.badgecontent').scrollHeight}px`);
  };
  
  return (
    <div className="badgemodules">
    <div className="roundcircle">
      {" "}
      <span className="material-symbols-outlined">
        poker_chip
      </span>{" "}
    </div>
    <div className="badgetext">
      <div
        className="badgetitle"
        onClick={toggleAccordion}
      >
         {title}
      </div>
      <div className="badgecontent" style={{ height: contentHeight }}>
      {body}
      </div>
    </div>
  </div>
  )
}

export default BadgeModule