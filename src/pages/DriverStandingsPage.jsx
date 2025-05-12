import React, { useState, useEffect } from "react";
import axios from "axios";
import { ERGASTAPI } from "../constants";


export function DriverStandingsPage() {
    const [driverStandings, setDriverStandings] = useState([]);

    useEffect(() => {
        axios.get(`${ERGASTAPI}current/driverstandings/`)
            .then(response => {
                const driverStandingData = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                console.log(driverStandingData);
                setDriverStandings(driverStandingData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <main className="ml-64 px-12 py-8 w-full">
            <div className="text-3xl font-bold mb-10">Driver Standings</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {driverStandings.map(driver => (
                    <li key={driver.Driver.driverId} className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-bold">{driver.position}. {driver.Driver.givenName} {driver.Driver.familyName}</h2>
                            <p className="text-gray-600">{driver.Constructors[0].name} - {driver.Driver.nationality}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl font-bold">{driver.points} pts</p>
                            <p className="text-sm text-gray-500">{driver.wins} wins</p>
                        </div>
                    </li>
                ))}
            </div>
        </main>

    );
}