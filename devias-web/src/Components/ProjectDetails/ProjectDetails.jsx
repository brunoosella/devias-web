// External Modules
import React from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router'

// Internal modules
import './ProjectDetails.scss'
import json from './project.json'
import Card from './Card/Card'

export default function ProjectDetails({customerView}) {

  // Local State
  const [projectsList, setProjectsList] = React.useState([])

  // Constants
  const {client} = useParams()

  React.useEffect(() => {

    if(customerView) {

      if (customerView) {

        const newList = json.projects.filter(item => item.code !== client)

        setProjectsList(newList)

      }

    } else {

      setProjectsList(json.projects)

    }

  }, [client])

  return (
    projectsList?.map((project, index) => (
      <div key={index} className='project-detail'>
        {/* Link image */}
        <div className='project-thumbnail'>
          <Link to={`/customer/${project.code}`}>
            <Card img={project['img-logo']} alt={project.name}/>
          </Link>
        </div>
        {/* Contain Info */}
        <div className='contain-info'>
          <div className='project-title'>
            <Link to={`/customer/${project.code}`}>
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
              <Link to={`/customer/${project.code}`}>
                Read More
              </Link>
            </div>
            <div className='see-all'>
              <Link to='/our-customers'>
                See all projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))
  )

}
