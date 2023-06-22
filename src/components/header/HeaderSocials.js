import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {FaFreeCodeCamp} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/victor-restrepo-junior-developer-28a896240/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
        <a href="https://github.com/viktorm471" target="_blank" rel="noopener noreferrer"> <AiFillGithub/></a>
        <a href="https://www.freecodecamp.org/fccb0185892-b94f-469c-a976-6b2009b9a2c7" target="_blank" rel="noopener noreferrer"><FaFreeCodeCamp/></a>
      
    </div>
  )
}

export default HeaderSocials
