import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import './App.scss';
import p1 from './p1.jpeg';
import p2 from './p2.jpeg';
import p3 from './p3.jpeg';
import p4 from './p4.jpeg';
import p5 from './p5.jpeg';
import p6 from './p6.jpeg';
import location from './location.png';
import background from './background.jpg';
import { LocationCurrent } from '@carbon/icons-react';
import { Header } from '@carbon/react';

function App() {
  const [activeTab, setActiveTab] = useState(0); // To track the active tab

  const images = [ p2, p3, p4, p5, p6];
  const locationLink = 'https://goo.gl/maps/LiisgKv448xUEViu6';

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
              <header className="App-header">
              <div className="main" style={{
              backgroundColor: "lightblue",
              display: "flex",
              flexDirection: "column", 
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "cursive",
              fontSize: 20,
              fontWeight: "bold",
              paddingBottom: 0,
              textAlign: "center"
              // Adjusted padding
            }}>
            <h1>Welcome to Alok - Shreya Wedding Ceromany</h1>
            <p style={{ fontSize: 16 }}>by Bhat's Family</p>
          </div>

    </header>
    <div className="main" style={{ backgroundColor: 'lightgrey'}}>
        <div className="carousel-container">
          <Carousel autoPlay={true} interval={6000} autoFocus infiniteLoop showIndicators stopOnHover>
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
              
              <p style={{ textAlign: 'center', fontFamily: 'monospace', fontWeight: "bold", fontSize: 25, paddingBottom: 16}}>Kindly participate & Bless US</p>
                <div className="event-container" style={{ backgroundColor: "violet", fontFamily: 'fantasy', fontSize: '22px', fontStyle: 'italic', fontWeight: 'bold' }}>
                  <h2 style={{ fontSize: '30px', fontWeight: 'bold' }}>Naandi</h2>
                  <p>Date: May 02, 2024</p>
                  <p> Venue: Manjushree Badadabailu </p>
                </div>

                <div className="event-container" style={{ backgroundColor: "orange", fontFamily: 'fantasy', fontSize: '22px', fontStyle: 'normal', fontWeight: 'normal' }}>
                  <h2 style={{ fontSize: '30px', fontWeight: 'bold' }}>Wedding Ceremony</h2>
                  <p>Date: May 03, 2024</p>
                  <p>Time: Morning @8:30 </p>
                  <p>Venue: Manjushree Badadabailu</p>
                  <p>& Vadhu Prahvesha @11:30</p>
                </div>

                <div className="event-container" style={{ backgroundColor: "yellow", fontFamily: 'fantasy', fontSize: '22px', fontStyle: 'normal', fontWeight: 'normal' }}>
                  <h2 style={{ fontSize: '30px', fontWeight: 'bold' }}>Reception</h2>
                  <p>Date: May 03, 2024</p>
                  <p>Time: Evening @5:30 </p>
                  <p>Venue: Manjushree Badadabailu </p>
                  <p>& Cultural Events By Family</p>
                </div>

                <div className="event-container" style={{ backgroundColor: "green", fontFamily: 'fantasy', fontSize: '22px', fontStyle: 'normal', fontWeight: 'normal' }}>
                  <h2 style={{ fontSize: '30px', fontWeight: 'bold' }}>Satya Narayana Pooje</h2>
                  <p>Date: March 04, 2024</p>
                  <p>Venue: Manjushree Badadabailu</p>
                </div>

              </div>
            )}



          </div>
        </div>
      </div></>
  );
}

export default App;
