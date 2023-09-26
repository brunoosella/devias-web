// External Modules
import React from 'react'

// Internal modules
import './AboutUs.scss'
import TeamCard from 'Components/TeamCard/TeamCard'
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import WhatsappBubble from 'Components/WhatsappBubble/WhatsappBubble'

export default function AboutUs() {

  return (
    <main id='about-us'>
      <Header />

      {/* WhatsApp Bubble */}
      <WhatsappBubble />

      <section className='section-title'>
        <div className='container'>
          <div className='main-title'>
            <h5>
              — Hello from Argentina
            </h5>
            <h1>
              We are Devias.
            </h1>
          </div>
        </div>
      </section>
      <section className='section-info'>
        <div className='container'>
          <div className='container-card'>
            <div className='text-card'>
              <p>We are a small team with great strength.</p>
              <p>We work along our customers to deliver the best solutions for them, customized to their needs, by using the latest programming tech and the best team work tools.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='section-team'>
        <div className='container'>
          <div className='container-cards'>
            <TeamCard />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )

}
