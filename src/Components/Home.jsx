import SABC from '../assets/SABC.avif';
import React from 'react';
import '../styles/StarBackground.css'; // your shooting star CSS
import kabzaalbum from '../assets/kabzaalbum.jpg'; // Ensure the image is imported
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Shooting Star Background is in StarBackground.css */}
     
             <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        {/*     Optional overlay */}

        <div className="absolute inset-0 bg-black/30 z-0"></div>

              {/* Hero Content */}
              <div className="relative z-10 flex flex-col items-center">
        
                <img 
            src={SABC} 
            alt="SABC image" 
            className="w-1/3 md:w-1/4 mb-8 rounded-lg shadow-lg"
          />
        
                  <h1 className="text-xl md:text-6xl font-bold text-white mb-4">
           
            Welcome to the Amapiano Blog
          </h1>
             <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl">
            Discover the latest albums, featured artists, and trending playlists.
          </p>
          <div className="flex items-center  justify-center w-full">
            <a
  href="https://open.spotify.com/album/5hdEZLjn0k8hM6KztDzIs1"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-md bg-white px-4 py-2 text-black font-semibold hover:bg-indigo-500"
  
>
  Listen now
            </a>
            <div className="ml-10 flex-shrink-0 ">
             <img 
            src={kabzaalbum} 
            alt="kabza image" 
            className="w-1/3 md:w-1/4 rounded-lg shadow-lg ml-12"
          />
          </div>
          </div>
       </div>
    </div>
    </div>
  );
}
