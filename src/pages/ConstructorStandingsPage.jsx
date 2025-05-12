import React, { useState, useEffect } from "react";
import axios from "axios";
import { ERGASTAPI } from "../constants";


export function ConstructorStandingsPage() {
    const [constructorStandings, setConstructorStandings] = useState([]);

    useEffect(() => {
        axios.get(`${ERGASTAPI}current/constructorstandings/`)
            .then(response => {
                const constructorStandingData = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
                console.log(constructorStandingData);
                setConstructorStandings(constructorStandingData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <main className="ml-64 px-12 py-8 w-full">
            <div className="text-3xl font-bold mb-10">Constructor Standings</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {constructorStandings.map(team => (
                    <li key={team.Constructor.constructorId} className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-bold">
                                {team.position}. {team.Constructor.name}
                            </h2>
                            <p className="text-gray-600">{team.Constructor.nationality}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl font-bold">{team.points} pts</p>
                            <p className="text-sm text-gray-500">{team.wins} wins</p>
                        </div>
                    </li>
                ))}
            </div>
        </main>

    );
}