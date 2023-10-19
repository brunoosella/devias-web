//External modules
import React from 'react'
import { Link } from 'react-router-dom'

//Internal modules
import './WhatsappBubble.scss'

// Assets
import logoWhatsapp from 'Assets/Utilities/logo-whatsapp.png'

export default function WhatsappBubble () {
  return (
    <div className='whatsapp-bubble'>
      <Link>
        <img src={logoWhatsapp} alt='logo-whatsapp' />
      </Link>
    </div>
  )
}