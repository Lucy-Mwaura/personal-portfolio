import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li> <BiCheck className='service__list-icon'/>
            <p>Website Design.</p>
            </li>    
            <li> <BiCheck className='service__list-icon'/>
            <p>Designing website layouts to provide the best user experience.</p>
            </li>
            <li> <BiCheck className='service__list-icon'/>
            <p> Creating and testing applications for the website.</p>
            </li>
            <li> <BiCheck className='service__list-icon'/>
            <p>Troubleshooting website problems.</p>
            </li>
   
          </ul>          
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Graphic Design</h3>
          </div>
          <ul className='service__list'>
            <li> <BiCheck className='service__list-icon'/>
            <p>Working in Adobe programs to create visuals, graphics, or animations.</p>
            </li>    
            <li> <BiCheck className='service__list-icon'/>
            <p>Posters.</p>
            </li>
            <li> <BiCheck className='service__list-icon'/>
            <p>Flyers.</p>
            </li>
            <li> <BiCheck className='service__list-icon'/>
            <p>Logos.</p>
            </li>
            <li> <BiCheck className='service__list-icon'/>
            <p>Brochures.</p>
            </li>
            <li> <BiCheck className='service__list-icon'/>
            <p>Business Cards.</p>
            </li>  
            <li> <BiCheck className='service__list-icon'/>
            <p>Photo Editing.</p>
            </li>        
          </ul>          
        </article>
        {/* END OF GRAPHIC DESIGN */}

        <article className="service">
          <div className="service__head">
            <h3>Technical Aspects of IT Technology</h3>
          </div>
          <ul className='service__list'>
            <li> <BiCheck className='service__list-icon'/>
            <p>Installation and configuration of hardware and software components.</p>
            </li>    
            <li> <BiCheck className='service__list-icon'/>
            <p> Network and Infrastructure Management.</p>
            </li>
            <li> <BiCheck className='service__list-icon'/>
            <p> Technical support to computer users.</p>
            </li>
            <li> <BiCheck className='service__list-icon'/>
            <p> Installing and upgrading anti-virus software.</p>
            </li>
            <li> <BiCheck className='service__list-icon'/>
            <p>Keeping all systems and software up to the current release</p>
            </li>       
          </ul>          
        </article>
        {/* END OF UI/UX */}
      </div>
    </section>
  )
}

export default Services