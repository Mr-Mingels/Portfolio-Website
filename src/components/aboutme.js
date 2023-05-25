import React, { useState, useEffect, useRef } from "react";
import '../styles/aboutme.css'
import DeveloperImg from '../assets/developerImg.png'
import { Link } from "react-router-dom";

const AboutMe = () => {

    const [showAnimation, setShowAnimation] = useState(false)

    const contentRef = useRef(null);

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
        threshold: 0.1,
      }
    );

    // Observe the content element
    observer.observe(contentRef.current);

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);
    return (
        <section className="aboutMeWrapper" name='about'>
            <div className="aboutMeContent">
                <div 
                ref={contentRef}
                className='aboutMeTxtWrapper'>
                    <h3 
                    className={`aboutMeTitle ${showAnimation ? "show" : ""}`}>About me</h3>
                    <span className={`border ${showAnimation ? 'show' : ''}`}></span>
                    <p 
                    className={`aboutMeParagraphs ${showAnimation ? 'show' : ''}`}>
                    Hello. I'm Pierre Mingels, a front-end software developer from San Diego, California. My focus is on building 
                    functional, aesthetically pleasing applications that offer users a clean and modern interface.</p>
                    <p 
                    className={`aboutMeParagraphs ${showAnimation ? 'show' : ''}`}>
                        In the ever-evolving field of software development, consistency and continuous learning are paramount. 
                        This is why I dedicate a significant amount of my personal time to further develop my skills and stay up-to-date 
                        with the latest technological advancements.</p>
                    <p 
                    className={`aboutMeParagraphs ${showAnimation ? 'show' : ''}`}>
                        When I'm not coding, you can find me reading, playing FPS games, at the gym, or spending quality 
                        time with friends. Balancing my professional and personal life is key to maintaining a creative and focused mindset 
                        in my work.</p>
                    <Link to='/resume'><button className={`resumeBtn ${showAnimation ? 'show' : ''}`}>Resume</button></Link>
                </div>
                <div className="aboutMeImgWrapper">
                    <img src={DeveloperImg} className='aboutMeImg'></img>
                </div>
            </div>  
        </section>
    )
}

export default AboutMe