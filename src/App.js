// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import './App.css';
import LehengaVideos from './pages/LehangaVideos';
 function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/lehengas" element={<LehengaVideos/>} />
      </Routes>
    </Router>
  );
}

export default App;
