import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/home';
import { SculpturePage } from 'pages/keramische-skulpturen';
import { GalleryPage } from 'pages/malerei';


import './App.css';
import { ProcessPage } from 'pages/process';
import { ProfilePage } from 'pages/profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/keramische-skulpturen' element={<SculpturePage />} />
        <Route path='/malerei' element={<GalleryPage />} />
        <Route path='/prozess' element={<ProcessPage />} />
        <Route path='/über-tatyana' element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
