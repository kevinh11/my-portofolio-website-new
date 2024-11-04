import './App.css';
import React from 'react'
import Navbar from "./components/navbar.jsx";
import  {useEffect, useState, useRef} from 'react';
import {setUp} from './utils/balls.js'
import Hero from './pages/hero.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutMe from './pages/aboutme.jsx';
import Projects from './pages/projects.jsx';
import TimelinePage from './pages/timelinePage.jsx';
import ContactMe from './pages/contactme.jsx';
import Footer from './components/footer.jsx';

function App() {
  const [sceneRendered, setSceneRendered] = useState(false);
  const backToTop = useRef(null)
  const viewport = useRef(window.innerHeight)
  const footerRef = useRef(null)

  
  const projects = [
    {
      id: 1,
      name: "UMNGotchi",
      year: 2022,
      desc: "A Tamagotchi-themed game created for the Midterm Exam in Web Programming",
      githubLink: "https://github.com/kevinh11/Tamagotchi-Game",
      tags: ["HTML5", "CSS3", "JS"]
    },
    {
      id: 2,
      name: "Gereja Isa Al-Masih",
      year: 2023,
      desc: "Website for Isa Al-Masih Rajawali Church, featuring full CRUD functionality and an admin panel",
      githubLink: "https://github.com/kevinh11/UAS_WebProg_Gereja",
      tags: ["Laravel", "CSS3", "JS", "HTML5", "MySQL"]
    },
    {
      id: 3,
      name: "Fokus Budaya ULTIMAGZ",
      year: 2023,
      desc: "An artistic website showcasing various Indonesian cultures. Parts developed: Pages 4 and 5",
      githubLink: "https://github.com/kevinh11/fokus-2023-budaya",
      tags: ["ReactJS", "CSS3"]
    },
    {
      id: 4,
      name: "GeoMinder (on progress)",
      year: 2024,
      desc: "A geolocation-based reminder and note-taking app that allows users to receive notifications on what they should do or buy, when they are near a certain location.",
      githubLink: "https://github.com/C-4NDR3W/GeoMinder",
      tags: ["Kotlin", "Firebase"]
    },
    {
      id: 5,
      name: "MrMsUMN Website",
      year: 2024,
      desc: "A website for UMN's Pair Model show, MrMsUMN. Developed the backend, which includes CRUD, mailing, ticketing, and authentication. Also contributed to some frontend pages",
      githubLink: "https://github.com/MichaelAditya/mrms2024",
      tags: ["Laravel", "MySQL", "HTML5", "CSS3"]
    }
];

  function updateViewport() {
    viewport.current = window.innerHeight;
  }
  
  
  function scrollToPage(multiplier) {
    window.scrollTo({
      top : viewport.current * multiplier,
      left: 0,
      behavior:"smooth"
    })
  }

 
  function handleScroll() {
    const btn = backToTop.current
      const footerTop = footerRef.current.getBoundingClientRect().top + window.scrollY;
      
      if (window.scrollY >= viewport.current && window.scrollY <= (footerTop - viewport.current)) {
        btn.style.display = 'block'
      }

      else {
        btn.style.display = 'none'
      }
  }
 
  useEffect(()=> {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])


  useEffect(() => {
    window.addEventListener('resize', updateViewport)
    
    if (!sceneRendered) {
      setUp();
      AOS.init()
      console.log("test");
      setSceneRendered(true);

    }
  }, [setUp]); 


  return (
    
    <div className="App flex justify-center items-center">
      <div className='port-content'>
        <Navbar scrollFunction={scrollToPage}></Navbar>
        <Hero scrollFunction={scrollToPage} ></Hero>
        <AboutMe projects={projects}></AboutMe>
        <TimelinePage></TimelinePage>
        <Projects projects={projects}></Projects>
        <ContactMe></ContactMe>
        <Footer footerRef = {footerRef}></Footer>
      </div>

      <canvas id='ballsBg'></canvas>
      <button id='backToTop' ref= {backToTop} onClick={()=>scrollToPage(0)}className="fixed bottom-4 right-4 w-24 h-24 bg-red text-white rounded-full flex items-center justify-center">
       Back to Top
      </button>
    </div>
   
    
  );
}

export default App;
