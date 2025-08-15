import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Shows from './Components/Shows';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact';
import Blog from './Components/Blog'; 
import About from './Components/About';
function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Star background */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="stars"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
        </div>

        {/* Navbar and routed content */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;