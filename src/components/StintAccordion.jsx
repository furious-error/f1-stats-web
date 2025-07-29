import React, { useState } from 'react';
import LapTable from './LapTable';

export default function StintAccordion({ stint, stintIndex }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="mb-3 border rounded-lg overflow-hidden">
            <button
                className="w-full text-left p-3 bg-gray-100 hover:bg-gray-200 font-medium transition-colors duration-200 flex items-center justify-between"
                onClick={() => setOpen(!open)}
            >
                <span>Stint {stintIndex} ({stint.Laps.length} laps)</span>
                <span className="text-gray-500 text-sm">
                    {open ? '▼' : '▶'}
                </span>
            </button>
            {open && (
                <div className="border-t border-gray-200">
                    <LapTable laps={stint.Laps} />
                </div>
            )}
        </div>
    );
}
