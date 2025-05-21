import React from 'react';
import './App.css';
import  SchedulePage  from './pages/SchedulePage';
import  SideBar  from './components/SideBar';
import  DriverStandingsPage from './pages/DriverStandingsPage';
import  ConstructorStandingsPage  from './pages/ConstructorStandingsPage';
import { Route, Routes } from 'react-router-dom';
import RaceDetails from './pages/RaceDetails';
import RaceResultPage from './pages/ResultPage';

function App() {
  return (
    <>
      <div className="flex bg-gray-50">
        <SideBar />
        <Routes>
          <Route path="/" element={<SchedulePage />} />
          <Route path="/constructor-standing" element={<ConstructorStandingsPage />} />
          <Route path="/driver-standing" element={<DriverStandingsPage />} />
          <Route path="/race/:round" element={<RaceDetails />}/>
          <Route path="/race/:round/result/:session" element={<RaceResultPage/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
