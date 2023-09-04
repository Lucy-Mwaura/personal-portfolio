import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {FaTwitter} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';


const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
 <footer>
  <a href="" className='footer__logo' > Lucy_Designs </a>

  <ul className="permalinks">
    <li><a href="#"> Home </a></li>
    <li><a href="#about"> About </a></li>
    <li><a href="#experience"> Experience </a></li>
    <li><a href="#services"> Services </a></li>
    <li><a href="#portfolio"> Portfolio </a></li>
    <li><a href="#testimonials"> Testimonials </a></li>    
    <li><a href="#contact"> Contact </a></li>
  </ul>

  <div className="footer__socials">
    <a href="https://www.facebook.com/brian.brayo.1232" target='_blank'><FaFacebookF/></a>
    <a href="https://www.instagram.com/nyamumbe.brian/" target='_blank'><BsInstagram/></a>
    <a href="https://twitter.com/Brian_22J" target='_blank'><FaTwitter/></a>
    <a href="https://www.linkedin.com/in/brian-nyamumbe/" target='_blank'> <BsLinkedin/> </a>
    <a href="https://github.com/Briannie157" target='_blank'> <BsGithub/> </a>
   
  </div>

  <div className="footer__copyright">
    <small> &copy; {year}. Lucy_Designs. </small>
    
  </div>
 </footer>
  )
}

export default Footer