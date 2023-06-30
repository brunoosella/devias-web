// External Modules
import React from 'react'

// Internal modules
import './Header.scss'

// Components
import LinkLogo from '../LinkLogo/LinkLogo'
import { Link, NavLink } from 'react-router-dom'


export default function Header() {
    return (
        <header>
            <nav>
                <section className='container-header-logo'>
                    <LinkLogo className='header-logo' />
                </section>
                <section className='container-header-links'>
                    <ul >
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/'>Our customers</NavLink>
                        <NavLink to='/'>About us</NavLink>
                        <NavLink to='/'>Our way</NavLink>
                    </ul>
                </section>
                <section>
                    <button>
                        Schedule a meeting
                    </button>
                </section>
            </nav>
        </header>
    )
}

