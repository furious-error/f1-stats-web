import React from "react";

const compoundColor = {
    SOFT: 'text-red-600',
    MEDIUM: 'text-yellow-600',
    HARD: 'text-white bg-gray-700',
};

function formatTime(timeStr) {
    if (!timeStr) return '—';
    const parts = timeStr.split(' ')[2];
    const [hours, minutes, seconds] = parts.split(':');
    const [sec, ms] = seconds.split('.');
    const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
    return `${String(totalMinutes).padStart(2, '0')}:${sec}.${ms.substring(0, 3)}`;
}
  

function LapTable({ laps }) {
    return (
        <table className="w-full table-auto text-sm mt-2">
            <thead className="bg-gray-100">
                <tr className="text-center">
                    <th>Lap</th>
                    <th>Compound</th>
                    <th>Tyre Life</th>
                    <th>Lap Time</th>
                    <th>S1</th>
                    <th>S2</th>
                    <th>S3</th>
                    <th>Speeds (FL/I1/I2/ST)</th>
                </tr>
            </thead>
            <tbody>
                {laps.map((lap, idx) => (
                    <tr key={idx} className="text-center border-b">
                        <td>{lap.LapNumber}</td>
                        <td className={compoundColor[lap.Compound] || ''}>{lap.Compound}</td>
                        <td>{lap.TyreLife} Laps</td>
                        <td className="p-2">{formatTime(lap.LapTime)}</td>
                        <td className="p-2">{formatTime(lap.Sector1Time)}</td>
                        <td className="p-2">{formatTime(lap.Sector2Time)}</td>
                        <td className="p-2">{formatTime(lap.Sector3Time)}</td>
                        <td>
                            {lap.SpeedFL || '—'}/{lap.SpeedI1}/{lap.SpeedI2}/{lap.SpeedST}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
  
export default LapTable