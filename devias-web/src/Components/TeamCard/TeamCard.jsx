// External Modules
import React from 'react'

// Internal modules
import './TeamCard.scss'
import teamJSON from './teamCard.json'

//Assets
import mauri from '../../assets/mauri.png'
import andres from '../../assets/andres.png'
import vicky from '../../assets/vicky.png'
import juanca from '../../assets/juanca.png'
import guly from '../../assets/guly.png'
import vilma from '../../assets/vilma.png'
import bruno from '../../assets/bruno.png'
import rafa from '../../assets/rafa.png'

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
          <p> {profile.description} </p>
        </div>
      </div>
    ))
  )
}