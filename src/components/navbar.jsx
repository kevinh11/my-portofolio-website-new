import { useState, useEffect, useRef } from "react";
import React from 'react'


function Navbar({scrollFunction}) {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navMenu, setNavMenu] = useState(null)
  const viewport = useRef(window.innerHeight)


  useEffect(()=> {
    window.addEventListener('resize', handleOnResize)
    const menu = document.getElementById("nav-menu")
    setNavMenu(menu)  

  }, [])


  function toggleNav() {
    const menu = document.getElementById("nav-menu")
    if (navbarOpen) {
      setNavbarOpen(false)
      navMenu.style.display = 'none';
    }

    else {
      setNavbarOpen(true)
      navMenu.style.display = 'flex';
    }
  }


  function handleOnResize() {
  
    if (navMenu!= null && navMenu.style.display == 'hidden') navMenu.style.display = 'flex'

    viewport.current = window.innerHeight;
  }

 
  return (
    <nav className="flex justify-between items-center py-7 w">
      <div className="flex">
        <h1 className="text-5xl items-start font-bold text-white">Kevin H</h1>
        <h1 className="text-red fw-bold text-5xl">.</h1>
      </div>

      <div id='nav-menu' className="nav-menu flex items-center justify-around">
        <h3 onClick={()=> scrollFunction(1) }id='about'className="text-xl hover:text-red">About</h3>
        <h3 onClick={()=> scrollFunction(2) }id='skills'className="text-xl hover:text-red">Experience</h3>
        <h3 onClick={()=> scrollFunction(3.5) } id='quals'className="text-xl hover:text-red">Projects</h3>
      </div>

      <div onClick={toggleNav} className='hamburger-menu flex flex-col lg:hidden'>
        <div className='hamburger-bar w-50 bg-red'></div>
        <div className='hamburger-bar w-50 bg-red'></div>
        <div className='hamburger-bar w-50 bg-red'></div>
      </div>

    </nav>
  )
}

export default Navbar;