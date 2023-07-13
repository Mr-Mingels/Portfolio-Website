import React, { useState, useEffect, useRef } from "react";
import '../styles/aboutme.css'
import DeveloperImg from '../assets/developerImg.png'
import { Link } from "react-router-dom";

const AboutMe = () => {

    const [showAnimation, setShowAnimation] = useState(false)
    const [mobile, setMobile] = useState(false)

    const contentRef = useRef(null);

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
        threshold: mobile ? 0.0001 : 0.1,
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
        <section className="aboutMeWrapper" name='about'>
            <div className="aboutMeContent">
                <div 
                ref={contentRef}
                className='aboutMeTxtWrapper'>
                    <h3 
                    className={`aboutMeTitle ${showAnimation ? "show" : ""}`}>About me</h3>
                    <span className={`border ${showAnimation ? 'show' : ''} ${window.innerWidth <= 500 ? 'mobile' : ''}`}></span>
                    <p 
                    className={`aboutMeParagraphs ${showAnimation ? 'show' : ''}`}>
                    Hello. I'm Pierre Mingels, a full-stack software developer from San Diego, California. My focus is on building 
                    functional, aesthetically pleasing applications that offer users a clean and modern interface.</p>
                    <p 
                    className={`aboutMeParagraphs ${showAnimation ? 'show' : ''}`}>
                        In the ever-evolving field of software development, consistency and continuous learning are paramount. 
                        This is why I dedicate a significant amount of my personal time to further develop my skills and stay up-to-date 
                        with the latest technological advancements.</p>
                    <p 
                    className={`aboutMeParagraphs ${showAnimation ? 'show' : ''}`}>
                        When I'm not coding, I'm usually, playing FPS games, at the gym, or hanging out with friends.</p>
                      <Link to='/resume' className={`resumeBtn ${showAnimation ? 'show' : ''}`}>Resume</Link>
                </div>
                <div className="aboutMeImgWrapper">
                    <img src={DeveloperImg} className='aboutMeImg'></img>
                </div>
            </div>  
        </section>
    )
}

export default AboutMe