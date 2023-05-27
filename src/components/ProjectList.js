import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
   console.log(projects);
  const each = projects.map((item)=>{
    return < ProjectItem key = {item.id} id = {item.id} name = {item.name} about={item.about} technologies={item.technologies}  />
    console.log(each)
    
   
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{each}</div>
    </div>
  );
}

export default ProjectList;
