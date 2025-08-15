import ProfilePic from "../assets/ZethembeMe.png"; // adjust path relative to this file
import '../styles/About.css'; // adjust path relative to this file
import React, { useState, useEffect } from 'react';

export default function About() {
  return (
    <div className="about-wrapper">
    <div className="about-container">
      <img src={ProfilePic} alt="The boss" className="profile" />
      <div className="about-text-container">
      <h3>Zethembe Nxumalo</h3>
      <p className="about-text">
        I’m a young, passionate programmer focused on data, automation, and coding solutions that improve everyday life. I strive to build software that makes a real difference for people and businesses alike.
      </p>
    </div>
    </div>
    </div>
  );
} 