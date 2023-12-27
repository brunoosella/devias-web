// External modules
import React from 'react'

import {createBrowserRouter} from 'react-router-dom'

// Internal modules
import Home from '../Screens/Home/Home'
import OurCustomers from '../Screens/OurCustomers/OurCustomers'
import AboutUs from '../Screens/AboutUs/AboutUs'
import OurWay from '../Screens/OurWay/OurWay'
import ContactUs from '../Screens/ContactUs/ContactUs'
import Customer from '../Screens/OurCustomers/Customer/Customer'
import ErrorPage from './ErrorPage'
import Careers from '../Screens/Careers/Careers'
import Position from '../Screens/Careers/Position/Position'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/our-customers',
    element: <OurCustomers />,
    errorElement:<ErrorPage />
  },
  {
    path: '/about-us',
    element: <AboutUs />,
    errorElement:<ErrorPage />
  },
  {
    path: '/our-way',
    element: <OurWay />,
    errorElement:<ErrorPage />
  },
  {
    path: '/contact-us',
    element: <ContactUs />,
    errorElement:<ErrorPage />
  },
  {
    path: '/careers',
    element: <Careers />,
    errorElement:<ErrorPage />
  },
  {
    path: '/customer/:client',
    element: <Customer />,
    errorElement:<ErrorPage />
  },
  {
    path: '/careers/:career',
    element:  <Position />,
    errorElement:<ErrorPage />
  }

])

export default router