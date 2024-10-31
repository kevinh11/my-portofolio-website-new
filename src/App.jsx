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
      desc: "Game bertema tamagochi yang dibuat untuk UTS Mata Kuliah Web Programming",
      githubLink: "",
      tags: ["HTML5", "CSS3", "JS"]
    },
    {
      id: 2,
      name: "Gereja Isa Al-Masih",
      year: 2023,
      desc: "Website dari Gereja Isa Al-Masih Rajawali, yang memiliki fitur lengkap CRUD dan admin panel",
      githubLink: "",
      tags: ["Laravel", "CSS3", "JS", "HTML5", "MySQL"]
    },
    {
      id: 3,
      name: "MoviePedia",
      year: 2022,
      desc: "Sebuah Website dimana user dapat mencari informasi tentang berbagai film, melalui sebuah API. Website dapat menampilkan film paling bagus, populer, dsb.",
      githubLink: "",
      tags: ["ReactJS", "CSS3", "JS"]
    },

    {
      id:4,
      name:"Fokus Budaya ULTIMAGZ",
      year:2023,
      desc:"Website artistik yang menunjukkan berbagai budaya Indonesia. Bagian yang dikerjakan: Halaman 4 dan 5",
      githubLink:"https://github.com/kevinh11/fokus-2023-budaya",
      tags: ["ReactJS","CSS3"]
    }, 
    {
      id:5,
      name:"GeoMinder (on progress)",
      year:2024,
      desc:"Sebuah aplikasi note berbasis geolokasi yang dapat memberikan pengingat jika pengguna dekat dengan suatu tempat, yang dibuat dalam kelompok 4 orang",
      githubLink:"https://github.com/C-4NDR3W/GeoMinder.git",
      tags: ["Kotlin","Firebase"]
    }, 


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
