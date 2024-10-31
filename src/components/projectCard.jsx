
import React from 'react'


function ProjectCard({tags, name,desc, link, year,id}) {

  function calculateDelay() {
    return `${id * 500}ms`
  }
  return (
    <div data-aos='fade-down' data-aos-delay={calculateDelay()} className="project-card px-4 py-4 flex flex-col bg-black/75">
      <h1 className="text-2xl text-red">{name}</h1>
      <div className="flex flex-row justify-between items-center">
        <h4 className="font-medium"> {year} </h4>
        <div>
          <a href={link} className="hover:underline text-white text-decoration-red">Github</a>
        </div>
      </div>

      <div className="font-light text-lg">
        {desc}
      </div>

      <div className="skills-used gap-2 flex flex-row items-center justify-start">
        {tags.map((tag)=> {
          return (
            <img style={{height:'30px', width:'30px'}} src={`./images/icons/${tag}.png`}></img>
          )
        })}
      </div>
    </div>
  )

}

export default ProjectCard