// External modules
import React from 'react'
import {Wrapper, Status} from '@googlemaps/react-wrapper'

// Internal modules
import './ContactUs.scss'
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import ContactForm from 'Components/ContactForm/ContactForm'
import WhatsappBubble from 'Components/WhatsappBubble/WhatsappBubble'
import MyMapComponent from 'Components/Map/MyMapComponent'

export default function ContactUs() {

  // Constants
  const API_KEY = 'AIzaSyA7u1yNadkGlTvSssNK6UbIIC9L0FumQto'
  const center = {lat: -33.118228960761876, lng: -64.36557908465618} 
  const zoom = 16

  // Methods

  const render = (status) => {

    switch (status) {

      case Status.LOADING:
        return null
      case Status.FAILURE:
        return null
      case Status.SUCCESS:
        return <MyMapComponent center={center} zoom={zoom} />

    }

  }

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

      <section className='section-map'>

        <h3> Visit us </h3>

        {/* Google maps */}
        <Wrapper apiKey={API_KEY} render={render} />
      </section>
      
      <Footer />
    </main>
  )

}