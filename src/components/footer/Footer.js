import React from 'react'
import './style.css'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {FaFreeCodeCamp} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'> Victor Restrepo</a>
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#portafolio">portafolio</a></li>
        <li><a href="#certificates">certificates</a></li>
        <li><a href="#contact">contact</a></li>

      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/victor-restrepo-junior-developer-28a896240/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
        <a href="https://github.com/viktorm471" target="_blank" rel="noopener noreferrer"> <AiFillGithub/></a>
        <a href="https://www.freecodecamp.org/fccb0185892-b94f-469c-a976-6b2009b9a2c7" target="_blank" rel="noopener noreferrer"><FaFreeCodeCamp/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
