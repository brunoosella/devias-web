// External Modules
import React from 'react'
import {Link} from 'react-router-dom'

// Internal Modules
import './CareerPosition.scss'
import {AppContext} from '../../AppContext'

export default function CareerPosition() {

  // Global state
  const {state} = React.useContext(AppContext)

  // Local state
  const [language, setLanguage] = React.useState(state.language_content.careers)

  // Constants
  const positions = [
    {
      code: 'front-end',
      area: 'Developer',
      position: 'Front-End',
      visible: true
    },
    {
      code: 'back-end',
      area: 'Developer',
      position: 'Back-End',
      visible: false
    }
  ]

  // Language Effect
  React.useEffect(() => {

    setLanguage(state.language_content.careers)

  }, [state.language])

  return (
    <div className='container'>
      <h2 className='title-positions'>
        {language.title_position}
      </h2>
      {
        positions.map((position, index) => (
          position.visible &&
          <button key={index} className='career'>
            <Link to={`/careers/${position.code}`}>
              <div className='position'>
                <span className='area-name'>
                  {position.area}
                </span>
                <span className='position-name'>
                  {position.position}
                </span>
              </div>
            </Link>
          </button>
        ))
      }
    </div>
  )

}