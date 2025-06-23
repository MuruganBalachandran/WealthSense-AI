import React, { useState } from "react";
import { useTheme } from '../context/ThemeContext';
import "../styles/About.css";

function About() {
  const { theme } = useTheme();
  const [flippedCards, setFlippedCards] = useState(new Set());
  
  const teamMembers = [
    {
      name: "Murugan B",
      role: "Full Stack Developer",
      image: "/path/to/murugan.jpg",
      linkedin: "https://linkedin.com/in/murugan",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      description: "Passionate about building scalable web applications and solving complex problems."
    },
    {
      name: "Sathya",
      role: "Full Stack Developer",
      image: "/path/to/sathya.jpg",
      linkedin: "https://linkedin.com/in/sathya",
      skills: ["React", "Python", "PostgreSQL", "Docker"],
      description: "Experienced in developing robust and user-friendly applications."
    },
    {
      name: "Saran Kumar S",
      role: "Gen AI",
      image: "/path/to/saran.jpg",
      linkedin: "https://linkedin.com/in/saran",
      skills: ["Machine Learning", "Python", "TensorFlow", "NLP"],
      description: "Specializing in AI-driven solutions and machine learning applications."
    },
    {
      name: "Vidhya S",
      role: "Gen AI",
      image: "/path/to/vidhya.jpg",
      linkedin: "https://linkedin.com/in/vidhya",
      skills: ["Deep Learning", "Computer Vision", "PyTorch", "Data Science"],
      description: "Focused on implementing cutting-edge AI technologies."
    }
  ];

  const handleCardClick = (index) => {
    setFlippedCards(prev => {
      const newFlipped = new Set(prev);
      if (newFlipped.has(index)) {
        newFlipped.delete(index);
      } else {
        newFlipped.add(index);
      }
      return newFlipped;
    });
  };

  return (
    <div className={`about ${theme}`}>
      <div className="product-section">
        <div className="product-info">
          <h1>WealthSense AI</h1>
          <p>
            WealthSense AI is an advanced financial analytics platform that combines
            artificial intelligence with real-time market data to provide investors
            with powerful insights and trading opportunities. Our cutting-edge AI algorithms
            process vast amounts of market data to identify patterns and trends that humans
            might miss.
          </p>
          <p>
            Our platform features interactive market visualizations, personalized
            watchlists, and AI-powered price predictions to help you make informed
            investment decisions. With real-time alerts and comprehensive portfolio
            analytics, you'll always stay ahead of market movements.
          </p>
        </div>
        <div className="product-image">
          <img 
            src={theme === 'dark' ? "plot_dark.png" : "plot_light.png"}
            alt="WealthSense AI Platform"
          />
            <img 
            src={theme === 'dark' ? "feature_dark.png" : "feature_light.png"}
            alt="WealthSense AI Platform"
          />
        </div>
      </div>

      {/* <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              className="team-card" 
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <div className={`card-inner ${flippedCards.has(index) ? 'flipped' : ''}`}>
                <div className="card-front">
                  <div className="content">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="profile-image"
                    />
                    <h3>{member.name}</h3>
                    <div className="role-badge">{member.role}</div>
                  </div>
                  <p>{member.description}</p>
                  <small>Click to see skills & connect</small>
                </div>
                <div className="card-back">
                  <h3>{member.name}</h3>
                  <p>Core Skills</p>
                  <div className="skills-grid">
                    {member.skills.map((skill, i) => (
                      <span key={i} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                  <div className="social-links">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="linkedin-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fab fa-linkedin"></i>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default About;
