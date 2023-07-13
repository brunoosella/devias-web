// External Modules
import React from 'react'
import {Link} from 'react-router-dom'

// Internal modules
import './ProjectDetails.scss'
import projectsJson from './ProjectDetails.json'

export default function ProjectDetails() {

  // Constants
  const projects = projectsJson.proyects

  return (
    projects.map((project, index) => (
      <div key={index} className='ProjectDetails'>
        <div className='ProjectThumbnail'>
          <Link to={project.link}>
            <img src={project.img} alt={project.name} />
          </Link>
        </div>
        <div className='ContainInfo'>
          <div className='ProjectTitle'>
            <Link to={project.link}>
              {project.name}
            </Link>
          </div>
          <div className='ProjectDescription'>
            <p>
              {project.description}
            </p>
          </div>
          <div className='ProjectButtons'>
            <div className='ReadMore'>
              <Link to={project.link}>
                Read More
              </Link>
            </div>
            <div className='SeeAll'>
              <Link to={project.link}>
                See all projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))
  )

}
