// External modules
import React from 'react'

// Internal modules
import Home from '../Screens/Home/Home'
import OurCustomers from '../Screens/OurCustomers/OurCustomers'
import AboutUs from '../Screens/AboutUs/AboutUs'
import OurWay from '../Screens/OurWay/OurWay'
import ContactUs from '../Screens/ContactUs/ContactUs'
import Costumer from '../Screens/OurCustomers/Costumer/Costumer'

const routes = [
  {
    path: '/',
    component: <Home />,
    exact: true
  },
  {
    path: '/our-customers',
    component: <OurCustomers />,
    exact:true
  },
  {
    path: '/about-us',
    component: <AboutUs />,
    exact:true
  },
  {
    path: '/our-way',
    component: <OurWay />,
    exact:true
  },
  {
    path: '/contact-us',
    component: <ContactUs />,
    exact:true
  },
  {
    path: '/costumer/:client',
    component: <Costumer />,
    exact:true
  }
  
]

export default routes