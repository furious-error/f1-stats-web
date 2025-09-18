import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFlag } from "../utils/CountryFlags";
import { getCircuitImage } from "../utils/helper";

const UpcomingRace = ({ races }) => {
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
                    label: "Practice 1",
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
                    label: "Practice 2",
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
                    label: "Practice 3",
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

        const updateTimeLeft = () => {
            const now = new Date();
            const distance = nextEvent.datetime - now;

            if (distance <= 0) {
                setTimeLeft("In Progress");
                return;
            }

            const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
            const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, '0');
            const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, '0');
            const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, '0');

            setTimeLeft(`${days}d: ${hours}h: ${minutes}m: ${seconds}s`);
        };
        updateTimeLeft();
        const interval = setInterval(updateTimeLeft, 1000);
        return () => clearInterval(interval);
    }, [nextEvent]);

    if (!nextEvent) return <p className="text-gray-500 text-center"></p>;
    const race = races.find(race => race.raceName === nextRace);

    const seeDetails = () => {
        navigate(`/f1-stats-web/${race.round}/${race.raceName}`);
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
        <div className="mt-4 mb-12 rounded-2xl bg-cover bg-center h-80 md:h-80 relative"
            style={{ backgroundImage: `url(${getCircuitImage(race.Circuit.circuitId)})` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/35 rounded-2xl"></div>
            <div className="absolute inset-0 m-4 md:m-8">
                {/* Desktop Layout */}
                <div className="hidden md:flex absolute inset-0">
                    <div className="flex w-full justify-between items-center p-6 rounded-xl">
                        <div className="w-[60%]">
                            <div className="text-white font-bold text-base mb-2">UP NEXT - ROUND {race.round}</div>
                            <div className="text-gray-300 font-bold text-2xl mb-2 ">
                                {getFlag(race.Circuit.Location.country)} {race.Circuit.Location.country}
                            </div>
                            <div className="text-xl text-white font-bold mb-2">
                                {new Date(race.FirstPractice.date + " " + race.FirstPractice.time).toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: 'short'
                                })
                                } - {new Date(race.date + " " + race.time).toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: 'short'
                                })}
                            </div>
                            <div className="text-gray-100 font-extrabold text-4xl">{race.raceName}</div>
                            <button onClick={seeDetails} className="mt-4 text-white text-sm font-medium cursor-pointer">
                                See Details ➜
                            </button>
                        </div>
                        <div className="w-[40%]">
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

                {/* Mobile Layout */}
                <div className="md:hidden flex flex-col h-full p-4">
                    <div className="flex-1 flex flex-col justify-center space-y-4">
                        <div className="text-center">
                            <div className="text-white font-bold text-sm mb-2">UP NEXT - ROUND {race.round}</div>
                            <div className="text-gray-300 font-bold text-lg mb-2">
                                {getFlag(race.Circuit.Location.country)} {race.Circuit.Location.country}
                            </div>
                            <div className="text-sm text-white font-bold mb-2">
                                {new Date(race.FirstPractice.date + " " + race.FirstPractice.time).toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: 'short'
                                })
                                } - {new Date(race.date + " " + race.time).toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: 'short'
                                })}
                            </div>
                            <div className="text-gray-100 font-extrabold text-2xl mb-3">{race.raceName}</div>
                            <div className="text-center">
                                <button onClick={seeDetails} className="text-white text-sm font-medium cursor-pointer  transition-colors">
                                    See Details ➜
                                </button>
                            </div>
                        </div>

                        <div className="rounded-xl p-4 border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
                            <div className="text-center text-sm font-sans text-white font-semibold mb-3">
                                <span className="font-bold text-base">{nextEvent.label}</span> starts in
                            </div>
                            <div className="grid grid-cols-4 gap-2 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="text-white text-2xl font-extrabold">{parseTimeLeft(timeLeft).days}</div>
                                    <div className="text-white font-extrabold text-xs mt-1 uppercase tracking-wider">days</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="text-white text-2xl font-extrabold">{parseTimeLeft(timeLeft).hours}</div>
                                    <div className="text-white font-extrabold text-xs mt-1 uppercase tracking-wider">hours</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="text-white text-2xl font-extrabold">{parseTimeLeft(timeLeft).minutes}</div>
                                    <div className="text-white font-extrabold text-xs mt-1 uppercase tracking-wider">mins</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="text-white text-2xl font-extrabold">{parseTimeLeft(timeLeft).seconds}</div>
                                    <div className="text-white font-extrabold text-xs mt-1 uppercase tracking-wider">secs</div>
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
