// External modules
import React from 'react'

// Internal modules
import './Home.scss'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function Home(){

  return(
    <div id='home'>
      <Header />
      {/* content home */}
      <div id='prueba'><h1></h1></div>
      <Footer />
    </div>
  )

}