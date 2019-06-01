import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import RecentNews from './components/recentnews'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <RecentNews/>
    </div>
  );
}

export default App;
