import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import{FaInstagram} from 'react-icons/fa'
import{FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
     <footer>
      <a href="#" className='footer_logo'>DADASO.exe</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookSquare/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
        <a href="https://twitter.com"><FaTwitter/></a>
      </div>
      <div>
        <small>&copy; Dadaso Pawar. All rights reserved.</small>
      </div>
     </footer>
  )
}

export default Footer