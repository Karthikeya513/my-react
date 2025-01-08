import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="header-left">
          <p>+91 9620201058</p>
          <p>Jayanagar, Bangalore.</p>
        </div>
        <div className="header-right">
          <p>info@vertexpace.com</p>
        </div>
      </header>
      <nav className="navbar">
        <div className="logo">Vertexpace</div>
        <ul className="nav-links">
         <li><a href="#home">Home</a></li>
          <li><a href="#what-we-do">What We Do</a></li>
          <li><a href="#colleges">Colleges</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="join-btn">Join Us Now</button>
      </nav>
      <main className="main-content">
        <div id="home" className="welcome-section">
          <h1>Welcome To <span className="highlight">Vertexpace!</span></h1>
          <p className="quote">
            “The Function of education is to teach one to think intensively and
            to think critically. Intelligence and character – that is the goal
            of true education.”
          </p>
          <p className="author">- Martin Luther King</p>
          <button className="get-started-btn">Get Started</button>
        </div>
        <div className="image-section">
          <div className="circle">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBYI7qrFauU_VRRW1Ji3ySjkkAEwqh6lpNw&s" // Replace with the image URL or local image path
              alt="Graduation Cap"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
