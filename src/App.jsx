// src/App.jsx

import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <p>
          WELCOME TO ALOK - SHREYA MARRIAGE
        </p>
      </header>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Gallery</h2>
        {/* Your gallery content goes here */}
      </section>

      {/* Events Section */}
      <section className="events-section">
        <h2>Events</h2>
        {/* Your events content goes here */}
      </section>

      {/* Google Maps Location Section */}
      <section className="location-section">
        <h2>Location</h2>
        {/* Your Google Maps content goes here */}
      </section>
    </div>
  );
}

export default App;
