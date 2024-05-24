// External modules
import React from 'react'
import {Link} from 'react-router-dom'

// Internal modules
import './InsigniaClutch.scss'

export default function InsigniaClutch() {

  // Local state
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const [insignias, setInsignias] = React.useState([
    {
      id: 1,
      src: 'https://shareables.clutch.co/share/badges/1086331/81795?utm_source=clutch_top_company_badge&utm_medium=image_embed',
      title: 'Top Clutch It Services Company Government Argentina',
      img: 'https://static.vecteezy.com/system/resources/previews/013/453/453/large_2x/number-1-3d-gold-one-free-png.png'
    },
    {
      id: 2,
      src: 'https://shareables.clutch.co/share/badges/1086331/81795?utm_source=clutch_top_company_badge&utm_medium=image_embed',
      title: 'Top Clutch It Services Company Government Argentina',
      img: 'https://shareables-prod-static.clutch.co/badges/top_clutch.co_it_services_company_government_argentina.svg'
    },
    {
      id: 3,
      src: 'https://shareables.clutch.co/share/badges/1086331/81795?utm_source=clutch_top_company_badge&utm_medium=image_embed',
      title: 'Top Clutch It Services Company Government Argentina',
      img: 'https://shareables-prod-static.clutch.co/badges/top_clutch.co_it_services_company_government_argentina.svg'
    },
    {
      id: 4,
      src: 'https://shareables.clutch.co/share/badges/1086331/81795?utm_source=clutch_top_company_badge&utm_medium=image_embed',
      title: 'Top Clutch It Services Company Government Argentina',
      img: 'https://shareables-prod-static.clutch.co/badges/top_clutch.co_it_services_company_government_argentina.svg'
    },
    {
      id: 5,
      src: 'https://shareables.clutch.co/share/badges/1086331/81795?utm_source=clutch_top_company_badge&utm_medium=image_embed',
      title: 'Top Clutch It Services Company Government Argentina',
      img: 'https://shareables-prod-static.clutch.co/badges/top_clutch.co_it_services_company_government_argentina.svg'
    },
    {
      id: 6,
      src: 'https://shareables.clutch.co/share/badges/1086331/81795?utm_source=clutch_top_company_badge&utm_medium=image_embed',
      title: 'Top Clutch It Services Company Government Argentina',
      img: 'https://shareables-prod-static.clutch.co/badges/top_clutch.co_it_services_company_government_argentina.svg'
    },
    {
      id: 7,
      src: 'https://shareables.clutch.co/share/badges/1086331/81795?utm_source=clutch_top_company_badge&utm_medium=image_embed',
      title: 'Top Clutch It Services Company Government Argentina',
      img: 'https://shareables-prod-static.clutch.co/badges/top_clutch.co_it_services_company_government_argentina.svg'
    },
    {
      id: 8,
      src: 'https://shareables.clutch.co/share/badges/1086331/81795?utm_source=clutch_top_company_badge&utm_medium=image_embed',
      title: 'Top Clutch It Services Company Government Argentina',
      img: 'https://shareables-prod-static.clutch.co/badges/top_clutch.co_it_services_company_government_argentina.svg'
    },
    {
      id: 9,
      src: 'https://shareables.clutch.co/share/badges/1086331/81795?utm_source=clutch_top_company_badge&utm_medium=image_embed',
      title: 'Top Clutch It Services Company Government Argentina',
      img: 'https://cdn-icons-png.flaticon.com/512/10232/10232670.png'
    }
  ])

  const [bufferInsignias, setBufferInsignias] = React.useState([...insignias])

  const carouselRef = React.useRef()

  // Effect
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
              <Link to={insignia.src} target='_blank'>
                <img src={insignia.img} alt={insignia.title} />
              </Link>
            </div>
          ))}
          {/* {insignias.map((insignia, index) => (
            <div
              className={`insignia ${index + insignias.length >= currentIndex && index + insignias.length < currentIndex + 5 ? 'visible' : 'hidden'}`}
              key={index + insignias.length}
            >
              <Link to={insignia.src} target='_blank'>
                <img src={insignia.img} alt={insignia.title} />
              </Link>
            </div>
          ))} */}
        </div>
        <button className='prev-button' onClick={previousImage}>
          Anterior
        </button>
        <button className='next-button' onClick={nextImage}>
          Siguiente
        </button>
      </div>
    </div>
  )

}
