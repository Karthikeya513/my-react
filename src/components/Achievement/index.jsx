import React from 'react';
import './index.css';

const AchievementsSection = () => {
  return (
    <div className="achievements-section">
      {/* Left Section */}
      <div className="left-content">
        <h3>HAVE A LOOK</h3>
        <h1>Certifications, Counseling Success & Institutional Partnerships</h1>
        <p>
          We are ISO certified, ensuring top-quality counseling services. Over 1,000 counseling
          sessions and partnerships with 100+ institutions reflect our commitment to student success.
        </p>
        <button className="start-learning-btn">START LEARNING NOW</button>
      </div>

      {/* Right Section */}
      <div className="right-content">
        <h3>OUR ACHIEVEMENTS</h3>
        <h1>Our Great Achievement</h1>
        <div className="achievement-cards">
          <div className="Lcard">
            <h2>1000+</h2>
            <p>Counselling done</p>
          </div>
          <div className="Lcard">
            <h2>100+</h2>
            <p>Institutes associated</p>
          </div>
          <div className="Lcard">
            <h2>ISO 9001</h2>
            <p>2015 Certified</p>
          </div>
          <div className="Lcard">
            <h2>1000+</h2>
            <p>Students Succeeded</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
