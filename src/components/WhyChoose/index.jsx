import React from "react";
import "./index.css";

const WhyChooseVertexpace = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-content">
        <h2 className="why-choose-title">Why Choose Vertexpace?</h2>
        <p className="why-choose-description">
          Vertexpace is dedicated to empowering students and their families,
          turning the often-complicated admission process into a manageable and
          rewarding experience. With us by your side, achieving admission to
          your dream school, college, or university becomes smoother and more
          attainable.
        </p>
        <div className="why-choose-features">
          <span>Personalized Attention</span>
          <span>Streamlined & Efficient Process</span>
          <span>Reliable & Consistent Results</span>
        </div>
        <button className="why-choose-button">Join Us Now</button>
      </div>
      <div className="why-choose-image">
        <img
          src="https://media.istockphoto.com/id/1352833698/photo/cheerful-businesspeople-using-a-laptop-in-an-office.jpg?s=612x612&w=0&k=20&c=Ux3u5T6P1JHMCHV8LGrprI7-7seep8HRQpHpXRw7so0=" // Replace with the path to your image
          alt="Students working together"
        />
      </div>
    </section>
  );
};

export default WhyChooseVertexpace;
