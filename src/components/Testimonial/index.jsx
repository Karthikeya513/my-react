import React from "react";
import "./index.css";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "ROBOTO EORURE",
      designation: "Designation",
      image: "https://static.vecteezy.com/system/resources/previews/037/098/807/non_2x/ai-generated-a-happy-smiling-professional-man-light-blurry-office-background-closeup-view-photo.jpg", // Replace with the actual path or URL of the image
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      name: "COURTNEY HENRY",
      designation: "Designation",
      image: "https://t4.ftcdn.net/jpg/06/79/50/91/360_F_679509191_FQW7KbRAaHVkCryRlomSQXOeM354SdJY.jpg", // Replace with the actual path or URL of the image
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="testimonials-section">
      <h3 className="testimonials-title">TESTIMONIES</h3>
      <h2 className="testimonials-heading">
        What's Our Clients Say About Vertexpace
      </h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <h4 className="testimonial-name">{testimonial.name}</h4>
            <p className="testimonial-designation">
              {testimonial.designation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
