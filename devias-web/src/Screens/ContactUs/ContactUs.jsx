// External modules
import React from 'react'

// Internal modules
import './ContactUs.scss'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function ContactUs() {
  // Constants
  const calendlyLink = 'https://calendly.com/nicovillegas650/30min';

  return (
    <main id='contact-us'>
      <Header />
      {/* Section title */}
      <section className='section-title'>
        <div className='container'>
          <div className='main-title'>
            <h5>
              - Contact
            </h5>
            <h1>
              Let's talk.
            </h1>
          </div>
        </div>
      </section>
      {/* Section calendly */}
      <section className='calendly'>
        <div className='container'>
          <p>
            Choose a date and time for our meeting.
          </p>
          <p>
            We will contact you to arrange the details.
          </p>
          {/* Insert calendly */}
          <div className="calendly-container">
            <iframe
              title="Calendly"
              src={calendlyLink}
              width="100%"
              height="600"
              frameBorder="0"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}