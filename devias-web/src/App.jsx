// External Modules
import React from 'react'
import {RouterProvider} from 'react-router-dom'

// Router
import router from './Router/routes'

export default function App() {

  // Local state
  const [loading, setLoading] = React.useState(true)

  // Mount effect
  React.useEffect(() => {

    // Update loading
    setLoading(false)

    // Config fontAwesome
    const configFA = document.createElement('script')
    configFA.innerHTML = 'FontAwesomeConfig = { autoReplaceSvg: "nest"};'
    document.body.appendChild(configFA)

  }, [])

  return (

    !loading &&
      <RouterProvider router={router} />

  )

}
