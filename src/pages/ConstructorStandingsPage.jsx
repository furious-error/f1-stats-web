import axios from "axios";
import React, { useEffect, useState } from "react";
import ERGASTAPI from "../constants/apiConst";
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
        <main className="px-4 md:px-12 py-8 w-full">
            <div className="text-3xl font-bold mb-10">Constructor Standings</div>

            {/* Desktop Header - Hidden on mobile */}
            <div className="hidden md:grid grid-cols-10 font-semibold border-b-2 pb-2 mb-4 border-red-600">
                <div className="col-span-1 text-center">Pos</div>
                <div className="col-span-3">Team</div>
                <div className="col-span-4 text-center">Drivers</div>
                <div className="col-span-2 text-center">Points</div>
            </div>

            <div className="flex flex-col space-y-4">
                {constructorStandings.map(team => (
                    <div key={team.Constructor.constructorId}>
                        {/* Desktop Layout */}
                        <div className="hidden md:grid grid-cols-10 items-center bg-white rounded-lg shadow-sm py-4">
                            <div className="col-span-1 text-center font-medium">{team.position}</div>
                            <div className="col-span-3 flex items-center space-x-3">
                                <div className="h-4 w-1" style={{ backgroundColor: teamData[team.Constructor.constructorId]?.teamColor || '#000' }}></div>
                                <img src={teamData[team.Constructor.constructorId]?.teamLogo} alt="logo" className="w-10" />
                                <div className="text-lg font-bold">{team.Constructor.name}</div>
                            </div>
                            <div className="col-span-4 flex flex-col items-center">
                                <div className="text-base font-normal">{teamData[team.Constructor.constructorId]?.drivers.driver1}</div>
                                <div className="text-base font-normal">{teamData[team.Constructor.constructorId]?.drivers.driver2}</div>
                            </div>
                            <div className="col-span-2 text-center font-medium">{team.points}</div>
                        </div>

                        {/* Mobile Layout */}
                        <div className="md:hidden bg-white rounded-lg shadow-sm p-4">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-gray-100 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                                        {team.position}
                                    </div>
                                    <div className="h-6 w-1" style={{ backgroundColor: teamData[team.Constructor.constructorId]?.teamColor || '#000' }}></div>
                                    <img src={teamData[team.Constructor.constructorId]?.teamLogo} alt="logo" className="w-8 h-8 object-contain" />
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-red-600">{team.points}</div>
                                    <div className="text-xs text-gray-500">POINTS</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-lg font-bold text-gray-900">
                                    {team.Constructor.name}
                                </div>
                                <div className="space-y-1">
                                    <div className="text-sm font-medium text-gray-600">
                                        {teamData[team.Constructor.constructorId]?.drivers.driver1}
                                    </div>
                                    <div className="text-sm font-medium text-gray-600">
                                        {teamData[team.Constructor.constructorId]?.drivers.driver2}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default ConstructorStandingsPage