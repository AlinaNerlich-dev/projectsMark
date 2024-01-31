
import { NavLink, Outlet } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <NavLink to="">Home</NavLink>
            <NavLink to="heroes">Heroes</NavLink>
            <NavLink to="about">About</NavLink>
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
