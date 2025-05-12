import React, {useState, useEffect} from "react";
import axios from "axios";
import { ERGASTAPI } from "../constants";
import { RaceCard } from "../components/RaceCard";


export function SchedulePage() {
    const [races, setRaces] = useState([]);

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
            <div className="text-3xl font-bold mb-10">Race Schedule</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {races.map(race => (
                    <div key={race.round}><RaceCard race={race} /></div>
                ))}
            </div>
        </main>
            
    );
}