// External modules
import React from 'react'

//Internal modules
import './ItemStep.scss'
import itemStepJson from './itemStep.json'

export default function ItemStep() {
  // Constants
  const step = itemStepJson.items

  // Local state
  const [isOpen, setIsOpen] = React.useState(false)

  // Methods
  const handleStepToggle = (number) => {

    setIsOpen((prevState) => ({
      ...prevState,
      [number]: !prevState[number],
    }));

  }

  return (
    step.map((item, index) => (
      <div key={index} className='item-step'>
        
        {/* Step button responsive */}
        <button className='toggle-step' onClick={() => handleStepToggle(item.number)}>
          <div className='step'>
            <span className='step-number'>
              0{item.number}
            </span>
            <span className='step-name'>
              {item.name}
            </span>
          </div>
          <div className='flecha'>
            {isOpen[item.number] ? '▲' : '▼'}
          </div>
        </button>

        {/* Step description */}
        <div className={`container-step-description  ${isOpen[item.number] ? 'show' : ''}`}>
          <p className='step-description'>
            {item.description}
          </p>
        </div>
      </div>
    ))
  )
}
