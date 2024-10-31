import axios from "axios";
import { useState } from "react";
import Swal from 'sweetalert2';

import React from 'react'


function ContactMe() {
  const [formData, setFormData] = useState({ yourName: "", yourEmail: "", yourMessage: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const result = await Swal.fire({
      title: "Check again",
      text: "Are you sure you want to send this message?",
      icon: "question",
      customClass: {
        title: "swal-title",
        htmlContainer: "swal-text"
      },
      showCancelButton: true,
      cancelButtonColor: "#A63838",
      confirmButtonText: "Yes, I'm sure",
      background: "#000000"
    });

    if (result.isConfirmed) {
      const loadingAlert = Swal.fire({
        title: "Loading",
        text: "Sending your message...",
        customClass: {
          title: "swal-title",
          text: "swal-text"
        },
        showConfirmButton: false,
        allowOutsideClick: false,
        background:"#000000",
        willOpen: () => {
          Swal.showLoading();
        }
      });

      const url = "https://script.google.com/macros/s/AKfycbxRHNJAIm6pMq41ozL7HOmnKmVsnmgeNoBqgUlVtxSNeiUoMce-5JWisqaLrTm_jxdJAg/exec";
      try {
        const params = new URLSearchParams();
        for (const key in formData) {
          params.append(key, formData[key]);
        }

        const response = await axios.post(url, params);

        if (response.status === 200) {
          Swal.fire({
            title: "Congratulations",
            text: "Your message has been sent!",
            background: "#000000",
            customClass: {
              title: "swal-text",
              text: "swal-text"
            }
          });
        }
      } 

      catch (error) {
        console.log(error);
        Swal.fire({
          title: "Error",
          text: "There was an error sending your message. Please try again.",
          background: "#000000",
          textColor:"#ffffff"
        });
      } 
      
      finally {
        setFormData({ Name: "", Email: "", Message: "" });
      }
    }
  }

  return (
    <div data-aos="slide-left">
      <h1 className="my-7 text-3xl md:text-5xl">Contact Me</h1>
      <div className="flex page flex-col items-start justify-center">
        <form className='my-6 w-full' onChange={handleChange} onSubmit={handleSubmit}>
          <div className="form-row flex flex-col w-full gap-2">
            <label htmlFor='Name'>Name</label>
            <input type='text' name='yourName' className="font-light" />
          </div>
          <div className="my-5 form-row flex flex-col w-full gap-2">
            <label htmlFor='Email'>Email</label>
            <input type='email' name='yourEmail' className="font-light" />
          </div>
          <div className="my-5 form-row flex flex-col w-full gap-2">
            <label htmlFor='Message'>Message</label>
            <textarea name="yourMessage" className="min-h-[200px] w-full font-light"></textarea>
          </div>
          <button type="Submit" className='bg-red p-4 text-lg font-bold'>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
