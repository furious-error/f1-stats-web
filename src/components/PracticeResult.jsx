import React from 'react'
import StintAccordion from './StintAccordion'

function PracticeResult({ result }) {
    return (
        <div className="space-y-4">
            {result.map((driver, index) => (
                <div key={index} className="bg-white shadow-md rounded p-4">
                    <div className="text-xl font-semibold mb-2">
                        {driver.Driver} — {driver.Team}
                    </div>
                    {driver.Stints.map((stint, i) => (
                        <StintAccordion key={i} stint={stint} stintIndex={i + 1} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default PracticeResult
