// External modules
import React from 'react'

// Internal modules
import './OurWay.scss'
import ProjectDetails from '../../Components/ProjectDetails/ProjectDetails'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function OurWay () {
  return (
    <main id='our-way'>
      <Header />
      <section className='primari-section'>
        <div className='container'>
          <div className='main-title'>
            <h5>
              — Our process
            </h5>
            <h1>
              This is how we work.
            </h1>
          </div>
          <div className='section-description'>
            <h4>
              We work along our customers to deliver the best solutions.
            </h4>
          </div>
        </div>
      </section>
      <section className='process-steps'>
        <div className='container'>
          <div className='container-steps'>
            
          </div>
        </div>
      </section>
      <section className='services-cards'>
        <div className='container'>
          <div className='row'>
            <div className='container-dev-card'>
              <div className='dev-card'>
                <h2>
                  Development.
                </h2>
                <h3>
                  Back-End Development
                </h3>
                <h3>
                  Front-End Development
                </h3>
                <h3>
                  iOS / Android Development
                </h3>
              </div>
            </div>
            <div className='container-design-card'>
              <div className='design-card'>
                <h2>
                  Design
                </h2>
                <h3>
                  UX Design
                </h3>
                <h3>
                  UI Design
                </h3>
                <h3>
                  Wireframes
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='highlighted-project'>
        <div className='container'>
          <h2>
            Check out our projects.
          </h2>
          <ProjectDetails />
        </div>
      </section>
      <Footer />
    </main>
  )
}