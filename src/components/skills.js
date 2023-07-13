import React, { useState, useEffect, useRef } from "react"; 
import '../styles/skills.css'

const Skills = () => {

    const [showAnimation, setShowAnimation] = useState(false)
    const [mobile, setMobile] = useState(false)

    const contentRef = useRef(null);

    useEffect(() => {
      const checkMobile = () => {
        if(window.innerWidth <= 500) {
          setMobile(true)
          console.log('hello there')
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
            threshold: mobile ? 0.001 : 0.1,
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
        <section className="skillsWrapper" name='skills'>
            <div 
            ref={contentRef}
            className="skillsContent">
                <h3 className={`skillsTitle ${showAnimation ? 'show' : ''}`}>Skills</h3>
                <span className={`skillsTitleBottomBorder ${showAnimation ? 'show' : ''} ${window.innerWidth <= 500 ? 'mobile' : ''}`}></span>
                <div className="allSkillsWrapper">
                    <div className="skillsCardsWrapper">
                        <div className={`skillsCardsContent ${showAnimation ? 'show' : ''}`}>
                            <h3 className="skillTitle">Tools and Technologies</h3>
                            <ul className="skillsList">
                                <li className="listedSkill">Git</li>
                                <li className="listedSkill">Sublime Text</li>
                                <li className="listedSkill">NPM</li>
                                <li className="listedSkill">Webpack</li>
                                <li className="listedSkill">Git Bash</li>
                                <li className="listedSkill">VS Code</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skillsCardsWrapper">
                        <div className={`technicalSkillsContent ${showAnimation ? 'show' : ''}`}>
                            <h3 className="skillTitle">Technical Skills</h3>
                            <ul className="skillsList">
                                <li className="listedSkill">HTML 5</li>
                                <li className="listedSkill">CSS 3</li>
                                <li className="listedSkill">Java Script</li>
                                <li className="listedSkill">React</li>
                                <li className="listedSkill">Node.js</li>
                                <li className="listedSkill">Express</li>
                                <li className="listedSkill">Mongoose</li>
                                <li className="listedSkill">MongoDB</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skillsCardsWrapper">
                        <div className={`skillsCardsContent ${showAnimation ? 'show' : ''}`}>
                            <h3 className="skillTitle">Soft Skills</h3>
                            <ul className="skillsList">
                                <li className="listedSkill">Constant Self-learning</li>
                                <li className="listedSkill">Problem Solver</li>
                                <li className="listedSkill">Strong Work Ethic</li>
                                <li className="listedSkill">Good Communication Skills</li>
                                <li className="listedSkill">Patient and Persistent</li>
                                <li className="listedSkill">Adaptability</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="skillsTrapezium"></div>
            </div>
        </section>
    )
}

export default Skills