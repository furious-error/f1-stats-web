import StintAccordion from './StintAccordion'
import React from 'react'

function PracticeResult({ result }) {
    return (
        <div className="space-y-4">
            {result.map((driver, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-4">
                    <div className="text-lg md:text-xl font-semibold mb-3 pb-2 border-b border-gray-200">
                        <div className="flex flex-col md:flex-row md:items-center">
                            <span className="text-gray-900">{driver.Driver}</span>
                            <span className="text-gray-600 text-base md:text-lg md:ml-2">— {driver.Team}</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        {driver.Stints.map((stint, i) => (
                            <StintAccordion key={i} stint={stint} stintIndex={i + 1} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PracticeResult
