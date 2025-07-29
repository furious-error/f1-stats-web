import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ImageDialog from '../components/ImageDialog';

function AnalysisPage() {
  const [gpList, setGPList] = useState([]);
  const [selectedGP, setSelectedGP] = useState("Select Grand Prix");
  const [selectedAnalysisType, setSelectedAnalysisType] = useState("position_change_during_race");
  const year = new Date().getFullYear();
  const API = "https://f1-stats-backend-nodejs.onrender.com/api";
  const CACHE_KEY = `gpList-${year}`;
  const CACHE_EXPIRY_KEY = `gpListExpiry-${year}`;
  const CACHE_DURATION = 1000 * 60 * 60;

  const analysisOptions = {
    "Position Change During Race": "driver_position_change_race",
    "Qualifying Gap": "qualifying_gap",
    "Max Driver Speeds during Race": "driver_max_speeds_race",
    "Min Driver Speeds during Race": "driver_min_speeds_race",
    "Laptime distribution for Each Driver": "laptime_distribution_race",
    "Lap by Lap Racepace": "lap_by_lap_racepace",
  };

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = localStorage.getItem(CACHE_KEY);
      const cachedExpiry = localStorage.getItem(CACHE_EXPIRY_KEY);
      const now = Date.now();

      if (cachedData && cachedExpiry && now < Number(cachedExpiry)) {
        setGPList(JSON.parse(cachedData));
      } else {
        try {
          const response = await axios.get(`${API}/analysis/${year}`);
          setGPList(response.data);
          localStorage.setItem(CACHE_KEY, JSON.stringify(response.data));
          localStorage.setItem(CACHE_EXPIRY_KEY, (now + CACHE_DURATION).toString());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [year]);

  const selectedRace = gpList.find(gp => gp.eventName === selectedGP);

  return (
    <main className="px-4 md:px-12 py-8 w-full">
      <div className="my-6 text-3xl font-bold">Analysis</div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col flex-2 space-y-4 mb-6 md:mb-0 md:mr-8 w-full md:w-64">
          {Object.entries(analysisOptions).map(([label, key]) => (
            <button
              key={key}
              className={`p-4 rounded font-medium transition-all ${selectedAnalysisType === key
                ? 'bg-red-600 text-white shadow'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
                }`}
              onClick={() => setSelectedAnalysisType(key)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex-3">
          <select
            className="mb-6 w-full p-3 border-2 border-red-600 rounded-md bg-gray-200 text-black"
            value={selectedGP}
            onChange={e => setSelectedGP(e.target.value)}
          >
            <option value="Select Grand Prix" disabled>
              Select Grand Prix
            </option>
            {gpList.map(gp => (
              <option key={gp._id} value={gp.eventName}>
                {gp.eventName} ({gp.year})
              </option>
            ))}
          </select>

          <div className="border-2 border-red-600 bg-gray-200 p-4 rounded flex h-auto items-center justify-center">
            {selectedRace && selectedRace.gp_data[selectedAnalysisType] ? (
              <ImageDialog
                imageUrl={selectedRace?.gp_data[selectedAnalysisType]}
                alt={selectedAnalysisType}
                style="max-h-[95vh] w-full h-auto object-contain"
              />
            ) : (
              <div className="text-gray-700 text-center">Select a Grand Prix and analysis type to view data.</div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default AnalysisPage
