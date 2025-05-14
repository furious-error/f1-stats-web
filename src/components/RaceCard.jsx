import React from 'react';

import { formatDate, getCircuitImage } from '../utils/helper';
import { getFlag } from '../utils/CountryFlags';

export function RaceCard({ race }) {
    return (
        <div
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
        >

            <img
                src={getCircuitImage(race.Circuit.circuitId)}
                alt={race.Circuit.circuitName}
                className="rounded-xl mb-4 w-full h-40 object-cover"
            />


            <div className="flex items-center mb-2">
                <span className="text-2xl/4 mr-2">{getFlag(race.Circuit.Location.country)}</span>
                <h2 className="text-xl font-semibold">{race.raceName}</h2>
            </div>


            <p className="text-gray-600 mb-1">
                <span className="font-medium">Circuit:</span> {race.Circuit.circuitName}
            </p>
            <p className="text-gray-600 mb-1">
                <span className="font-medium">Location:</span> {race.Circuit.Location.locality}, {race.Circuit.Location.country}
            </p>
            <p className="text-gray-600 mb-3">
                <span className="font-medium">Date:</span> {formatDate(race.date)}
            </p>


            <a
                href={race.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm hover:bg-red-700 transition"
            >
                View Details
            </a>
        </div>
    );
}