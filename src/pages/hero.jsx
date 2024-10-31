import { useEffect } from "react";
import React from 'react'

function Hero({ scrollFunction}) {
    
  return(
    <div className="hero-wrapper relative flex flex-col justify-around items-center">
      <div className=' flex flex-col justify-center items-center'>
        <div className="hero-profile my-4 flex flex-col lg:flex-row justify-start items-center">
          <img src='./images/selfImage.png'></img>
          <div className='profile-data flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-left'>
            <h1 className='text-2xl md:text-5xl'>Kevin Wijaya Hadinata</h1>
            <h3 className='text-lg font-light'>Fullstack Developer, Infomatics Student</h3>
            <button onClick={()=> scrollFunction(5)} class="my-3 bg-red hover:bg-blue-700 text-white text-xl
            font-bold py-2 px-4 rounded">
              Contact Me!
            </button>

          </div>

          <div className='socials mx-9 flex flex-col justify-start items-center'>
            <h5>Find me on</h5>
            <div className="flex my-3 gap-8 lg:gap-5 flex-row lg:flex-col">
              <a href='https://github.com/kevinh11'><i class="fa-brands fa-github"></i></a>
              <a href='https://www.instagram.com/kevin.hd9/'><i class="fa-brands fa-instagram"></i></a>
              <a href=''><i class="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>
        </div>

  
          {/* <div className='relative scroll-down my-5 flex flex-col justify-center items-center '>
            <h2 className='text-3xl p-5'>Scroll Down</h2>
            <img className='my-3'id='scrolldownicon' src='images/scrolldown.png'/>

          </div>   */}

          

        </div>      
      </div>
  )
}

export default Hero;