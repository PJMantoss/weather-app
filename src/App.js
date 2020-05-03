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
        <div classname="search-box">
          <input 
              className="search-bar" 
              type="text" 
              placeholder="Enter a city..." 
          />
        </div>
      </main>
    </div>
  );
}

export default App;
