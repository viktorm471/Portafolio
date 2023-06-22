import React from 'react'
import './style.css'
import ME from '../../assets/me.jpg'
import { FaAward } from 'react-icons/fa'
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Education</h5>
              <small>Software Development Technician</small>
            </article>
            
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Software Developer Intership</h5>
              <small>4 months JS-PHP</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>English</h5>
              <small>B2 Level</small>
            </article>
          </div>
          <p>
          I have been working on personal projects, building some full-stack applications mainly in JavaScript . I consider myself as a self-taught person, I've also learned using online platforms such as LinkedIn, Platzi and free code camp . Now I am ready to be part of your company, to start learning from others.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
