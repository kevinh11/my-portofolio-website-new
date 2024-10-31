import React from 'react'

import { useState, useEffect } from "react";

function SkillButton({ func, path, skillName }) {
  const [clicked, setClicked] = useState(false);
  
  useEffect(() => {
    const buttonElement = document.getElementById(`${skillName}-button`);
    if (clicked) {
      buttonElement.classList.add("text-red");
    } 
    else {
      buttonElement.classList.remove("text-red");
    }
  }, [clicked]);

  function updateClick() {
    setClicked(!clicked);
  }

  return (
    <button
      onClick={() => {
        func(skillName);
        updateClick();
      }}
      id={`${skillName}-button`}
      className="category-button basis-1/3 md:basis-1/5 flex flex-row items-center"
    >
      <img style={{height:'30px', width:'30px'}}src={`./images/icons/${path}`} alt={skillName} />
      {skillName}
    </button>
  );
}

export default SkillButton;
