// External modules
import React from 'react'

// Internal modules
import Home from '../Screens/Home/Home'
import OurCustomers from '../Screens/OurCustomers/OurCustomers'

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
  }
  // Codigo de ejemplo
  // {
  //   path:'/about-us',
  //   component: <About />,
  //   exact:true
  // }
]

export default routes