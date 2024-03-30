import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.scss';
import p1 from './p1.jpeg';
import p2 from './p2.jpeg';
import p3 from './p3.jpeg';
import p4 from './p4.jpeg';
import p5 from './p5.jpeg';
import p6 from './p6.jpeg';
import location from './location.png';
import { LocationCurrent } from '@carbon/icons-react';

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const images = [p2, p3, p4, p5, p6];
  const locationLink = 'https://goo.gl/maps/LiisgKv448xUEViu6';

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <header className="App-header">
        <div className="main" style={{
          backgroundColor: "#3C4043",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          fontStyle: "italic",
          fontSize: 20,
          fontWeight: "bold",
          paddingBottom: 0,
          textAlign: "center"
        }}>
          <h1 style={{ color: 'white'}}>Welcome to Alok - Shreya Wedding</h1>
          <p style={{ fontSize: 16, color: 'white' }}>by Bhat's Family</p>
        </div>
      </header>

      <div className="main">
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
                <p style={{ textAlign: 'center', fontWeight: "bold", fontSize: 25, paddingBottom: 16, color: 'white' }}>Kindly participate & Bless US</p>
                {events.map((event, index) => (
                  <div key={index} className="event-container" style={{ backgroundColor: event.color }}>
                    <h2 style={{ fontSize: '30px', fontWeight: 'bold' }}>{event.title}</h2>
                    <p>Date: {event.date}</p>
                    {event.time && <p>Time: {event.time}</p>}
                    <p>Venue: {event.venue}</p>
                    {event.additional && <p>{event.additional}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const events = [
  { title: 'Naandi', date: 'May 02, 2024', venue: 'Manjushree Badadabailu', color: 'violet' },
  { title: 'Wedding Ceremony', date: 'May 03, 2024', time: 'Morning @8:30 & Vadhu Prahvesha @11:30', venue: 'Manjushree Badadabailu', color: 'orange' },
  { title: 'Reception', date: 'May 03, 2024', time: 'Evening @5:30', venue: 'Manjushree, Badadabailu', additional: '& Cultural Events By Family', color: 'yellow' },
  { title: 'Satya Narayana Pooje', date: 'March 04, 2024', venue: 'Manjushree Badadabailu', color: 'greenyellow' }
];

export default App;
