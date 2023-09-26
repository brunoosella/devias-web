// External Modules
import React from 'react'

// Internal modules
import './OurCustomers.scss'
import ProjectDetails from 'Components/ProjectDetails/ProjectDetails'
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import WhatsappBubble from 'Components/WhatsappBubble/WhatsappBubble'

export default function OurCustomers() {

  return (
    <main id='our-customers'>
      {/* Header */}
      <Header />

      {/* WhatsApp Bubble */}
      <WhatsappBubble />

      {/* Title */}
      <section className='section-title'>
        <div className='container'>
          <div className='main-title'>
            <h5>
              — Meet our customers
            </h5>
            <h1>
              Take a look at what we’ve
              <br />
              been working on
            </h1>
          </div>
        </div>
      </section>
      {/* Card info */}
      <section className='info'>
        <div className='container'>
          <div className='container-card'>
            <div className='text-card'>
              <p>We are proud to have launched a lot of products, from landing pages to large web applications.</p>
              <p>We create solutions focused on scalability, performance and user experience.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Section projects */}
      <section className='container-project-detail'>
        <div className='container'>
          <ProjectDetails />
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </main>
  )

}
