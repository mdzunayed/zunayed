import React from "react";
import "./hero.css";
import profilePic from "../assets/profile.jpg"; // Ensure you have a photo in "src/assets/"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        {/* Profile Image */}
        <img src={profilePic} alt="Zunayed" className="profile-pic" />

        <div className="inner-container">
            <h2>Hello! I'm <span className="highlight">Zunayed</span></h2>
            <h3>Problem Solver | <span className="star">2★</span> at CodeChef | ML & AI </h3>
            <h4>East West University</h4>
            <p>
            Passionate about Machine Learning & Artificial Intelligence, I actively participate in Kaggle competitions 
            and work with real-world datasets. My projects include explainable AI for mental disorder detection and 
            lung cancer classification using histopathological images.
            </p>
            <p>
            In addition to ML/AI, I have a good background in competitive programming, solving over  
            <strong> 1,000+ </strong> problems across various platforms like Leetcode, Codeforces, Codechef, AtCoder, Vjudge, CSES etc.
            </p>
            <p>
            My technical expertise includes Python, MATLAB, NumPy, pandas, JavaScript, and backend technologies 
            like Node.js with Express. I have also worked with teams on web development projects, including 
            <strong> "QuizPoint" </strong>, and plan to build an interactive ML-focused portfolio.
            </p>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
