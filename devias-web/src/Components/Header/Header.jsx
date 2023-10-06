// External Modules
import React from 'react'
import {Link, NavLink, useHref} from 'react-router-dom'

// Internal modules
import './Header.scss'
import {RxHamburgerMenu} from 'react-icons/rx'

// Assets
import logo from 'Assets/logo.png'

export default function Header() {

  // Local state
  const [isOpen, setIsOpen] = React.useState(false)

  const history = useHref()

  React.useEffect(() => {

    // Remove loader
    setTimeout(() => {

      const loader = document.getElementById('loader')
      loader.classList.add('leave')
      setTimeout(() => {

        loader.remove()

      }, 200)
      document.body.classList.remove('loading')

    }, 300)

  }, [history])

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
                <NavLink
                  className={({isActive, isPending}) =>
                    isPending ? 'pending' : isActive ? 'active' : ''}
                  to='/'
                > Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({isActive, isPending}) =>
                    isPending ? 'pending' : isActive ? 'active' : ''} to='/our-customers'
                > Our customers
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({isActive, isPending}) =>
                    isPending ? 'pending' : isActive ? 'active' : ''} to='/about-us'
                > About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({isActive, isPending}) =>
                    isPending ? 'pending' : isActive ? 'active' : ''} to='/our-way'
                > Our way
                </NavLink>
              </li>
              <li className='line' />
              <li className='container-btn-contact'>
                <NavLink
                  id='btn-contact' className={({isActive, isPending}) =>
                    isPending ? 'pending' : isActive ? 'active' : ''} to='/contact-us'
                > Contact us
                </NavLink>
              </li>
            </ul>
          </section>

        </div>
      </nav>
    </header>
  )

}

