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
  const [language, setLanguage] = React.useState(state.language_content.careers.positions)

  // Language Effect
  React.useEffect(() => {

    setLanguage(state.language_content.careers.positions)

  }, [state.language])

  return (
    <>
      {
        language.map((position, index) => (
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
    </>
  )

}