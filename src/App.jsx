import { Outlet, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import AnalysisPage from './pages/AnalysisPage';
import ConstructorStandingsPage from './pages/ConstructorStandingsPage';
import DriverStandingsPage from './pages/DriverStandingsPage';
import RaceDetails from './pages/RaceDetails';
import RaceResultPage from './pages/ResultPage';
import SchedulePage from './pages/SchedulePage';

function App() {
  return (
    <>
      <div className="flex bg-gray-50 min-h-screen overflow-x-hidden">
        <SideBar />
        {/* Main content with responsive margins */}
        <main className="flex-1 md:ml-64 mb-20 md:mb-0 min-w-0">
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
        </main>
      </div>
    </>
  );
}

export default App;
