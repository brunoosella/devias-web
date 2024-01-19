// External modules
import React from 'react'
import {useParams} from 'react-router'

// Internal modules
import './Position.scss'
import {AppContext} from '../../../AppContext'

// Components
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import WhatsappBubble from 'Components/WhatsappBubble/WhatsappBubble'
import ErrorPage from '../../../Router/ErrorPage'
import FormPosition from './Components/FormPosition/FormPosition'

export default function Position() {

  // Global state
  const {state} = React.useContext(AppContext)

  // Local state
  const [careers, setCareers] = React.useState(state.language_content.careers.positions)

  // Constants
  const {career} = useParams()

  const positions = careers.filter(position => position.code === career)

  // Language Effect
  React.useEffect(() => {

    setCareers(state.language_content.careers.positions)

  }, [state.language])

  return (
    <main id='position'>
      {/* Header */}
      <Header />

      {/* WhatsApp Bubble */}
      <WhatsappBubble />

      <section className='section-title'>
        <div className='container'>
          {
            positions.map((position, index) => (
              (position.visible)
                ?
                (

                  <div key={index} className='main-title'>
                    <h5>
                      {position.area}
                    </h5>
                    <h1>
                      {position.position}
                    </h1>
                  </div>
                )
                : <ErrorPage key={`${position.code}_${index}`} />
            ))
          }
        </div>
      </section>

      <section className='form-container'>
        {
          positions.map((position, index) => (
            <FormPosition key={index} form_position={position.form} />
          ))
        }
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )

}