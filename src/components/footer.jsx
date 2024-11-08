import { useEffect } from "react";
import React from 'react'


function Footer({footerRef}) {

  useEffect(()=> {
    console.log(footerRef)
  }, [])


  return (
    <footer ref = {footerRef} className="bg-black/75 flex py-4 flex-col lg:flex-row items-center justify-center gap-5 lg:justify-between min-h-[100px]">
      <div className="flex flex-col  gap-2">
        <h4 className="text-sm">Made with ReactJS, Three.js, TailwindCSS, SweetAlert, AOS and Axios.</h4>
        <div className="flex flex-row">
          <h4 className="text-sm">Copyright 2024 Kevin Wijaya Hadinata. All Rights Reserved</h4>
        </div>
        <a href="https://github.com/kevinh11/my-portofolio-website-new" className="text-inherit hover:text-inherit"><h4 className="font-medium underline decoration-red cursor-pointer">  View Source Code</h4></a>

      </div>

      {/* <div className="flex flex-row">
        <h4 className="text-sm">Copyright 2024 Kevin Wijaya Hadinata. All Rights Reserved</h4>
      </div> */}
    </footer>
  )
}

export default Footer;