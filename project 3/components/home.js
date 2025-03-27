import React from "react";
import "./home.css";  // ✅ Ensure file name matches exactly (lowercase)

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I'm Lavanya R</h1>
        <p>I'm a passionate Developer specializing in frontend and backend development.</p>
        <a href="/projects" className="btn">View My Work</a>
      </div>
      <div className="home-image">
    
      </div>
    </section>
  );
};

export default Home;

