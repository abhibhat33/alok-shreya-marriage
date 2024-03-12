import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import './App.scss';
import p1 from './p1.jpg';
import location from './location.png';
import { LocationCurrent } from '@carbon/icons-react';

function App() {
  const [activeTab, setActiveTab] = useState(0); // To track the active tab

  const images = [p1, p1, p1, p1, p1, p1];
  const locationLink = 'https://goo.gl/maps/LiisgKv448xUEViu6';

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="main">
      <div className="carousel-container">
        <Carousel autoPlay={true} interval={2000} autoFocus infiniteLoop showIndicators stopOnHover>
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
                <img src={image} alt="alok and shreya" />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="tabs">
        <div className="tab-header">
          <button onClick={() => handleTabChange(0)} className={activeTab === 0 ? 'active' : ''}>
            Location
          </button>
          <button onClick={() => handleTabChange(1)} className={activeTab === 1 ? 'active' : ''}>
            Events
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 0 && (
            <div className="location">
              <a href={locationLink} target="_blank" rel="noopener noreferrer">
              <LocationCurrent size={64} aria-label="Add" className="my-custom-class" />
                <img src={location} alt="Location" />
              </a>
            </div>
          )}

          {activeTab === 1 && (
            <div className="events">
              <h2>Add Events</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
