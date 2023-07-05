// External Modules
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

// Internal modules
import './Header.scss'

// Assets
import logo from '../../Assets/logo.png'

export default function Header() {
    // Local state
    const [isOpen, setIsOpen] = useState(false)

    // Methods
    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header>
            <nav className='container-header'>
                <section className='container-header-logo'>
                    <Link to='/'>
                        <img src={logo} alt='dev-logo' />
                    </Link>
                </section>
                <button className='menu-toggle' onClick={handleMenuToggle}>
                    <span>-</span>
                </button>
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
                    </ul>
                </section>
                <section className='container-header-button'>
                    <button>
                        <Link to='/'> Schedule a meeting </Link>
                    </button>
                </section>
            </nav>
        </header>
    )
}

