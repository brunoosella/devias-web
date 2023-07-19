// External modules
import React from 'react'

// Internal modules
import Home from '../Screens/Home/Home'
import OurCustomers from '../Screens/OurCustomers/OurCustomers'
import AboutUs from '../Screens/AboutUs/AboutUs'

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
  }
]

export default routes