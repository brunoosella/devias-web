// External Modules
import React from 'react'

// Internal modules
import './Footer.scss'
import { Link, NavLink } from 'react-router-dom'

// Assets
import logo from '../../Assets/logo.png'

export default function Footer() {
    return (
        <footer>
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
                        <li>
                            <NavLink to='/careers'> Careers </NavLink>
                        </li>
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
