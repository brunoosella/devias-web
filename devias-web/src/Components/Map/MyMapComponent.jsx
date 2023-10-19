// External Modules
import React from 'react'

// Internal Modules
import './MyMapComponent.scss'

export default function MyMapComponent({center, zoom}) {

  const ref = React.useRef()

  React.useEffect(() => {

    new window.google.maps.Map(ref.current, {
      center,
      zoom
    })

  })

  return (
    <div id='map-container'>
      <div ref={ref} id='map' />
    </div>
  )

}