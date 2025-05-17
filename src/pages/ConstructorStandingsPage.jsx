import React, { useState, useEffect } from "react";
import axios from "axios";
import { ERGASTAPI } from "../constants";
import teamData from "../constants/teamData";

const ConstructorStandingsPage = () => {
    const [constructorStandings, setConstructorStandings] = useState([]);

    useEffect(() => {
        axios.get(`${ERGASTAPI}current/constructorstandings/`)
            .then(response => {
                const constructorStandingData = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
                // console.log(constructorStandingData);
                setConstructorStandings(constructorStandingData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <main className="ml-64 px-12 py-8 w-full">
            <div className="text-3xl font-bold mb-10">Constructor Standings</div>
            <div className="grid grid-cols-12 font-semibold border-b-2 pb-2 mb-4 border-red-600">
                <div className="col-span-2 text-center">Pos</div>
                <div className="col-span-7">Team</div>
                <div className="col-span-3 text-center">Points</div>
            </div>
            <div className="flex flex-col space-y-4">
                {constructorStandings.map(team => (
                    <div key={team.Constructor.constructorId}
                        className="grid grid-cols-12 items-center bg-white rounded-lg shadow-sm py-4">
                        <div className="col-span-2 text-center font-medium">{team.position}</div>
                        <div className="col-span-7 flex items-center space-x-3">
                            <div className="h-4 w-1" style={{ backgroundColor: teamData[team.Constructor.constructorId]?.teamColor || '#000' }}></div>
                            <img src={teamData[team.Constructor.constructorId]?.teamLogo} alt="logo" className="w-10"/>
                            <div className="text-lg font-bold">{team.Constructor.name}</div>
                        </div>
                        <div className="col-span-3 text-center font-medium">{team.points}</div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default ConstructorStandingsPage