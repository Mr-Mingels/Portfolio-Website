import React, { useState, useEffect, useRef} from "react";
import '../styles/projects.css'
import fotoFolioScreenShot from '../assets/fotoFolioScreenShot.png'
import puckMasterScreenShot from '../assets/puckMasterScreenShot.png'
import quickSumScreenShot from '../assets/quickSumScreenShot.png'
import fotoFolioMobileScreenShot from '../assets/fotoFolioMobileScreenShot.png'
import puckMasterMobileScreenShot from '../assets/puckMasterMobileScreenShot.png'
import quickSumMobileScreenShot from '../assets/quickSumMobileScreenShot.png'
import chatterSphereScreenShot from '../assets/chatterSphereDesktopScreenShot.png'
import chatterSphereMobileScreenShot from '../assets/chatterSphereMobileScreenShot.png'

const Projects = () => {
    const [showAnimation, setShowAnimation] = useState(false)
    const contentRef = useRef(null);
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
      const checkMobile = () => {
        if(window.innerWidth <= 500) {
          setMobile(true)
        } else {
          setMobile(false)
        }
      }
    
      // Initial check
      checkMobile();
    
      // Add event listener to window resize
      window.addEventListener('resize', checkMobile);
    
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', checkMobile);
      }
    }, []);

    useEffect(() => {
        // Create an observer instance
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              // If the content element is in the viewport, show the content
              if (entry.isIntersecting) {
                setShowAnimation(true);
              } else {
                setShowAnimation(false);
              }
            });
          },
          {
            // Set the root to null to use the browser viewport as the observer
            root: null,
            // Set the threshold to 0.5 to trigger the callback when the element is 50% in the viewport
            threshold: mobile ? 0.001 : 0.038,
          }
        );
    
        // Observe the content element
        observer.observe(contentRef.current);
    
        // Cleanup function to disconnect the observer when the component unmounts
        return () => {
          observer.disconnect();
        };
      }, [mobile]);

    return (
        <section className="projectsWrapper" name='projects'>
            <div className="projectsContent" ref={contentRef}>
                <h3 className={`projectsTitle ${showAnimation ? 'show' : ''}`}>Projects</h3>
                <span className={`projectsTitleBottomBorder ${showAnimation ? 'show' : ''}`}></span>
                <div className="listedProjectsWrapper">
                    <div className={`projectBoxWrapper ${showAnimation ? 'show' : ''}`}>
                        <img className="projectImg" src={window.innerWidth > 584 ? fotoFolioScreenShot : fotoFolioMobileScreenShot}/>
                        <div className="projectInfoWrapper">
                            <h3 className="projectTitle">FotoFolio</h3>
                            <p className="projectDescription">A Photo gallery app for searching, saving, and downloading images, providing 
                            a seamless visual experience</p> 
                            <div className="projectBtnWrapper">
                                <a href="https://foto-folio.vercel.app/" target="_blank" rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()} 
                                className="projectLiveDemoBtn"><svg xmlns="http://www.w3.org/2000/svg" className="eyeImg" 
                                viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 
                                16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 
                                78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 
                                256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 
                                0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 
                                117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 
                                3.3 13.2 3.3 20.3z"/></svg>Live Demo</a>
                                <a href="https://github.com/Mr-Mingels/FotoFolio" target="_blank" rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()} 
                                className="projectViewCodeBtn"><svg xmlns="http://www.w3.org/2000/svg" className="codingImg" 
                                viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 
                                39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 
                                12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 
                                0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 
                                45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>Code</a>
                            </div>
                        </div>
                    </div>
                    <div className={`projectBoxWrapper ${showAnimation ? 'show' : ''}`}>
                        <img className="projectImg" src={window.innerWidth > 584 ? puckMasterScreenShot : puckMasterMobileScreenShot}/>
                        <div className="projectInfoWrapper">
                            <h3 className="projectTitle">Puck-Master</h3>
                            <p className="projectDescription">An interactive virtual table hockey game playable on both mobile and desktop, 
                            where you face off against a computer.</p> 
                            <div className="projectBtnWrapper">
                                <a href="https://puck-master.vercel.app/" target="_blank" rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()} 
                                className="projectLiveDemoBtn"><svg xmlns="http://www.w3.org/2000/svg" className="eyeImg" 
                                viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 
                                16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 
                                78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 
                                256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 
                                0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 
                                117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 
                                3.3 13.2 3.3 20.3z"/></svg>Live Demo</a>
                                <a href="https://github.com/Mr-Mingels/Puck-Master" target="_blank" rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()}
                                className="projectViewCodeBtn"><svg xmlns="http://www.w3.org/2000/svg" className="codingImg" 
                                viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 
                                39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 
                                12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 
                                0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 
                                45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>Code</a>
                            </div>
                        </div>
                    </div>
                    <div className={`projectBoxWrapper ${showAnimation ? 'show' : ''}`}>
                        <img className="projectImg" src={window.innerWidth > 584 ? quickSumScreenShot : quickSumMobileScreenShot}/>
                        <div className="projectInfoWrapper">
                            <h3 className="projectTitle">Quick-Sum</h3>
                            <p className="projectDescription">A summarization application that quickly condenses articles and blog posts 
                            by simply pasting the URL</p> 
                            <div className="projectBtnWrapper">
                                <a href="https://quicksum-production.up.railway.app" target="_blank" rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()}
                                className="projectLiveDemoBtn"><svg xmlns="http://www.w3.org/2000/svg" className="eyeImg" 
                                viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 
                                16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 
                                78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 
                                256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 
                                0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 
                                117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 
                                3.3 13.2 3.3 20.3z"/></svg>Live Demo</a>
                                <a href="https://github.com/Mr-Mingels/QuickSum" target="_blank" rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()} 
                                className="projectViewCodeBtn"><svg xmlns="http://www.w3.org/2000/svg" className="codingImg" 
                                viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 
                                39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 
                                12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 
                                0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 
                                45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>Code</a>
                            </div>
                        </div>
                    </div>
                    <div className={`projectBoxWrapper ${showAnimation ? 'show' : ''}`}>
                        <img className="projectImg" src={window.innerWidth > 584 ? chatterSphereScreenShot : chatterSphereMobileScreenShot}/>
                        <div className="projectInfoWrapper">
                            <h3 className="projectTitle">Chatter Sphere</h3>
                            <p className="projectDescription">A real-time chat platform that enables seamless communication with 
                            individuals across the globe</p> 
                            <div className="projectBtnWrapper">
                                <a href="https://chatter-sphere.onrender.com" target="_blank" rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()} 
                                className="projectLiveDemoBtn"><svg xmlns="http://www.w3.org/2000/svg" className="eyeImg" 
                                viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 
                                16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 
                                78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 
                                256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 
                                0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 
                                117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 
                                3.3 13.2 3.3 20.3z"/></svg>Live Demo</a>
                                <a href="https://github.com/Mr-Mingels/Chatter-Sphere" target="_blank" rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()}
                                className="projectViewCodeBtn"><svg xmlns="http://www.w3.org/2000/svg" className="codingImg" 
                                viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 
                                39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 
                                12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 
                                0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 
                                45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projectsTrapezium"></div>
            <div className="projectsSquare"></div>
        </section>
    )
}

export default Projects