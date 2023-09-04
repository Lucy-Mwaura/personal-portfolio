import React from 'react';
import './contact.css';
import {MdEmail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0rs6tmo', 'template_lrs9yuh', form.current, 'laBhlPsw-GZDyFNWO')

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'> 
      <h5>Get In Touch </h5>
      <h2>Contact Me </h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>briannie254@gmail.com</h5>
            <a href="mailto:briannie254@gmail.com" target='_blank'> Send a message </a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact_option-icon' />
            <h4> Messenger </h4>
            <h5> Nyamumbe Brian </h5>
            <a href="https://m.me/brian.brayo.1232" target='_blank'> Send a message </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>            
            <a href="https://api.whatsapp.com/send?phone=+254771402856" target='_blank'> Send a message </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message </button>
        </form>

      </div>
    </section>
  )
}

export default Contact