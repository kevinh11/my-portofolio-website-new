import { useState, useRef, useEffect } from "react";
import React from 'react'

function AboutMe({projects}) {
  
  function formatNum(num) {
    return num < 10 ? "0"+num : num
  } 
  return (
    <div data-aos="fade-left">
      <h1 className="text-4xl text-left lg:text-left md:text-6xl">About Me</h1>
      <div
        className="my-5 relative page about-me flex flex-col justify-start items-center"
      >
        <div className="about-me-content h-full md:my-4 flex flex-col lg:flex-row justify-start items-start lg:items-center">
          <div className="about-me-info flex flex-col items-start justify-center">
            <div className="info-card-sec flex flex-row">
              <div className="info-card flex flex-col items-start justify-center text-left">
                <h1 className="text-5xl font-medium">03</h1>
                <h5 className="my-5 text-2xl font-light">Years of Experience</h5>
              </div>
              <div className="info-card flex flex-col items-start justify-center text-left">
                <h1 className="text-5xl font-medium">{formatNum(projects.length)}</h1>
                <h5 className="my-5 text-2xl font-light">Projects</h5>
              </div>
            </div>

            <button
              id="downloadcv"
              className="bg-red hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded"
            >
              Download CV!
            </button>
          </div>

          <div className="about-me-text text-left text-wrap">
            <h5 className="text-md font-light my-4 md:my-5 text-lg md:text-2xl">
              My name is Kevin Wijaya Hadinata, and I am currently in my second
              year of studying Informatics in Universitas Multimedia Nusantara
              (UMN). I have a passion for web development, as well as learning
              new things. I also enjoy joining various organizations to expand my
              horizons and networking. Currently learning backend as well as
              mobile development.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
