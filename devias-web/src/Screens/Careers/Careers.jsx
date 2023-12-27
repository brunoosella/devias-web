// External Modules
import React from 'react'

// Internal Modules
import './Careers.scss'
import {AppContext} from '../../AppContext'

// Components
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import WhatsappBubble from 'Components/WhatsappBubble/WhatsappBubble'
import CareerPosition from '../../Components/CareerPosition/CareerPosition'

export default function Careers() {

  // Global state
  const {state} = React.useContext(AppContext)

  // Local state
  const [language, setLanguage] = React.useState(state.language_content.careers)

  // Effects
  React.useEffect(() => {

    const container = document.getElementById('careers')

    container.scrollIntoView({behavior: 'smooth'})

  }, [])

  // Language Effect
  React.useEffect(() => {

    setLanguage(state.language_content.careers)

  }, [state.language])

  return (
    <main id='careers'>
      {/* Header */}
      <Header />

      {/* WhatsApp Bubble */}
      <WhatsappBubble />

      <section className='section-title'>
        <div className='container'>
          <div className='main-title'>
            <h5>
              {language.label}
            </h5>
            <h1>
              {language.title}
            </h1>
          </div>
        </div>
      </section>

      <section className='section-positions'>
        <div className='container'>
          <h2 className='title-positions'>
            {language.title_position}
          </h2>
          <CareerPosition />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )

}