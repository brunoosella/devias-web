// External modules
import React from 'react'

// Internal modules
import './TechStack.scss'

// Assets
import logoReact from '/techStack/logo-react.png'
import logoRails from '/techStack/logo-rails.png'
import logoFigma from '/techStack/logo-figma.png'

export default function TechStack() {

  // Constants
  const tech = [
    {
      name: 'React',
      img: logoReact
    },
    {
      name: 'Figma',
      img: logoFigma
    },
    {
      name: 'Rails',
      img: logoRails
    }
  ]

  return (
    <section className='tech-stack'>
      <div className='container'>
        <div className='contain-tech'>
          <div className='tech-title'>
            <h2>
              Tech stack.
            </h2>
          </div>
          <div className='contain-tech-card'>
            {
              tech.map((tech, index) => (
                <div key={index} className='tech-card'>
                  <img src={tech.img} alt={tech.name} />
                  <p>
                    {tech.name}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )

}
