import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about_me">
            <div className="outer">
                <div className="container">
                    <div className="circle c1"></div>
                    <div className="circle c2"></div>
                    <div className="circle c3"></div>
                    <div className="circle c4"></div>
                    <div className="box">
                        
                    </div>
                </div>
                <p>
                    Hi!, My name is <span>Praful Pratik</span>
                </p>
            </div>

            <div className="education">
                <h2> Educational Qualification :-</h2>
                <div className="timeline">
                    <div className="timeline-container left">
                        <div className="timeline-content">
                            <h2>2017</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate officiis quo deserunt! Vero soluta
                                distinctio reprehenderit nulla similique beatae est, hic unde impedit? Tempora quasi neque dicta
                                hic, doloribus debitis?
                            </p>
                        </div>
                    </div>
                    <div className="timeline-container right">
                        <div className="timeline-content">
                            <h2>2016</h2>
                            <p>Lorem ipsum..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About