import React from 'react'
import './project.css'
import project1 from '../assets/Screenshot 2025-07-17 110058.png'
import project2 from '../assets/Screenshot 2026-01-20 115802.png'
import project3 from '../assets/Screenshot 2026-01-20 120222.png'

const projects = [
  {
    title: 'Stract Website',
    description: 'A modern web app built using React and CSS. Implements responsive design and dynamic features.',
    img: project1,
    demo: '#',
    code: '#'
  },
  {
    title: 'Certificate Checker',
    description: 'A full-stack application using Node.js and MongoDB with authentication and CRUD operations.',
    img: project2,
    demo: '#',
    code: '#'
  },
    {
    title: 'Real Estate',
    description: 'A modern web app built using React and CSS. Implements responsive design and dynamic features.',
    img: project3,
    demo: '#',
    code: '#'
  },
  // Add more projects here
]

const Project = () => {
  return (
    <section className="projects-section" id="project">
      <div className="projects-container">
        <div className="projects-header">
          <h1>Projects</h1>
          <p>Some of my recent works and personal projects</p>
        </div>

        <div className="projects-grid">
          {projects.map((proj, index) => (
            <div className="project-card" key={index}>
              <div className="project-img">
                <img src={proj.img} alt={proj.title} />
              </div>
              <div className="project-content">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="project-links">
                  <a href={proj.demo} target="_blank" rel="noreferrer">Live Demo</a>
                  <a href={proj.code} target="_blank" rel="noreferrer">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
