import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import './App.scss';
import p1 from './p1.jpg';
import location from './location.png';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from '@carbon/react';

function App() {
  const [activeTab, setActiveTab] = useState(0); // To track the active tab

  const images = [p1, p1, p1, p1, p1, p1];

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
        <Tabs selected={activeTab} aria-label="List of tabs" >
          <TabList className="tab-header">
            <Tab>Location</Tab>
            <Tab>Events</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>

            </TabPanel>

            <TabPanel>
              <div className="events">
                <h2>add events</h2>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
