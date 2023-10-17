// External modules
import React from 'react'

// Internal modules
import './ContactUs.scss'
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import ContactForm from 'Components/ContactForm/ContactForm'
import WhatsappBubble from 'Components/WhatsappBubble/WhatsappBubble'

export default function ContactUs() {

  // Constants
  const calendlyLink = 'https://calendly.com/nicovillegas650/30min'

  return (
    <main id='contact-us'>
      <Header />

      {/* WhatsApp Bubble */}
      <WhatsappBubble />

      {/* Section title */}
      <section className='section-title'>
        <div className='container'>
          <div className='main-title'>
            <h5>
              — Contact
            </h5>
            <h1>
              Let's talk.
            </h1>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <ContactForm />
      
      <Footer />
    </main>
  )

}