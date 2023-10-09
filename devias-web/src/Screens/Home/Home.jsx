// External modules
import React from 'react'

// Internal modules
import './Home.scss'
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import ProjectDetails from 'Components/ProjectDetails/ProjectDetails'
import TechStack from 'Components/TechStack/TechStack'
import WhatsappBubble from 'Components/WhatsappBubble/WhatsappBubble'
import ContactForm from 'Components/ContactForm/ContactForm'

export default function Home() {

  return (
    <main id='home'>

      <Header />

      {/* WhatsApp Bubble */}
      <WhatsappBubble />

      <section className='primary-section'>
        <div className='container'>
          <div className='main-title'>
            <h1>
              Humanizing
              <br />
              digital products.
            </h1>
          </div>
          <div className='section-description'>
            <h4>
              We work along our customers to deliver the best solutions.
            </h4>
          </div>
        </div>
      </section>
      <section className='services-card'>
        <div className='container'>
          <div className='row'>
            <div className='ContainerDevCard'>
              <div className='DevCard'>
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
            <div className='ContainerDesignCard'>
              <div className='DesignCard'>
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

      {/* Tech Stack */}
      <TechStack />

      {/* Contact form */}
      <ContactForm />

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