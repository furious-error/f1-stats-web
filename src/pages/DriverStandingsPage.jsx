import React, { useState, useEffect } from "react";
import axios from "axios";
import  ERGASTAPI  from "../constants/apiConst";
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
        <main className="ml-64 px-12 py-8 w-full">
            <div className="text-3xl font-bold mb-10">Driver Standings</div>
            <div className="grid grid-cols-12 font-semibold border-b-2 pb-2 mb-4 border-red-600">
                <div className="col-span-1 text-center">Pos</div>
                <div className="col-span-6">Driver</div>
                <div className="col-span-3">Team</div>
                <div className="col-span-2 text-center">Points</div>
            </div>
            <div className="flex flex-col space-y-4">
                {driverStandings.map(driver => (
                    <div key={driver.Driver.driverId}
                        className="grid grid-cols-12 items-center bg-white rounded-lg shadow-sm py-4">
                        <div className="col-span-1 text-center font-medium">{driver.position}</div>
                        <div className="col-span-6 flex items-center space-x-3">
                            <div className="h-4 w-1" style={{ backgroundColor: teamData[driver.Constructors[0].constructorId]?.teamColor || '#000' }}></div>
                            <img src={teamData[driver.Constructors[0].constructorId]?.teamLogo} alt="logo" className="w-10" />
                            <div className="text-lg font-bold">{driver.Driver.givenName} {driver.Driver.familyName}</div>
                        </div>
                        <div className="col-span-3 font-semibold">{driver.Constructors[0].name}</div>
                        <div className="col-span-2 text-center font-semibold">{driver.points}</div>
                    </div>
                ))}
            </div>
        </main>

    );
}

export default DriverStandingsPage