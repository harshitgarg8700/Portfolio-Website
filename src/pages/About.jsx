import React from 'react'
import './about.css'
import harshit2 from '../assets/IMG_2381.JPG'
import resume from '../assets/HARSHIT GARG RESUME - Copy.PDF'

const About = () => {
  return (
    <section className="about">
      <div className="about-wrapper">

        {/* LEFT – TEXT */}
        <div className="about-info">
          <span className="about-tag">Who I Am</span>

          <h1>
            Passionate <br />
            Software Developer
          </h1>

          <p>
            I’m <strong>Harshit Garg</strong>, a Computer Science graduate with a
            deep interest in building scalable, user-centric web applications.
          </p>

          <p>
            I work with modern technologies like <strong>React, JavaScript,
            HTML, CSS, and MySQL</strong>, and I enjoy transforming ideas into
            clean, functional software.
          </p>

          <p>
            As a fresher, I bring curiosity, adaptability, and a strong
            problem-solving mindset, always eager to learn and grow in real-world
            environments.
          </p>

          <a href={resume} download className="about-btn">
            Download Resume
          </a>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="about-visual">
          <div className="image-bg"></div>
          <img src={harshit2} alt="Harshit Garg" />
        </div>

      </div>
    </section>
  )
}

export default About
