import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/nyamumbe.jpg';
import HeaderSocials from './HeaderSocials';


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello, I'm </h5>
        <h1>Lucy Mwaura</h1>
        <div className="text-light">Human Resource Specialist </div>
        <div className="text-light">Graphic designer </div>
        <CTA/>
        {/* <HeaderSocials /> */}


        {/* <div className="me">
          <img src={ME} alt="me" />
        </div> */}
        {/* <p className='pheader'>“A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.”</p> */}

        {/* <a href='#contact' className="scroll__down"> Scroll Down </a> */}
        </div>
    </header>
  )
}

export default Header