import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import "../styles/main.css";

const Main = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const contentRef = useRef(null);

  const navigate = useNavigate()

  useEffect(() => {
    navigate('https://pierre-mingels.vercel.app/')
  },[])

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
        threshold: 0.3,
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
    <section className="mainWrapper">
      <div 
      ref={contentRef}
      className="mainContent">
        <h1
          className={`name ${showAnimation ? "show" : ""}`}
        >
          Pierre Mingels
        </h1>
        <h3
          className={`jobTitle ${showAnimation ? "show" : ""}`}
        >
          Full-Stack Software Developer
        </h3>
        <button className='contactBtn'>
        <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={800}
        >Contact Me</Link></button>
      </div>
    </section>
  );
};

export default Main;

