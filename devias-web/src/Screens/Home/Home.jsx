// External modules
import React from 'react'

// Internal modules
import './Home.scss'
import Header from '../../components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function Home(){

  return(
    <div id='home'>
      <Header/>
      {/* content home */}
      <Footer/>
    </div>
  )

}