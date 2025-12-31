import React, { useState } from 'react'
import './style.css'
import {AiOutlineMail} from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'

import { useRef } from 'react';
import { showToast } from '../Utils/Meesagge';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [postData, setPostData] = useState({
    name:"",email:"", message:""
  })
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iywqx5p', 'template_51kw4wq', form.current, 'DpY_G-eLYFF9wA6mS')
      .then((result) => {
          console.log(result.text);
          showToast("message was send", "success")
      }, (error) => {
          console.log(error.text);
          showToast("Something went wrong. Please use other method.", "error")
      });
      setPostData({
        name:"",email:"", message:""
      })
    }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <a  href="mailto:viktorm471@gmail.com" className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>viktorm471@gmail.com</h5>
          </a>
          <a href="https://wa.me/+573192871068" className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+57 3192871068</h5>
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required value={postData.name} onChange={(e)=> setPostData({...postData, name: e.target.value})} />
          <input type="text" name="email" placeholder='Your Full Email' required value={postData.email} onChange={(e)=> setPostData({...postData, email: e.target.value})}/>
          <textarea type="text" name="message"  rows="7"placeholder='Your Message' required value={postData.message} onChange={(e)=> setPostData({...postData, message: e.target.value})}/>
          <button type='submit' className='btn btn-primary'>Send a Message </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
