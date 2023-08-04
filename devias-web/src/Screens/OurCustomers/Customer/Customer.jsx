// External modules
import React from 'react'
import {useParams} from 'react-router'

// Internal modules
import './Customer.scss'
import Header from 'Components/Header/Header'
import Footer from 'Components/Footer/Footer'
import ProjectDetails from 'Components/ProjectDetails/ProjectDetails'
import json from 'Components/ProjectDetails/project.json'

export default function Costumer() {

  // Constants
  const projects = json.projects
  const isInCustomerView = true

  const {client} = useParams()

  const customer = projects.filter(project => project.code === client)

  return (
    customer.map((customer, index) => (
      <main key={index} id='customer-single-page'>
        <Header />
        {/* Section title */}
        <section className='section-title'>
          <div className='container'>
            <div className='main-title'>
              <h5>
                - Customers
              </h5>
              <h1>
                {customer.name}
              </h1>
            </div>
          </div>
        </section>
        {/* Section post */}
        <section className='post-content'>
          <div className='container'>
            <div className='contain-content'>
              <div className='customer-logo'>
                <img src={customer['img-logo']} alt={customer.name} />
              </div>
              <p>
                {customer['long-description']}
                <br />
                <br />
                {customer['long-description']}
              </p>
              <div className='customer-page'>
                <img src={customer['img-page']} alt={customer.name} />
              </div>
            </div>
          </div>
        </section>
        {/* Section stech */}
        <section className='tech-stack'>
          <div className='container'>
            <div className='contain-tech'>
              <div className='tech-title'>
                <h2>
                  Tech stack.
                </h2>
              </div>
              <div className='tech-card'>
                <img src={customer['tech-img']} alt={customer['tech-name']} />
                <p>
                  {customer['tech-name']}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Section projects */}
        <section className='highlighted-project'>
          <div className='container'>
            <h2>
              Check out our projects.
            </h2>
            <ProjectDetails customerView={isInCustomerView} />
          </div>
        </section>
        <Footer />
      </main>
    ))
  )

}
