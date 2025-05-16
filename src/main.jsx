import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greeting from './App.jsx'
import Second from './second.jsx'
import States from './states.jsx'
import Counter from './counter.jsx'
import Calculator from './calculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Greeting />
    <Second />
    <States />
    <Counter />  */}
    <Calculator />
  </StrictMode>,
)
