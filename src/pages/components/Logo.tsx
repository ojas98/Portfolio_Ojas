import React, { useState } from "react";

interface LogoProps{
  className?: string;
}

function Logo() {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div
    className={`logo-container ${isFlipped ? 'flipped' : ''}`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  > 
  <title>Ojas Balsotra</title>
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <text id="O"
    x="50%"
    y="55%"
    textAnchor="middle"
    dominantBaseline="middle"
    fill="currentColor"
    fontWeight="bold"
    fontSize="46px"
  >
  O
  </text>
        <path fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" d="M 50, 5
     A 45,45 0 1 1 50 95
     A 45,45 0 1 1 50 5 z"
/>
     
    </svg>
    </div>
  );
}

export default Logo;