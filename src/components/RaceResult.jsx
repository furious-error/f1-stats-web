import { formatTime } from '../utils/helper'
import React from 'react';

function getStatus(status, time) {
    switch (status) {
        case "Finished":
            return `+${time}`
        case "Lapped":
            return "+1 Lap"
        case "Disqualified":
            return "DSQ"
        case "Retired":
            return "RET"
        default:
            return "DNF"
    }
}


function RaceResult({ result }) {
    return (
        <div>
            {/* Desktop Layout */}
            <div className="hidden md:block">
                <div className="grid grid-cols-12 font-semibold border-b-2 pb-2 mb-4 border-red-600">
                    <div className="col-span-1 text-center">Pos</div>
                    <div className="col-span-5">Driver</div>
                    <div className="col-span-3">Team</div>
                    <div className="col-span-1 text-center">Pts</div>
                    <div className="col-span-2 text-center">Gap</div>
                </div>
                <div className="flex flex-col space-y-4">
                    {result.map((driver, index) => (
                        <div key={driver.DriverId}
                            className="grid grid-cols-12 items-center bg-white rounded-lg shadow-sm py-4">
                            <div className="col-span-1 text-center font-base">{index + 1}</div>
                            <div className="col-span-5 flex items-center space-x-3">
                                <div className="h-4 w-1" style={{ backgroundColor: `#${driver.TeamColor}` || '#000' }}></div>
                                <div className="text-lg font-bold">{driver.FullName}</div>
                            </div>
                            <div className="col-span-3 font-medium">{driver.TeamName}</div>
                            <div className="col-span-1 text-center font-semibold">{driver.Points}</div>
                            <div className="col-span-2 text-center font-base">{index === 0 ? '—' : getStatus(driver.Status, formatTime(driver.Time))}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden space-y-3">
                {result.map((driver, index) => (
                    <div key={driver.DriverId}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                    <span className="text-sm font-bold text-gray-700">P{index + 1}</span>
                                </div>
                                <div className="h-6 w-1 rounded" style={{ backgroundColor: `#${driver.TeamColor}` || '#000' }}></div>
                            </div>
                            <div className="text-right">
                                <div className="text-lg font-bold text-red-600">{driver.Points} pts</div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-lg font-bold text-gray-900">{driver.FullName}</div>
                            <div className="text-sm font-medium text-gray-600">{driver.TeamName}</div>
                            <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                                <span className="text-sm text-gray-500">Gap to leader:</span>
                                <span className="text-sm font-medium text-gray-700">
                                    {index === 0 ? 'Winner' : getStatus(driver.Status, formatTime(driver.Time))}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RaceResult