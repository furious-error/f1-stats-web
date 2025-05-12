import React from 'react';
import './App.css';
import { SchedulePage } from './pages/SchedulePage';
import { SideBar } from './components/SideBar';
import { DriverStandingsPage } from './pages/DriverStandingsPage';
import { ConstructorStandingsPage } from './pages/ConstructorStandingsPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <SideBar />
        <Routes>
          <Route path="/" element={<SchedulePage />} />
          <Route path="/constructor-standing" element={<ConstructorStandingsPage />} />
          <Route path="/driver-standing" element={<DriverStandingsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
