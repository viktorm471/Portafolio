import React from 'react';
import './style.css';
import CTA from './CTA';
import Me from '../../assets/me3.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Victor Marcel</h1>
        <h5 className="text-light subtitle">Junior Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={Me} alt='Me' className='image' /> 
        </div>

        <a href="#contact" className='scroll__down'> Scroll Down</a>
      </div>

    </header>
  )
}

export default Header
