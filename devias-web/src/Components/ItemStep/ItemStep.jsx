// External modules
import React from 'react'

//Internal modules
import './ItemStep.scss'
import itemStepJson from './itemStep.json'

export default function ItemStep() {
  // Constants
  const step = itemStepJson.items

  return (
    step.map((item, index) => {
      <div key={index} className='item-step'>
        <button className='show'>
          <div className='step'>
            <span className='step-number'>
              {item.number}
            </span>
            <span className='step-name'>
              {item.name}
            </span>
          </div>
        </button>
        <div className='container-step-description'>
          <p className='step-description'>
            {item.description}
          </p>
        </div>
      </div>
    })
  )
}
