import React from 'react'
import './qualifications.css'
import { FaGraduationCap } from 'react-icons/fa'

const Qualifications = () => {
  return (
    <section className="qualifications" id="qualifications">
      <div className="qualifications-container">

        <div className="qualifications-header">
          <FaGraduationCap className="cap-icon" />
          <h1>Education</h1>
          <p>My academic journey and milestones</p>
        </div>

        <div className="timeline">

          <div className="timeline-item">
            <span className="timeline-year">2021 – 2025</span>
            <div className="timeline-card">
              <h3>Manav Rachna Institute of Research and Studies</h3>
              <p>B.Tech in Computer Science</p>
              <span className="score">CGPA: 6.7</span>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-year">2020 – 2021</span>
            <div className="timeline-card">
              <h3>St. John's School</h3>
              <p>Senior Secondary (12th)</p>
              <span className="score">Percentage: 89%</span>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-year">2018 – 2019</span>
            <div className="timeline-card">
              <h3>St. John's School</h3>
              <p>Secondary (10th)</p>
              <span className="score">Percentage: 77%</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Qualifications
