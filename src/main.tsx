import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Basket from './Basket.tsx'
import Header from './Header.tsx' // Fix the casing of the import statement

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Basket />
  </React.StrictMode>,
)
