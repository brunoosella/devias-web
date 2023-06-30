// External modules
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Routes
import routes from './routes'

export default function Router() {

  return (
    <BrowserRouter>

      <Routes>
        {/* Routes */}
        {
          routes.map((route, index) => (
            <Route
              element={route.component}
              exact={route.exact}
              index={route.index}
              key={index}
              path={route.path}
            />
          ))
        }
      </Routes>
    </BrowserRouter>
  )

}