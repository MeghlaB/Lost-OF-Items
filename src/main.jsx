import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import ThemeProvider from './AuthProvider/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>
  </ThemeProvider>
)
