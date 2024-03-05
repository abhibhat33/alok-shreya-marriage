import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import './App.css';
import p1 from './p1.jpg';
import location from './location.png'

function App() {
  const images = [p1, p1, p1];

  return (
    <div>
      <header className="App-header">
        <div  style={{maxWidth: "70%", alignItems: "flex-start"}}>
      <Carousel autoPlay={true} interval={2000}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index}`} style={{ maxWidth: '60%' }}/>
            </div>
          ))}
        </Carousel>
        <p>
          WELCOME TO ALOK - SHREYA MARRIAGE
        </p>
        </div>
        <a href="https://goo.gl/maps/LiisgKv448xUEViu6" target="_blank" rel="noopener noreferrer">
          <img src={location} alt="Location" style={{ maxWidth: '30%', cursor: 'pointer' }} />
        </a>
      </header>

      <section className="gallery-section">
        <h2>Gallery</h2>
      </section>

      <section className="events-section">
        <h2>Events</h2>
      </section>

      <section className="location-section">
        <h2>Location</h2>
      </section>
    </div>
  );
}

export default App;
