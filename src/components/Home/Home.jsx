import React from 'react'
import './Home.css'
import myImage from './img/snow_full.png'

function Home() {
  return (
    <div className='home'>
      <div className="outer">
        <div className="container">
          <div className="circle c1"></div>
          <div className="circle c2"></div>
          <div className="circle c3"></div>
          <div className="circle c4"></div>
          <div className="box">
            <div className="text">
              <p>
                Hi, I'm
                <br />
                <span className="my_name">Praful Pratik</span>
              </p>
              <br />
            </div>
            <div className="image">
              <img src={myImage} alt='' />
            </div>
            <div className="btn_div">
              <button type="button" className="btn">
                Download Resume
              </button>
              <button type="button" className="btn">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home