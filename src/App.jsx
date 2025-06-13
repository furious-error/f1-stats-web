import React from 'react';
import './App.css';
import  SchedulePage  from './pages/SchedulePage';
import  SideBar  from './components/SideBar';
import  DriverStandingsPage from './pages/DriverStandingsPage';
import  ConstructorStandingsPage  from './pages/ConstructorStandingsPage';
import { Outlet, Route, Routes } from 'react-router-dom';
import RaceDetails from './pages/RaceDetails';
import RaceResultPage from './pages/ResultPage';
import AnalysisPage from './pages/AnalysisPage';

function App() {
  return (
    <>
      <div className="flex bg-gray-50">
        <SideBar />
        <Routes>
          <Route path="/f1-stats-web" element={<Outlet />}>
            <Route index element={<SchedulePage />} />
            <Route path="constructor-standing" element={<ConstructorStandingsPage />} />
            <Route path="driver-standing" element={<DriverStandingsPage />} />
            <Route path="analysis" element={<AnalysisPage />} />
            <Route path=":round/:race" element={<RaceDetails />} />
            <Route path=":round/result/:session" element={<RaceResultPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
