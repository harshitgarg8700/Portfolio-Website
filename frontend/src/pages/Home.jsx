import React from 'react'
import harshit1 from '../assets/IMG_0802.jpg'
import './home.css'

const Home = () => {
  return (
    <section className="home">
      <div className="container">

        <div className="overview">
          <h1>
            Hi, I’m <span>Harshit Garg</span>
          </h1>

          <h2>Aspiring Software Developer</h2>

          <p>
            Passionate about building clean, scalable, and performant
            applications using modern web technologies.
          </p>

          <div className="cta">
            <a href="#contact" className="btn primary">Hire Me</a>
            <a href="#project" className="btn secondary">View Projects</a>
          </div>

          <div className="home3-social">
            <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://github.com" target="_blank"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>

        <div className="imgContainer">
          <div className="img-bg"></div>
          <img src={harshit1} alt="Harshit Garg" />
        </div>

      </div>
    </section>
  )
}

export default Home
