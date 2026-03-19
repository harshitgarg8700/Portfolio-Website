import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h1>Contact Me</h1>
          <p>Get in touch for collaborations or just a friendly hello 👋</p>
        </div>

        {/* Content */}
        <div className="contact-content">
          
          {/* Left Column: Info Cards + Social */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Reach out to me for questions or collaboration opportunities.</p>

            <div className="info-cards">
              <div className="info-card">
                <i className="fa-solid fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>+91-8700879828</p>
                </div>
              </div>

              <div className="info-card">
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>gargharshit51@gmail.com</p>
                </div>
              </div>

              <div className="info-card">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h4>Location</h4>
                  <p>Faridabad, Haryana</p>
                </div>
              </div>
            </div>
            <br/>
            <div className='follow'>
            <h2>Follow Me:-</h2>
            <div className="social-links">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.github.com/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form">
            <form id="contact-form">
              <input type="text" placeholder="Your Name" name="name" required />
              <input type="email" placeholder="Your Email" name="email" required />
              <textarea placeholder="Your Message" name="message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

