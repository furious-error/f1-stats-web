import React, { useState, useEffect } from "react";
import { getCircuitImage } from "../utils/helper";
import {getFlag} from "../utils/CountryFlags"

const UpcomingRace = ({races}) => {
    const [nextEvent, setNextEvent] = useState(null);
    const [nextRace, setNextRace] = useState();
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const now = new Date();
        const sessions = races.flatMap(race => {
            const { raceName } = race;
            const eventSessions = [];

            if (race.FirstPractice) {
                eventSessions.push({
                    label: "Free Practice 1",
                    datetime: new Date(`${race.FirstPractice.date}T${race.FirstPractice.time}`),
                    raceName,
                });
            }

            if (race.SprintQualifying) {
                eventSessions.push({
                    label: "Sprint Qualifying",
                    datetime: new Date(`${race.SprintQualifying.date}T${race.SprintQualifying.time}`),
                    raceName,
                });
            } else if (race.SecondPractice) {
                eventSessions.push({
                    label: "Free Practice 2",
                    datetime: new Date(`${race.SecondPractice.date}T${race.SecondPractice.time}`),
                    raceName,
                });
            }

            if (race.Sprint) {
                eventSessions.push({
                    label: "Sprint",
                    datetime: new Date(`${race.Sprint.date}T${race.Sprint.time}`),
                    raceName,
                });
            } else if (race.ThirdPractice) {
                eventSessions.push({
                    label: "Free Practice 3",
                    datetime: new Date(`${race.ThirdPractice.date}T${race.ThirdPractice.time}`),
                    raceName,
                });
            }

            if (race.Qualifying) {
                eventSessions.push({
                    label: "Qualifying",
                    datetime: new Date(`${race.Qualifying.date}T${race.Qualifying.time}`),
                    raceName,
                });
            }

            eventSessions.push({
                label: "Race",
                datetime: new Date(`${race.date}T${race.time}`),
                raceName,
            });

            return eventSessions;
        });

        const upcoming = sessions
            .filter(session => session.datetime > now)
            .sort((a, b) => a.datetime - b.datetime);

        if (upcoming.length > 0) {
            setNextEvent(upcoming[0]);
            setNextRace(upcoming[0]?.raceName);
        }
        // console.log(upcoming[0]?.raceName);
    }, [races]);
    useEffect(() => {
        if (!nextEvent) return;

        const interval = setInterval(() => {
            const now = new Date();
            const distance = nextEvent.datetime - now;

            if (distance <= 0) {
                setTimeLeft("In Progress");
                clearInterval(interval);
                return;
            }

            const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
            const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, '0');
            const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, '0');
            const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, '0');

            setTimeLeft(`${days}d: ${hours}h: ${minutes}m: ${seconds}s`);

        }, 1000);

        return () => clearInterval(interval);
    }, [nextEvent]);

    if (!nextEvent) return <p className="text-gray-500 text-center"></p>;
    const race = races.find(race => race.raceName === nextRace);
    return (
        <div className="my-12 rounded-2xl bg-cover bg-center h-70 relative border-2"
            style={{ backgroundImage: `url(${getCircuitImage(race.Circuit.circuitId)})` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/25 rounded-2xl"></div>
            <div className="absolute inset-0 m-8">
                <div className="text-white font-bold text-base"> UP NEXT - ROUND {race.round}</div>
                <div className="flex flex-col mt-10">
                    <div className="flex max-w-full justify-between">
                        <div className="max-w-[40%]">
                            <div className="text-gray-300 font-bold text-2xl text-wrap mb-4">
                                {getFlag(race.Circuit.Location.country)} {race.Circuit.Location.country}
                            </div>
                            <div className="text-gray-100 font-extrabold text-4xl text-wrap">
                                {race.raceName}
                            </div>
                        </div>
                        <div className="max-w-[60%]">
                            <div className="border-2 border-white rounded-2xl bg-blue-950 p-6">
                                <div className="text-base font-sans text-white font-semibold">Time Until {nextEvent.label}</div>
                                <div className="text-4xl font-sans text-white font-bold"> {timeLeft} </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpcomingRace
