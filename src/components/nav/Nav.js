import React from 'react'
import './style.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai';
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi';
import {VscTools} from 'react-icons/vsc';

import { useState } from 'react';

const Nav = () => {
  const [active, setActive] = useState('#');
  const [onNav, setOnNav] = useState('navOff')
  
  
  const handleScroll = ()=>{
    setOnNav("");
  }
  window.addEventListener('scroll', handleScroll);
  return (
   
    <nav id="nav" className={onNav} onScroll={handleScroll}>
      <a href="#home" title='Home' onClick={()=> setActive('#')}className={active === '#'? 'active' : '' }><AiOutlineHome/></a>
      <a href="#about" title='About me' onClick={()=> setActive('#about')} className={active === '#about'? 'active' : '' }><AiOutlineUser/></a>
      <a href="#experience" title='Experience' onClick={()=> setActive('#experience')} className={active === '#experience'? 'active' : '' }><VscTools/></a>
      <a href="#portafolio" title='Portafolio' onClick={()=> setActive('#portafolio')} className={active === '#portafolio'? 'active' : '' }><BiBook/></a>
      <a href="#contact" title='Contact'  onClick={()=> setActive('#contact')} className={active === '#contact'? 'active' : '' }><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav
