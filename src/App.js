import React from 'react';
import './App.css';

const api = {
  key: "2d174703d6e4d8d4645eeba543dbd48c",
  base: "https://api.openweathermap.org/data/2.5/"
}

const dateBuilder = d => {
  let months = [
      "January", 
      "February", 
      "March", 
      "April", 
      "May", 
      "June", 
      "July", 
      "August", 
      "September", 
      "October", 
      "November", 
      "December"
  ];

  let days = [
      "Sunday", 
      "Monday", 
      "Tuesday", 
      "Wednesday", 
      "Thursday", 
      "Friday", 
      "Saturday"
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  
  return `${day} ${date} ${month} ${year}`;
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
          <div className="date">{dateBuilder(new Date())}</div>
        </div>

        <div className="weather-box">
            <div className="temp">15°c</div>
            <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
