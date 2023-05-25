import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EloquentMan from '../assets/eloquentManNavImg.png'
import { Link } from 'react-scroll';

import '../styles/navbar.css'

const NavBar = () => {
    const [showAnimation, setShowAnimation] = useState(false)

    const navigate = useNavigate()

    const navPopUpOpen = () => {
        setShowAnimation(true)
    }
    const navPopUpClose = () => {
        setShowAnimation(false)
    }
    const navigateToResume = () => {
        navigate('/resume')
    }
    return (
        <nav className="navBarWrapper" name="navbar">
            <div className="navBarContent">
                <h2 className="navTitle">Mr.Mingels</h2>
                <div className="navImageWrapper">
                    <img className="navImage" src={EloquentMan}></img>
                </div>
                <ul className="navList">
                    <li className="navItem"><Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    >
                    About
                    </Link></li>
                    <li className="navItem"><Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-5}
                    duration={600}
                    >
                    Skills
                    </Link></li>
                    <li className="navItem"><Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={700}
                    >
                    Projects
                    </Link></li>
                    <li className="navItem"><Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                    >
                    Contact
                    </Link></li>
                    <li className="navItem" onClick={navigateToResume}>Resume</li>
                </ul>
                <div className="hamburgerMenu" onClick={navPopUpOpen}>
                    <div className="hamburgerMenuLine"></div>
                    <div className="hamburgerMenuLine"></div>
                    <div className="hamburgerMenuLine"></div>
                </div>
                    <div className={`fullPageWrapper ${showAnimation ? 'show' : ''}`}></div>
                    <div className={`navPopUpWrapper ${showAnimation ? 'show' : ''}`}>
                        <div className="navPopUpContent">
                            <ul className="burgerNavList">
                                <li className="burgerNavItem"><Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    onClick={navPopUpClose}
                                    >
                                    About
                                    </Link></li>
                                    <li className="burgerNavItem"><Link
                                    activeClass="active"
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-5}
                                    duration={600}
                                    onClick={navPopUpClose}
                                    >
                                    Skills
                                    </Link></li>
                                    <li className="burgerNavItem"><Link
                                    activeClass="active"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={700}
                                    onClick={navPopUpClose}
                                    >
                                    Projects
                                    </Link></li>
                                    <li className="burgerNavItem"><Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={800}
                                    onClick={navPopUpClose}
                                    >
                                    Contact
                                    </Link></li>
                                <li className="burgerNavItem" onClick={navigateToResume}>Resume</li>
                                <li className="navBarPopUpCloseBtn" onClick={navPopUpClose}>Close</li>
                            </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar