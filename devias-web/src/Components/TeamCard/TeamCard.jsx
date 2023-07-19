// External Modules
import React from 'react'

// Internal modules
import teamJSON from './teamCard.json'

export default function TeamCard() {
  // Constants
  const team = teamJSON.team
  
  return (
    team.map((profile, index) => (
      <div key={index} className='card'>
        <div className='profile-picture'>
          <img src={profile.img} alt={profile.name} />
        </div>
        <div className='profile-description'>
          <p>{profile.name}</p>
        </div>
      </div>
    ))
  )
}