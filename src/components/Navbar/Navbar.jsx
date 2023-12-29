import React, { useState } from 'react'
import './Navbar.css'

function Navbar() {

  function replaceClass(element) {
    let x = element;
    switch (x) {
      case "about":
        document.getElementById("animation").className = "start-About";
        break;
      case "experience":
        document.getElementById("animation").className = "start-Experience";
        break;
      case "contact":
        document.getElementById("animation").className = "start-Contact";
        break;
      default:
        document.getElementById("animation").className = "start-home";
        break;
    }
  }

  const [activeNavItem, setActiveNavItem] = useState('home');

  function handleClick(text){
    setActiveNavItem(text);
    replaceClass(text);

  }
  return (
    <header>
      <nav>
        <a href="#" className='brand'> Navbar </a>
        <input type="checkbox" id="toggle-checkbox" />
        <label htmlFor="toggle-checkbox" className="toggle-btn">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>
        <ul className='nav-list'>
          <li className={activeNavItem === 'home' ? 'nav_active' : 'nav_inactive'}
            onClick={()=>{handleClick('home')}}>
            <a href="#">Home</a>
          </li>
          <li className={activeNavItem === 'about' ? 'nav_active' : 'nav_inactive'}
            onClick={()=>{handleClick('about')}}>
            <a href="#">About</a>
          </li>
          <li className={activeNavItem === 'experience' ? 'nav_active' : 'nav_inactive'}
            onClick={() => {handleClick('experience')}}>
            <a href="#">Experience</a>
          </li>
          <li className={activeNavItem === 'contact' ? 'nav_active' : 'nav_inactive'}
            onClick={() => {handleClick('contact')}}>
            <a href="#">Contact</a>
          </li>
          <div id="animation" className='start-home'></div>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar