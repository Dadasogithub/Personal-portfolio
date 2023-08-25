import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from  'react-icons/fa'
import {FaUsers} from  'react-icons/fa'
import {AiFillProject} from 'react-icons/ai'


const About = () => {
  return (
     <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me"> 
          <div className="about_me-image"> 
            <img src={ME} alt=" " />
         </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
              <article className='about_card'>
                  <FaAward/>
                  <h5>Fresher</h5>
                  <small>Learning Technology</small>
              </article>
          </div>
          <div className="about_cards">
              <article className='about_card'>
                  <FaUsers/>
                  <h5>Network</h5>
                  <small>500+ yet</small>
              </article>
          </div>
          <div className="about_cards">
              <article className='about_card'>
                  <AiFillProject/>
                  <h5>Projects</h5>
                  <small>30+ Projects</small>
              </article>
          </div>


          <p>
            
I am a B.Tech graduate and skilled software engineer seeking job opportunities. I have a passion for coding and problem-solving, with a strong foundation in software development. Eager to contribute to innovative projects.
          </p>

          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
      </section>
  )
}

export default About
