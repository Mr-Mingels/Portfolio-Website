import './App.css';
import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

const App = () => {

  const NavBar = lazy(() => import('./components/navbar'));
  const Main = lazy(() => import('./components/main'));
  const AboutMe = lazy(() => import('./components/aboutme'));
  const Skills = lazy(() => import('./components/skills'));
  const Projects = lazy(() => import('./components/projects'));
  const Contact = lazy(() => import('./components/contact'));
  const Resume = lazy(() => import('./components/resume'))
  const Footer = lazy(() => import('./components/footer'))

  const RedirectToHome = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
      navigate('/');
    }, [navigate]);
  }

  useEffect(() => {
    navigate('https://pierre-mingels.vercel.app/')
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={
        <div className="loadingScreenWrapper">
            <span className="loadingScreen"></span>
        </div>}>
          <Routes>
          <Route path="/" element={<>
              <NavBar />
              <Main />
              <AboutMe />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>} />
            <Route path='/resume' element={<Resume />} />
            <Route path='*' element={<RedirectToHome />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
