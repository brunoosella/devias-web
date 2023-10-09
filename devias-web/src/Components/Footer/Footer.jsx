// External Modules
import React from 'react'

// Internal modules
import './Footer.scss'
import {Link, NavLink} from 'react-router-dom'

// Assets
import logo from 'Assets/logo.png'

export default function Footer() {

  return (
    <footer>
      <div id='social-icons'>
        <a href='https://www.facebook.com/devias.ar' target='_blank' rel='noreferrer'>
          <i className='fab fa-facebook' />
        </a>
        <a href='#' target='_blank' rel='noreferrer'>
          <i className='fab fa-twitter' />
        </a>
        <a href='https://www.linkedin.com/company/devias-ar/mycompany/?viewAsMember=true' target='_blank' rel='noreferrer'>
          <i className='fab fa-linkedin' />
        </a>
        <a href='https://www.instagram.com/devias.ar/?hl=es-la' target='_blank' rel='noreferrer'>
          <i className='fab fa-instagram' />
        </a>
      </div>
      <section className='container'>
        <div className='container-footer-links'>
          <ul>
            <li>
              <NavLink to='/our-customers'> Our customers </NavLink>
            </li>
            <li>
              <NavLink to='/about-us'> About us </NavLink>
            </li>
            <li>
              <NavLink to='/our-way'> Our way </NavLink>
            </li>
            {/* <li>
              <NavLink to='/careers'> Careers </NavLink>
            </li> */}
          </ul>
        </div>
        <div className='container-footer-logo'>
          <Link to='/'>
            <img src={logo} alt='dev-logo' />
          </Link>
        </div>
      </section>
    </footer>
  )

}
