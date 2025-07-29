import axios from "axios";
import React, { useEffect, useState } from "react";
import ERGASTAPI from "../constants/apiConst";
import teamData from "../constants/teamData";


const DriverStandingsPage = () => {
    const [driverStandings, setDriverStandings] = useState([]);

    useEffect(() => {
        axios.get(`${ERGASTAPI}current/driverstandings/`)
            .then(response => {
                const driverStandingData = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                // console.log(driverStandingData);
                setDriverStandings(driverStandingData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <main className="px-4 md:px-12 py-8 w-full">
            <div className="text-3xl font-bold mb-10">Driver Standings</div>

            {/* Desktop Header - Hidden on mobile */}
            <div className="hidden md:grid grid-cols-10 font-semibold border-b-2 pb-2 mb-4 border-red-600">
                <div className="col-span-1 text-center">Pos</div>
                <div className="col-span-4">Driver</div>
                <div className="col-span-3">Team</div>
                <div className="col-span-2 text-center">Points</div>
            </div>

            <div className="flex flex-col space-y-4">
                {driverStandings.map(driver => (
                    <div key={driver.Driver.driverId}>
                        {/* Desktop Layout */}
                        <div className="hidden md:grid grid-cols-10 items-center bg-white rounded-lg shadow-sm py-4">
                            <div className="col-span-1 text-center font-medium">{driver.position}</div>
                            <div className="col-span-4 flex items-center space-x-3">
                                <div className="h-4 w-1" style={{ backgroundColor: teamData[driver.Constructors[0].constructorId]?.teamColor || '#000' }}></div>
                                <img src={teamData[driver.Constructors[0].constructorId]?.teamLogo} alt="logo" className="w-10" />
                                <div className="text-lg font-bold">{driver.Driver.givenName} {driver.Driver.familyName}</div>
                            </div>
                            <div className="col-span-3 font-semibold">{driver.Constructors[0].name}</div>
                            <div className="col-span-2 text-center font-semibold">{driver.points}</div>
                        </div>

                        {/* Mobile Layout */}
                        <div className="md:hidden bg-white rounded-lg shadow-sm p-4">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-gray-100 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                                        {driver.position}
                                    </div>
                                    <div className="h-6 w-1" style={{ backgroundColor: teamData[driver.Constructors[0].constructorId]?.teamColor || '#000' }}></div>
                                    <img src={teamData[driver.Constructors[0].constructorId]?.teamLogo} alt="logo" className="w-8 h-8 object-contain" />
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-red-600">{driver.points}</div>
                                    <div className="text-xs text-gray-500">POINTS</div>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-lg font-bold text-gray-900">
                                    {driver.Driver.givenName} {driver.Driver.familyName}
                                </div>
                                <div className="text-sm font-medium text-gray-600">
                                    {driver.Constructors[0].name}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>

    );
}

export default DriverStandingsPage