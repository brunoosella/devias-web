// External Modules
import React from 'react'

// Internal modules
import { Link } from 'react-router-dom'

// Assets
import logo from '../../Assets/logo.png'

export default function LinkLogo (){
    return (
        <div>
            <Link to='/'> 
                <img src={logo} alt="" />
            </Link>
        </div>
    )
}