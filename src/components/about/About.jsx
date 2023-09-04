import React from 'react';
import './about.css';
import ME from '../../assets/Lucy.jpeg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'> 
    <h5> Get to know </h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small> 1+ Years Working</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small> 5+ Nationwide </small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small> 6+ Completed </small>
          </article>
        </div>

        <p>
I am a passionate IT support specialist and a web developer with 1 year experience as an IT specialist. Having
great skills in full stack web development; JavaScript, Node.js, React, among other skills, I aspire to work with
developers and clients to make organizations reach their peak in technology. Having in-depth understanding of diverse computer systems and networks, I am excellent in the technical
aspects of IT technology thus providing support to users and making me the first point of contact for error
reporting.
        </p>

        <a href="#contact" className='btn btn-primary'> Let's Talk </a>

      </div>
    
    </div>
    
    </section>
  )
}

export default About