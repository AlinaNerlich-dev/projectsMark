import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './views/About.jsx'
import Heroes from './views/Heroes.jsx'
import Hero from './views/Hero.jsx'
import Home from './views/Home.jsx'
import AddHeroForm from './views/AddHeroForm.jsx'
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes basename="/">
        <Route path="/" element={<App />}>
            <Route index element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="heroes" element={<Heroes />}/>
            <Route path="heroes/hero/:id" element={<Hero />}/>
            <Route path="heroes/add" element={<AddHeroForm />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
