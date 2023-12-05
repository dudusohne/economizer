import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { QueryClientProvider } from 'react-query'

import App from './App.tsx'
import { queryClient } from './services/queryClient.ts'
import { theme } from './theme/index.ts'
import { ToastContainer } from 'react-toastify'
import Context from './context/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Context>
        <ThemeProvider theme={theme}>
          <App />
          <ToastContainer />
        </ThemeProvider>
      </Context>
    </QueryClientProvider>
  </React.StrictMode>,
)
