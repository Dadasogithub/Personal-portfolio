import React from 'react'
import './contact.css'
import{AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {BsMessenger} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
       <h5>Get In Touch</h5>
       <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
                <AiOutlineMail className='contact_option-icon'/>
                <h4>Email</h4>
                 
                <a href="mailto:dadaso45pawar@gmail.com">Send a Email</a>
          </article>
          <article className="contact_option">
                <BsWhatsapp className='contact_option-icon'/>
                <h4>Whatsapp</h4>
               
                <a href="https://api.whatsapp.com/send?phone+919356842017">Send a Whatsapp message</a>
          </article>
          <article className="contact_option">
                <BsMessenger className='contact_option-icon'/>
                <h4>Facebook</h4>
                
                <a href="https://www.facebook.com">Connect on Facebook</a>
          </article>
        </div>
        <form>
              <input type='text' name='name'placeholder='Your name ' required/>
              <input type='email' name='email' placeholder='Your Email ' required/>
              <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>

    </section>
  )
}

export default Contact