// External modules
import React from 'react'
import {Link} from 'react-router-dom'

// Internal modules
import {GoChevronLeft, GoChevronRight} from 'react-icons/go'
import './InsigniaClutch.scss'

// Assets
import itServicesCompany from './Assets/top_clutch.co_it_services_company_government_argentina.png'
import webDevelopersArgentina from './Assets/top_clutch.co_web_developers_government_argentina.png'
import ecommerceDevelopersArgentina from './Assets/top_clutch.co_e-commerce_developers_medical_argentina.png'
import itServicesCompanyRealEstate from './Assets/top_clutch.co_it_services_company_real_estate_argentina.png'
import ErpConsultingCompany from './Assets/top_clutch.co_erp_consulting_company_argentina_2024.png'
import softwareDeveloperArgentina from './Assets/top_clutch.co_software_developers_government_argentina.png'
import softwareDeveloperRealEstate from './Assets/top_clutch.co_software_developers_real_estate_argentina.png'
import appDevelopmentCompanyRealEstate from './Assets/top_clutch.co_app_development_company_real_estate_argentina.png'
import itServicesCompanyMedical from './Assets/top_clutch.co_it_services_company_medical_argentina.png'

export default function InsigniaClutch() {

  // Local state
  const [currentIndex, setCurrentIndex]       = React.useState(0)
  const [bufferInsignias, setBufferInsignias] = React.useState([...insignias])
  const [insignias, setInsignias]             = React.useState([
    {
      title: 'Top Clutch It Services Company Government Argentina',
      img: itServicesCompany
    },
    {
      title: 'Top Clutch It Services Company Government Argentina',
      img: webDevelopersArgentina
    },
    {
      title: 'Top Clutch E-commerce Developers Medical Argentina',
      img: ecommerceDevelopersArgentina
    },
    {
      title: 'Top Clutch It Services Company Real Estate Argentina',
      img: itServicesCompanyRealEstate
    },
    {
      title: 'Top Clutch Erp Consulting Company Argentina 2024',
      img: ErpConsultingCompany
    },
    {
      title: 'Top Clutch Software Developers Government Argentina',
      img: softwareDeveloperArgentina
    },
    {
      title: 'Top Clutch Software Developers Real Estate Argentina',
      img: softwareDeveloperRealEstate
    },
    {
      title: 'Top Clutch App Development Company Real Estate Argentina',
      img: appDevelopmentCompanyRealEstate
    },
    {
      title: 'Top Clutch It Services Company Medical Argentina',
      img: itServicesCompanyMedical
    }
  ])

  //References
  const carouselRef = React.useRef()

  // Effects
  React.useEffect(() => {

    const interval = setInterval(() => {

      if (currentIndex >= insignias.length) {

        carouselRef.current.style.transition = 'none'
        setCurrentIndex(0)

      } else {

        nextImage()

      }

    }, 10000)

    return () => clearInterval(interval)

  }, [currentIndex])

  React.useEffect(() => {

    if (currentIndex !== 0) {

      carouselRef.current.style.transition = 'transform 0.5s ease'

    }
    carouselRef.current.style.transform = `translateX(-${currentIndex * 100 / 5}%)`
    console.log(currentIndex)

  }, [currentIndex, insignias.length])

  const nextImage = () => {

    setCurrentIndex((currentIndex + 1) % insignias.length)

    if (currentIndex === insignias.length - 5) {

      setInsignias([...insignias, ...bufferInsignias])
      setBufferInsignias(insignias)

    }

  }

  const previousImage = () => {

    setCurrentIndex(currentIndex === 0 ? insignias.length - 1 : currentIndex - 1)

    if (currentIndex === 0 && bufferInsignias.length === 0) {

      setBufferInsignias([...insignias])
      setInsignias([insignias[insignias.length - 1]])

    }

  }

  return (
    <div id='insignia-carousel'>
      <div className='container'>
        <div className='carousel-container' ref={carouselRef}>

          {insignias.map((insignia, index) => (
            <div
              className={`insignia ${index >= currentIndex && index < currentIndex + 5 ? 'visible' : 'hidden'}`}
              key={index}
            >
              <Link to='https://clutch.co/profile/devias?utm_source=clutch_top_company_badge&utm_medium=image_embed#highlights' target='_blank'>
                <img src={insignia.img} alt={insignia.title} />
              </Link>
            </div>
          ))}
        </div>
        <button className='slider-button prev-button' onClick={previousImage}>
          <i className='icons'> <GoChevronLeft /> </i>
        </button>
        <button className='slider-button next-button' onClick={nextImage}>
          <i className='icons'> <GoChevronRight /> </i>
        </button>
      </div>
    </div>
  )

}
