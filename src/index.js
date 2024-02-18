import React from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import { UserProvider } from './hooks/UserContext'
import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'

createRoot(document.getElementById('root')).render(
  <>
  <UserProvider>
    <Routes />
    </UserProvider>
    <ToastContainer autoClose={2000} theme='colored'/>
    <GlobalStyles />
  </>
)
