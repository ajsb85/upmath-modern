import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from '@react-spectrum/s2'
import '@react-spectrum/s2/page.css'
import './index.css'
import './userWorker'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)
