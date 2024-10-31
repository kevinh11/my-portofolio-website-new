import { useState, useEffect } from "react";
import ProjectCard from "../components/projectCard";
import SkillButton from "../components/skillButton";

import React from 'react'

function Projects({projects}) {
  const skills = [
    { name: "HTML5", imgPath: "HTML5.png" },
    { name: "CSS3", imgPath: "CSS3.png" },
    { name: "JS", imgPath: "JS.png" },
    { name: "ReactJS", imgPath: "ReactJS.png" },
    { name: "Laravel", imgPath: "Laravel.png" },
    { name: "MySQL", imgPath: "MySQL.png" }, 
    { name: "Kotlin", imgPath : "Kotlin.png"}, 
    { name : "Firebase", imgPath : "Firebase.png"}
  ];

  

  const [displayedProjects, setDisplayedProjects] = useState(projects);
  const [selectedSkills, setSelectedSkills] = useState([]);

  function updateSelectedSkills(skill) {
    setSelectedSkills((prevSkills) =>
      prevSkills.includes(skill)
        ? prevSkills.filter((s) => s !== skill)
        : [...prevSkills, skill]
    );
  }

  function clearSelectedSkills() {
    setSelectedSkills([]);

    const btns = Array.from(document.getElementsByClassName("category-button"))
    btns.forEach((btn)=> {
      btn.classList.remove("text-red")
    })
 
  }

  function checkForTags(project, selected) {
    for (let i = 0; i < selected.length; i++) {
      if (!project.tags.includes(selected[i])) {
        return false;
      }
    }
    return true;
  }

  useEffect(() => {
    function filterProjects() {
      const filtered = projects.filter((p) => checkForTags(p, selectedSkills));
      setDisplayedProjects(filtered);
      
    }

    filterProjects();
  }, [selectedSkills]);

  return (
    <>
    <h1 className="my-5 text-3xl md:text-5xl">Skills & Projects</h1>
    <div className="relative p-5 page gap-10 projects flex flex-col justify-center items-start">

      <div className="my-7 categories">
        <h3 className='text-xl lg:text-2xl'>My Skills</h3>
        <h3 className='text-lg font-light'>Click to filter projects based on skills</h3>

        
        <div className="my-3 grid category-buttons rounded">
          {skills.map((s) => (
            <SkillButton
              key={s.name}
              func={updateSelectedSkills}
              path={s.imgPath}
              skillName={s.name}
              cleared = {selectedSkills.length == 0}
            />
          ))}
        </div>

        {selectedSkills.length > 0 ?
         <button onClick={clearSelectedSkills}>Clear</button> : <></>}
      </div>
      <div>
        <h4 className="text-xl lg:text-2xl">My Projects</h4>
        <div className="my-7 project-section">
          {displayedProjects.map((p) => (
            <ProjectCard
              key={p.id}
              tags={p.tags}
              name={p.name}
              year={p.year}
              desc={p.desc}
              link={p.githubLink}
              id={p.id}
            />
          ))}
        </div>
      
      </div>
      
    </div>
    </>
    
  );
}

export default Projects;
