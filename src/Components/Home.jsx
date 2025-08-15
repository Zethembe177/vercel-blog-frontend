
import SABC from '../assets/SABC.avif';
import React from 'react';
import '../styles/StarBackground.css';
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 flex items-center justify-center min-h-screen bg-black/50 text-white">
        <img 
          src={SABC} 
          alt="SABC image" 
          className="w-1/2 md:w-1/3"
        />
      </div>
    </div>
  );
}


