import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/drum.PNG';
import IMG3 from '../../assets/todo.PNG';
import IMG4 from '../../assets/dietician.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
  id: 1,
  img: IMG1,  
  title: 'Cryptocurrency website',
  github: 'https://github.com',
  demo: 'https://dribbble.com'
  },
  {
    id: 2,
    img: IMG2,  
    title: 'Drum Project',
    github: 'https://github.com/Briannie157/Drum-Project.git',
    demo: 'https://kitdrumapp1.netlify.app'
    },
    {
      id: 3,
      img: IMG3,  
      title: 'Todo List App',
      github: 'https://github.com/Briannie157/ToDo-List-App.git',
      demo: 'https://crazy-tights-moth.cyclic.app/'
      },
      {
        id: 4,
        img: IMG4,  
        title: 'My Graphic Design Projects',
        github: 'https://github.com',
        demo: 'https://sites.google.com/view/brian-graphic-designs/home'
        },
        {
          id: 5,
          img: IMG5,  
          title: 'D3Apps website',
          github: 'https://github.com',
          demo: 'https://dribbble.com'
          },
          {
            id: 6,
            img: IMG6,  
            title: 'Bitcoin website',
            github: 'https://github.com',
            demo: 'https://dribbble.com'
            }
]

const Portfolio = () => {
  return (
    <section id='portfolio' >
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

<div className="container portfolio__container">
{ data.map(({id, img, title, github, demo}) => {
  return(
  <article key={id} className='portfolio__item'>
  <div className="portfolio__item-image">
    <img src={img} alt={title} />
  </div>
  <h3>{title}</h3>
  <div className="portfolio__item-cta">
    <a href={github} className='btn' target='_blank'> Github </a>
    <a href={demo} className='btn btn-primary' target='_blank'> Live Demo </a>
  </div>
  </article>
  )
}) 
  }
</div>
    </section>
  )
}

export default Portfolio