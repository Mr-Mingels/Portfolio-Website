import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/resume.css'

import resume from '../assets/Resume.pdf';
import resumeImg from '../assets/Resume.png'


const Resume = () => {
    const [loading, setLoading] = useState(true)

    return (
        <section className="resumePageWrapper">
            <div className="resumePageContent">
                <div className="resumePageBtns">
                    <Link to='/' className="homeBtn">Home</Link>
                    <a className="pdfBtn" href={resume} target="_blank" rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()}
                    ><svg xmlns="http://www.w3.org/2000/svg" className="pdfBtnSvg" viewBox="0 0 512 512">
                        <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 
                        0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 
                        34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 
                        80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 
                        16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
                        </svg> PDF</a>
                </div>
                <div className="resumeWrapper">
                    <div className="resume-title-bottomBorder-wrapper">
                        <h3 className='resumeTitle'>Resume</h3>
                        <span className="resumeTitleBottomBorder"></span>
                    </div>
                    <div className="resumeContent">
                        <img className="resumeImg" src={resumeImg} onLoad={() => setLoading(false)} />
                        <div className="resumeLinksWrapper">
                            <h3 className="linkTitle">Links</h3>
                            <span className="linkTitleBottomBorder"></span>
                            <div className="resumeProjectsLinks">
                                <h4 className="resumeProjectTitle">Projects</h4>
                                <div className="projectLinksWrapper">Chatter Sphere: <div><a className="projectLink" target="_blank" 
                                rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()}
                                href="https://chatter-sphere.onrender.com/">Website</a>
                                <a className="projectGitLink" href="https://github.com/Mr-Mingels/Chatter-Sphere" target="_blank" 
                                rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()}>GitHub</a>
                                </div></div>
                                <div className="projectLinksWrapper">FotoFolio: <div><a className="projectLink" target="_blank" 
                                rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()}
                                href="https://foto-folio.vercel.app/">Website</a>
                                <a className="projectGitLink" href="https://github.com/Mr-Mingels/FotoFolio" target="_blank" 
                                rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()}>GitHub</a>
                                </div></div>
                                <div className="projectLinksWrapper">Puck-Master: <div><a className="projectLink" target="_blank" 
                                rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()}
                                href="https://puck-master.vercel.app/">Website</a>
                                <a className="projectGitLink" href="https://github.com/Mr-Mingels/Puck-Master" target="_blank" 
                                rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()}>GitHub</a>
                                </div></div>
                                <div className="projectLinksWrapper">Quick-Sum: <div><a className="projectLink" target="_blank" 
                                rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()}
                                href="https://quicksum-production.up.railway.app/">Website</a>
                                <a className="projectGitLink" href="https://github.com/Mr-Mingels/QuickSum" target="_blank" 
                                rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()}>GitHub</a>
                                </div></div>
                            </div>
                            <div className="resumeUserInfoLinksWrapper">
                                <h4 className="userInfoTitle">User Info</h4>
                                <div className="userInfoWrapper">Email: <a className="userInfo" href="mailto:Pierre.Mingels@protonmail.com" 
                                target="_blank" rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()}>
                                    Pierre.Mingels@protonmail.com
                                </a></div>
                                <div className="userInfoWrapper">GitHub: <a className="userInfo" href="https://github.com/Mr-Mingels" 
                                target="_blank" rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()}>Mr.Mingels</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {loading &&(
                <div className="resumeLoadingScreenWrapper">
                    <span className="resumeLoadingScreen"></span>
                </div>
            )}
        </section>
    )
}

export default Resume;



