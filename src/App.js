import React from 'react';
import './App.css';

const api = {
  key: "2d174703d6e4d8d4645eeba543dbd48c",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
              className="search-bar" 
              type="text" 
              placeholder="Enter a city..." 
          />
        </div>

        <div className="location-box">
          <div className="location">New York city, US</div>
          <div className="date">{dateBuilder(newDate())}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
