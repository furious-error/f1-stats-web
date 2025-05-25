import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import UpcomingRace from "../components/UpcomingRace";
import  ERGASTAPI  from "../constants/apiConst";
import { formatDate, getCircuitImage, getCircuitLayout } from '../utils/helper';
import { getFlag } from '../utils/CountryFlags';
import { circuitData } from "../constants";

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
                    <div key={race.round} className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
                        <div className="text-sm font-bold text-red-600">ROUND {race.round}</div>
                        <div className="text-base flex flex-row items-center font-medium mt-1 mb-2"><span className="text-2xl/4">{getFlag(race.Circuit.Location.country)}</span> &nbsp; {race.Circuit.Location.locality}, {race.Circuit.Location.country}</div>
                        <div className="text-lg font-bold">
                            {new Date(race.FirstPractice.date).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: 'short'
                            })
                            } - {new Date(race.date).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: 'short'
                            })}
                        </div>
                        <div className="text-xl font-semibold text-wrap">
                            {circuitData[race.Circuit.circuitId].officialName || race.raceName} {race.season}
                        </div>
                        <div className="w-full">
                            <img src={getCircuitLayout(race.Circuit.circuitId)} alt={race.Circuit.circuitName} className="rounded-xl mx-auto object-fit my-2" height={200} width={200} />
                        </div>
                        <button
                            className="text-sm font-medium cursor-pointer text-left"
                            onClick={() => handleClick(race.round)}
                        >
                            See Details
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default SchedulePage