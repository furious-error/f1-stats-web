import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import UpcomingRace from "../components/UpcomingRace";
import { ERGASTAPI } from "../constants";
import { formatDate, getCircuitImage } from '../utils/helper';
import { getFlag } from '../utils/CountryFlags';

const SchedulePage = () => {
    const [races, setRaces] = useState([]);
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/race/${id}`);
    };

    useEffect(() => {
        axios.get(`${ERGASTAPI}current/races/`)
            .then(response => {
                const raceData = response.data.MRData.RaceTable.Races;
                setRaces(raceData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <main className="ml-64 px-12 py-8 w-full">
            <UpcomingRace races={races} />
            <div className="text-3xl font-bold mb-8">Race Schedule</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {races.map(race => (
                    // <div key={race.round}><RaceCard race={race} /></div>
                    <div key={race.round} className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                        <img src={getCircuitImage(race.Circuit.circuitId)} alt={race.Circuit.circuitName} className="rounded-xl mb-4 w-full h-40 object-cover" />
                        <div className="flex items-center mb-2">
                            <span className="text-2xl/4 mr-2">{getFlag(race.Circuit.Location.country)}</span>
                            <h2 className="text-xl font-semibold">{race.raceName}</h2>
                        </div>
                        <p className="text-gray-600 mb-1">
                            <span className="font-medium">Circuit:</span> {race.Circuit.circuitName}
                        </p>
                        <p className="text-gray-600 mb-1">
                            <span className="font-medium">Location:</span> {race.Circuit.Location.locality}, {race.Circuit.Location.country}
                        </p>
                        <p className="text-gray-600 mb-3">
                            <span className="font-medium">Date:</span> {formatDate(race.date)}
                        </p>


                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            onClick={() => handleClick(race.round)} // Example ID
                        >
                            Go to Details Page
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default SchedulePage