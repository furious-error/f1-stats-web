import React, { useMemo, useState } from 'react';
import { formatTime } from '../utils/helper';


const getSortedQualifyingTimes = (data, qualiSessionKey) => {
    return data
        .filter(driver => driver[qualiSessionKey] !== null)
        .map(driver => ({
            driverId: driver.DriverId,
            fullName: driver.FullName,
            teamName: driver.TeamName,
            teamColor: driver.TeamColor,
            time: formatTime(driver[qualiSessionKey])
        }))
        .sort((a, b) => a.time.localeCompare(b.time));
};


const QualifyingTable = ({ data }) => {
    if (!data || data.length === 0) {
        return <p className="text-center text-gray-500 py-4">No data available for this session.</p>;
    }

    return (
        <div>
            {/* Desktop Layout */}
            <div className="hidden md:block">
                <div className="grid grid-cols-12 font-semibold border-b-2 pb-2 mb-4 border-red-600">
                    <div className="col-span-1 text-center">Pos</div>
                    <div className="col-span-5">Driver</div>
                    <div className="col-span-3">Team</div>
                    <div className="col-span-3 text-center">Time</div>
                </div>
                <div className="flex flex-col space-y-4">
                    {data.map((driver, index) => (
                        <div key={index}
                            className="grid grid-cols-12 items-center bg-white rounded-lg shadow-sm py-4">
                            <div className="col-span-1 text-center font-base">{index + 1}</div>
                            <div className="col-span-5 flex items-center space-x-3">
                                <div className="h-4 w-1" style={{ backgroundColor: `#${driver.teamColor}` || '#000' }}></div>
                                <div className="text-lg font-bold">{driver.fullName}</div>
                            </div>
                            <div className="col-span-3 font-medium">{driver.teamName}</div>
                            <div className="col-span-3 font-medium text-center">{driver.time}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden space-y-3">
                {data.map((driver, index) => (
                    <div key={index}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                    <span className="text-sm font-bold text-gray-700">P{index + 1}</span>
                                </div>
                                <div className="h-6 w-1 rounded" style={{ backgroundColor: `#${driver.teamColor}` || '#000' }}></div>
                            </div>
                            <div className="text-right">
                                <div className="text-lg font-bold text-red-600">{driver.time}</div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-lg font-bold text-gray-900">{driver.fullName}</div>
                            <div className="text-sm font-medium text-gray-600">{driver.teamName}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const QualifyingResult = ({ result }) => {
    const [activeTab, setActiveTab] = useState('Q1');

    const q1Times = useMemo(() => getSortedQualifyingTimes(result, "Q1"), [result]);
    const q2Times = useMemo(() => getSortedQualifyingTimes(result, "Q2"), [result]);
    const q3Times = useMemo(() => getSortedQualifyingTimes(result, "Q3"), [result]);

    const TABS = [
        { id: 'Q1', label: 'Q1', data: q1Times },
        { id: 'Q2', label: 'Q2', data: q2Times },
        { id: 'Q3', label: 'Q3', data: q3Times },
    ];

    return (
        <div className="w-full mx-auto p-4">
            {/* Tab Navigation */}
            <div className="flex space-x-1 md:space-x-2 mb-4 md:mb-6">
                {TABS.map(tab => (
                    <button
                        key={tab.id}
                        className={`flex-1 md:flex-none px-3 md:px-4 py-2 md:py-3 rounded-lg font-medium transition-all text-sm md:text-base ${activeTab === tab.id
                            ? 'bg-red-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="">
                {TABS.map(tab => (
                    activeTab === tab.id && (
                        <QualifyingTable key={tab.id} data={tab.data} />
                    )
                ))}
            </div>
        </div>
    );
};

export default QualifyingResult;
