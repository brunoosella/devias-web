// External Modules
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

// Internal modules
import './Header.scss'
import { RxHamburgerMenu } from 'react-icons/rx'

// Assets
import logo from '../../Assets/logo.png'

export default function Header() {

  // Local state
  const [isOpen, setIsOpen] = useState(false)

  // Methods
  const handleMenuToggle = () => {

    setIsOpen(!isOpen)

  }

  return (
    <header>
      <nav className='container-header'>
        <div className='container'>
          <section className='container-header-logo'>
            <Link to='/'>
              <img src={logo} alt='dev-logo' />
            </Link>
          </section>

          <section className={`container-header-links ${isOpen ? 'show' : ''}`}>
            <ul>
              <li>
                <NavLink to='/'> Home </NavLink>
              </li>
              <li>
                <NavLink to='/our-customers'> Our customers </NavLink>
              </li>
              <li>
                <NavLink to='/about-us'> About us </NavLink>
              </li>
              <li>
                <NavLink to='/our-way'> Our way </NavLink>
              </li>
              <li>
                <NavLink to='/contact-us'> Contact us </NavLink>
              </li>
              <li className='line'></li>
              <li className='container-btn-contact'>
                <Link id='btn-contact' to='/'> Schedule a meeting </Link>
              </li>
            </ul>
          </section>
          <button className='menu-toggle' onClick={handleMenuToggle}>
            <span className='navbar-toggler-icon'>
              <RxHamburgerMenu />
            </span>
          </button>
        </div>
      </nav>
    </header>
  )

}

