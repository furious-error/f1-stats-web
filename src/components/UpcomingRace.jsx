import React, { useState, useEffect } from "react";
import { getCircuitImage } from "../utils/helper";
import {getFlag} from "../utils/CountryFlags"
import { useNavigate } from "react-router-dom";

const UpcomingRace = ({races}) => {
    const [nextEvent, setNextEvent] = useState(null);
    const [nextRace, setNextRace] = useState();
    const [timeLeft, setTimeLeft] = useState("");
    const navigate = useNavigate();

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

    const seeDetails = () => {
        navigate(`/race/${race.round}`);
    }

    const parseTimeLeft = (str) => {
        const match = str.match(/(\d+)d: (\d+)h: (\d+)m: (\d+)s/);
        if (!match) return { days: "00", hours: "00", minutes: "00", seconds: "00" };
        const [, days, hours, minutes, seconds] = match;
        return { days, hours, minutes, seconds };
    };

    const renderSegment = (unit, timeLeftStr) => {
        const { days, hours, minutes, seconds } = parseTimeLeft(timeLeftStr);
        const valueMap = { days, hours, minutes, seconds };
        return (
            <div className="flex flex-col items-center">
                <div className="text-white text-4xl font-extrabold">{valueMap[unit]}</div>
                <div className="text-gray-300 text-xs mt-1 uppercase tracking-wider">{unit}</div>
            </div>
        );
    };
    

    return (
        <div className="my-12 rounded-2xl bg-cover bg-center h-70 relative border-2"
            style={{ backgroundImage: `url(${getCircuitImage(race.Circuit.circuitId)})` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/25 rounded-2xl"></div>
            <div className="absolute inset-0 m-8">
                <div className="flex flex-col">
                    <div className="flex max-w-full justify-between items-center">
                        <div className="max-w-[40%]">
                            <div className="text-white font-bold text-base mb-8"> UP NEXT - ROUND {race.round}</div>
                            <div className="text-gray-300 font-bold text-2xl text-wrap mb-4">
                                {getFlag(race.Circuit.Location.country)} {race.Circuit.Location.country}
                            </div>
                            <div className="text-gray-100 font-extrabold text-4xl text-wrap">
                                {race.raceName}
                            </div>
                            <button onClick={seeDetails} className="text-white text-sm font-medium cursor-pointer">
                                See Details ➜
                            </button>
                        </div>
                        <div className="max-w-[60%]">
                            <div className="rounded-2xl p-6 border border-white/20 bg-white/10 backdrop-blur-md shadow-lg hover:bg-white/20">
                                <div className="text-base font-sans text-white font-semibold">
                                    <span className="font-bold text-xl">{nextEvent.label}</span> starts in
                                </div>
                                <div className="flex items-center justify-center space-x-4 mt-4">
                                    {renderSegment("days", timeLeft)}
                                    <div className="text-red-600 text-4xl font-bold">:</div>
                                    {renderSegment("hours", timeLeft)}
                                    <div className="text-red-600 text-4xl font-bold">:</div>
                                    {renderSegment("minutes", timeLeft)}
                                    <div className="text-red-600 text-4xl font-bold">:</div>
                                    {renderSegment("seconds", timeLeft)}
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpcomingRace
