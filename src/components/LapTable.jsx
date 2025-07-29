import { formatTime } from "../utils/helper";
import React from "react";

const compoundColor = {
    SOFT: 'text-red-600',
    MEDIUM: 'text-yellow-600',
    HARD: 'text-white bg-gray-700',
};

// function formatTime(timeStr) {
//     if (!timeStr) return '—';
//     const parts = timeStr.split(' ')[2];
//     const [hours, minutes, seconds] = parts.split(':');
//     const [sec, ms] = seconds.split('.');
//     const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
//     return `${String(totalMinutes).padStart(2, '0')}:${sec}.${ms.substring(0, 3)}`;
// }


function LapTable({ laps }) {
    return (
        <div className="mt-2">
            {/* Desktop Table */}
            <table className="hidden md:table w-full table-auto text-sm">
                <thead className="bg-gray-100">
                    <tr className="text-center">
                        <th className="p-2">Lap</th>
                        <th className="p-2">Compound</th>
                        <th className="p-2">Tyre Life</th>
                        <th className="p-2">Lap Time</th>
                        <th className="p-2">S1</th>
                        <th className="p-2">S2</th>
                        <th className="p-2">S3</th>
                        <th className="p-2">Speeds (FL/I1/I2/ST)</th>
                    </tr>
                </thead>
                <tbody>
                    {laps.map((lap, idx) => (
                        <tr key={idx} className="text-center border-b">
                            <td className="p-2">{lap.LapNumber}</td>
                            <td className={`p-2 ${compoundColor[lap.Compound] || ''}`}>{lap.Compound}</td>
                            <td className="p-2">{lap.TyreLife} Laps</td>
                            <td className="p-2">{formatTime(lap.LapTime)}</td>
                            <td className="p-2">{formatTime(lap.Sector1Time)}</td>
                            <td className="p-2">{formatTime(lap.Sector2Time)}</td>
                            <td className="p-2">{formatTime(lap.Sector3Time)}</td>
                            <td className="p-2">
                                {lap.SpeedFL || '—'}/{lap.SpeedI1}/{lap.SpeedI2}/{lap.SpeedST}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Mobile Card Layout */}
            <div className="md:hidden space-y-3">
                {laps.map((lap, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg m-2 p-3 border">
                        <div className="flex items-center justify-between mb-2">
                            <div className="font-semibold text-lg">Lap {lap.LapNumber}</div>
                            <div className="text-lg font-bold text-blue-600">{formatTime(lap.LapTime)}</div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Compound:</span>
                                <span className={`font-medium ${compoundColor[lap.Compound] || ''}`}>
                                    {lap.Compound}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Tyre Life:</span>
                                <span className="font-medium">{lap.TyreLife} Laps</span>
                            </div>
                        </div>

                        <div className="mt-2 pt-2 border-t border-gray-200">
                            <div className="text-xs text-gray-500 mb-1">Sector Times</div>
                            <div className="grid grid-cols-3 gap-2 text-sm">
                                <div className="text-center">
                                    <div className="text-xs text-gray-500">S1</div>
                                    <div className="font-medium">{formatTime(lap.Sector1Time)}</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xs text-gray-500">S2</div>
                                    <div className="font-medium">{formatTime(lap.Sector2Time)}</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xs text-gray-500">S3</div>
                                    <div className="font-medium">{formatTime(lap.Sector3Time)}</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-2 pt-2 border-t border-gray-200">
                            <div className="text-xs text-gray-500 mb-1">Speeds</div>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="flex justify-between">
                                    <span>FL:</span>
                                    <span>{lap.SpeedFL || '—'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>I1:</span>
                                    <span>{lap.SpeedI1 || '—'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>I2:</span>
                                    <span>{lap.SpeedI2 || '—'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>ST:</span>
                                    <span>{lap.SpeedST || '—'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LapTable