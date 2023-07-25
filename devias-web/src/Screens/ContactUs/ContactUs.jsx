// External modules
import React from 'react'

// Internal modules
import './ContactUs.scss'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function ContactUs () {
  return (
    <main id='contact-us'>
      <Header />
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
      <Footer />
    </main>
  )
}