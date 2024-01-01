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
                    <h2 className='heading'>Coding Profile</h2>
                        <a href="https://www.facebook.com" target='_blank'>
                            <div className="coding_profile">
                                <img src="data:image/jpeg;base64,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" alt="" />
                                <span>Leetcode Profile</span>
                                <ul>
                                    <li>Contest Rating: 1882</li>
                                    <li> <span>Knight Badge </span> (top 4.92% globally)</li>
                                    <li>600+ questions</li>
                                </ul>
                            </div>
                        </a>
                        <a href="https://www.facebook.com" target='_blank'>
                            <div className="coding_profile">
                                <img src="data:image/jpeg;base64,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" alt="" />
                                <span>Leetcode Profile</span>
                                <ul>
                                    <li>Contest Rating: 1882</li>
                                    <li> <span>Knight Badge </span> (top 4.92% globally)</li>
                                    <li>600+ questions</li>
                                </ul>
                            </div>
                        </a>
                        <a href="https://www.facebook.com" target='_blank'>
                            <div className="coding_profile">
                                <img src="data:image/jpeg;base64,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" alt="" />
                                <span>CodeForces Profile</span>
                                <ul>
                                    <li>Contest Rating: 1468</li>
                                    <li> Rank : <span>Specialist</span></li>
                                    <li>200+ questions</li>
                                </ul>
                            </div>
                        </a>
                        {/* <p>
                            Hi!, My name is <span>Praful Pratik</span>
                        </p>
                        <br />
                        <ul>
                            <li> Welcome to my corner of the internet! I am a passionate and detail-oriented software developer with a keen interest in crafting robust and user-friendly web applications. </li><br />
                            <li>  A team player with excellent communication skills and a knack for problem-solving. </li><br />
                            <li>  I'm always exploring new technologies to stay at the forefront of the ever-evolving tech landscape.</li><br />
                            <li> I've contributed to a variety of web applications, each teaching me valuable lessons and pushing me to grow.</li><br />
                        </ul>
                        <p>
                            Feel free to explore my portfolio and get in touch. Let's create something amazing together!
                        </p> */}

                    </div>
                </div>
            </div>
            <div className="education_container">
                <h1> Educational Qualification: </h1>
                <hr />
                <div className="timeline">
                    <div className="timeline-container left">
                        <div className="timeline-content">
                            <span className='qualification'>Graduation</span>
                            <h3>NIT Jamshedpur </h3> <h4>(2019-23)</h4> <br />
                            <ul>
                                <li>B.Tech  (Civil Engineering) CGPA: 8.32</li>
                                <li>Skills: C/C++, Data Structures and Algorithm, Web Development, Git/ Github</li>
                                <li> Mentor and volunteer at Sankalp (Nov 2019 - Jan 2023)</li>
                            </ul>

                        </div>
                    </div>
                    <div className="timeline-container right">
                        <div className="timeline-content">
                            <span className='qualification'>Intermediate</span>
                            <h3>DPS Bokaro</h3> <h4>(2016-18)</h4>
                            <ul>
                                <li>PCM (Math, Science) - 89.6%</li>
                                <li>Member of Leadership and Debate Club</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-container left">
                        <div className="timeline-content">
                            <span className='qualification'>Matriculation</span>
                            <h3>Creane Memorial High School </h3> <h4>(2016)</h4> <br />
                            <ul>
                                <li>B.Tech  (Civil Engineering) CGPA: 8.32</li>
                                <li>Skills: C/C++, Data Structures and Algorithm, Web Development, Git/ Github</li>
                                <li> Mentor and volunteer at Sankalp (Nov 2019 - Jan 2023)</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About