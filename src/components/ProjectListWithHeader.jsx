import React from "react";
import { Link } from "react-router-dom";
import ProjectList from "./ProjectList";

function ProjectListWithHeader({arr, link, nameOwner}) {
  return (
    <div className="project_w-h">
      <div className="project_w-header">
        <p className="title"> Nhiều hơn từ {nameOwner} </p>
        <Link to={link} className="link">
          Profile
        </Link>
      </div>
      <ProjectList arr={arr}/>
    </div>
  );
}

export default ProjectListWithHeader;
