// External Modules
import React from 'react'
import {Link} from 'react-router-dom'

// Internal modules
import './ProjectDetails.scss'
import Project from '../Project/Project'

export default function ProjectDetails() {

  // Constants
  const projects = Project().projects

  return (
    projects.map((project, index) => (
      <div key={index} className='project-detail'>
        {/* Link image */}
        <div className='project-thumbnail'>
          <Link to={project.link}>
            <img src={project.img} alt={project.name} />
          </Link>
        </div>
        {/* Contain Info */}
        <div className='contain-info'>
          <div className='project-title'>
            <Link to={project.link}>
              {project.name}
            </Link>
          </div>
          {/* Description */}
          <div className='project-description'>
            <p>
              {project.description}
            </p>
          </div>
          {/* Buttons */}
          <div className='project-buttons'>
            <div className='read-more'>
              <Link to={project.link}>
                Read More
              </Link>
            </div>
            <div className='see-all'>
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
