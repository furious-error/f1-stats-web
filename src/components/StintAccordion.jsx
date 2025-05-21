import React, { useState } from 'react';
import LapTable from './LapTable';

export default function StintAccordion({ stint, stintIndex }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="mb-2 border rounded">
            <button
                className="w-full text-left p-2 bg-gray-200 hover:bg-gray-300 font-medium"
                onClick={() => setOpen(!open)}
            >
                Stint {stintIndex} ({stint.Laps.length} laps)
            </button>
            {open && <LapTable laps={stint.Laps} />}
        </div>
    );
}
