import '../styles/Shows.css';


import insta1 from '../assets/insta1.avif';
import insta2 from '../assets/insta2.avif';
import insta3 from '../assets/insta3.avif';
import insta4 from '../assets/insta4.avif';
import insta5 from '../assets/insta5.avif';
import insta6 from '../assets/insta6.avif';
import insta7 from '../assets/insta7.avif';
import insta8 from '../assets/insta8.avif';
import insta9 from '../assets/insta9.avif';
import insta10 from '../assets/insta10.avif';
import insta11 from '../assets/insta11.avif';
import insta12 from '../assets/insta12.avif';

import React, { useState, useEffect } from 'react';


const images = {
  "IG_SA_Breakfast.avif": insta1,
  "IG_SA_Classics_programme_poster.avif": insta2,
  "IG_Connect_programme.avif": insta3,
  "IG_Ziyawa_programme_poster.avif": insta4,
  "IG_Hip_hop_programme_posters.avif": insta5,
  "IG_SA_Hits_Programme_poster.avif": insta6,
  "Instagram_Top_20_programme_poster.avif": insta7,
  "Instagram_Piano_to_the_world_posters.avif": insta8,
  "Instagram_Lunchtime_vibes_programme_poster.avif": insta9,
  "Instagram_New_show_poster.avif": insta10,
  "Instagram_Chart_toppers_poster_yellow_and_green.avif": insta11,
  "Instagram_Video_wall_poster.avif": insta12,
};

function Shows() {
  const [shows, setShows] = React.useState([]);

  React.useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/shows`)
      .then(res => res.json())
      .then(data => setShows(data));
  }, []);

  return (
    <div className="shows-container">
  {shows.map(show => (
    <div key={show.id} className="show-card">
      <img src={images[show.image]} alt={show.title} style={{ width: '200px' }} />
      
      <h2 className="show-title">{show.title}</h2>
      
      <p className="show-description">{show.description}</p>
      
      <div className="show-info">
        <p><strong>Schedule:</strong></p>
        <p>{show.schedule}</p>
      </div>
      
      <div className="show-info">
        <p><strong>Channel:</strong></p>
        <p>{show.channel}</p>
      </div>
    </div>
  ))}
</div>

  );
}
export default Shows;
