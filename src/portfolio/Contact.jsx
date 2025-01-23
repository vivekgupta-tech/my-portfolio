import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";






function Contact() {
  return (
    <>
      
     <div className="contact" id="contact">
     <h1 className='con'>CONTACT ME</h1>
        <div className="contact-icon"
         
        
         data-aos="flip-right"
         data-aos-easing="ease-out-cubic"
        data-aos-duration="3000">
            <a href='www.instagram.com' target='_blank' className="items">
            <FaInstagram className='icons' />
                     </a>
            <a href='www.facebook.com' target='_blank' className="items"><CiFacebook className='icons' />
            </a>
            <a href='www.linkedin.com/in/vivek-gupta-a21049242

' target='_blank' className="items">
            <CiLinkedin className='icons' />

            </a>
            <a href='https://x.com/' target='_blank' className="items">
            <FaSquareXTwitter className='icons' />

            </a>
            <a href='https://github.com/vivekgupta-tech' target='_blank' className="items">
            <FaGithubSquare className='icons' />

            </a>
            <a href='mailto:vivekkumar834046@gmail.com' target='_blank' className="items">
            <SiGmail className='icons' />

            </a>
        </div>
     </div>
    </>
  )
}

export default Contact