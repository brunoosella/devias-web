// External Modules
import React from 'react'

// Internal modules
import './TeamCard.scss'
import teamJSON from './teamCard.json'

//Assets
import mauri from 'Assets/mauri.png'
import andres from 'Assets/andres.png'
import vicky from 'Assets/vicky.png'
import juanca from 'Assets/juanca.png'
import guly from 'Assets/guly.png'
import vilma from 'Assets/vilma.png'
import bruno from 'Assets/bruno.png'
import rafa from 'Assets/rafa.png'

export default function TeamCard() {

  // Constants
  const images = [
    mauri,
    andres,
    vicky,
    juanca,
    guly,
    vilma,
    bruno,
    rafa
  ]

  const team = teamJSON.team

  return (
    team.map((profile, index) => (
      <div key={index} className='card'>
        <div className='profile-picture'>
          <img src={images[profile.img]} alt={profile.name} />
        </div>
        <div className='profile-description'>
          <h4>{profile.name}</h4>
          <h5>{profile.job}</h5>
        </div>
      </div>
    ))
  )

}