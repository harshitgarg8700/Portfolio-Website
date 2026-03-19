import React, { useEffect } from 'react'
import './skills.css'
import html from '../assets/html logo.png'
import css from '../assets/css logo.png'
import js from '../assets/js logo.png'
import react from '../assets/react-logo.webp'
import node from '../assets/node logo.png'

const skillsData = [
  { name: 'HTML', img: html, level: 90, category: 'Frontend' },
  { name: 'CSS', img: css, level: 85, category: 'Frontend' },
  { name: 'JavaScript', img: js, level: 80, category: 'Frontend' },
  { name: 'React', img: react, level: 75, category: 'Frontend' },
  { name: 'Node.js', img: node, level: 70, category: 'Backend' },
  // add more skills here
]

const Skills = () => {
  useEffect(() => {
    const bars = document.querySelectorAll('.skill-level')
    bars.forEach(bar => {
      const level = bar.getAttribute('data-level')
      bar.style.width = level + '%'
    })
  }, [])

  const categories = [...new Set(skillsData.map(skill => skill.category))]

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h1>Skills</h1>
          <p>Technologies I use and my proficiency level</p>
        </div>

        {categories.map((cat, i) => (
          <div className="skills-category" key={i}>
            <h2>{cat}</h2>
            <div className="skills-grid">
              {skillsData
                .filter(skill => skill.category === cat)
                .map((skill, index) => (
                  <div className="skill-card" key={index}>
                    <div className="skill-img">
                      <img src={skill.img} alt={skill.name} />
                    </div>
                    <p>{skill.name}</p>
                    <div className="skill-bar">
                      <div
                        className="skill-level"
                        data-level={skill.level}
                      ></div>
                    </div>
                    <span className="skill-level-text">{skill.level}%</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
