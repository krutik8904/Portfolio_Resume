import React from 'react'
import './Contact.css';
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Contact() {
  return (
    <>
      <div id='contact'>Contact Me</div>
      <p className='content2'>Let's Work Together!</p>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/krutik-mangrola-a91827280/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BXkf6QtVwQbeFpVdnyFHoIg%3D%3D"><FaLinkedinIn /></a>
        <a href="https://github.com/krutik8904"><FaGithub /></a>
        <a href="https://wa.me/+917202944570"><FaWhatsapp /></a>
        <a href="https://www.instagram.com/krutik_8904/#"><FaInstagram /></a>
        <a href="mailto:krutikmangrola8904@gmail.com"><SiGmail /></a>
      </div>

      <hr/>
      <footer>© Coding excellence at your service - developed by Dhruv Sheladiya</footer>

    </>
  )
}

export default Contact;