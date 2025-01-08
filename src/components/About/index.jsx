import React from "react";
import "./index.css";

const App = () => {
  return (
    <div id="about" className="container">
      <section className="intro-section">
        <p className="intro-text">
          We have exciting offers for our student community, ranging from free
          counselling sessions to carefully designed assistance programs.
          Aspiring to build impeccable careers for our youth.
        </p>
      </section>

      <section className="about-section">
        <div className="about-left">
          <img
            src="https://images.stockcake.com/public/4/2/e/42e08381-92ae-4dff-b82a-64faa5796a87_large/joyful-graduation-day-stockcake.jpg"
            alt="Group of students"
            className="image"
          />
          <div className="progress-bar-container">
            <div className="progress-item">
              <p>Personalized Counselling</p>
              <div className="progress">
                <div className="progress-fill" style={{ width: "80%" }}></div>
              </div>
              <span className="progress-percent">80%</span>
            </div>
            <div className="progress-item">
              <p>Guided Assistance Programs</p>
              <div className="progress">
                <div className="progress-fill" style={{ width: "75%" }}></div>
              </div>
              <span className="progress-percent">75%</span>
            </div>
            <div className="progress-item">
              <p>Career Success</p>
              <div className="progress">
                <div className="progress-fill" style={{ width: "100%" }}></div>
              </div>
              <span className="progress-percent">100%</span>
            </div>
          </div>
        </div>
        <div className="about-right">
          <h2 className="section-title">ABOUT VERTEXPACE</h2>
          <h1 className="main-title">Your Pathway To Career Success</h1>
          <hr className="divider" />
          <div className="cards">
            <div className="card">
              <div className="card-header">
                <span className="card-icon">⭐</span>
                <h3>Career Compass</h3>
              </div>
              <p>
                Feeling lost? Vertexpace guides you to the right career with
                expert counseling.
              </p>
            </div>
            <div className="card">
              <div className="card-header">
                <span className="card-icon">⭐</span>
                <h3>Career Guidance</h3>
              </div>
              <p>
                With expertise in the Indian education system, we guide you to
                the right career path for success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
