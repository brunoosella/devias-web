// External Modules
import React from 'react'

// Internal modules
import './Header.scss'
import {Link, NavLink} from 'react-router-dom'
import {RxHamburgerMenu} from 'react-icons/rx'

// Assets
import logo from 'Assets/logo.png'

export default function Header() {

  // Local state
  const [isOpen, setIsOpen] = React.useState(false)

  // Methods
  const handleMenuToggle = () => {

    setIsOpen(!isOpen)

  }

  return (
    <header>
      <nav className='container-header'>
        <div className='container'>

          {/* Logo */}
          <section className='container-header-logo'>
            <Link to='/'>
              <img src={logo} alt='dev-logo' />
            </Link>
          </section>

          {/* Burguer button responsive */}
          <button className='menu-toggle' onClick={handleMenuToggle}>
            <span className='navbar-toggler-icon'>
              <RxHamburgerMenu />
            </span>
          </button>

          {/* NavBar */}
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
              <li className='line' />

              <li className='container-btn-contact'>
                <Link id='btn-contact' to='/'> Schedule a meeting </Link>
              </li>
            </ul>
          </section>

        </div>
      </nav>
    </header>
  )

}

