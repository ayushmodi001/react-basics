import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greeting from './App.jsx'
import Second from './second.jsx'
import States from './states.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <Second />
    <States />
  </StrictMode>,
)
