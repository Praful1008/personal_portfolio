import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <header>
        <nav>
            <a href="#" className='brand'> Navbar </a>
            <ul className='nav-list'>
              <li> <a href="#">Home</a></li>
              <li> <a href="#">About</a></li>
              <li> <a href="#">Experience</a></li>
              <li> <a href="#">Contact</a></li>
              <div id="animation" className='start-home'></div>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar