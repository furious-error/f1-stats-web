import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import  ERGASTAPI  from '../constants/apiConst';
import { getCircuitImage, getCircuitTrackMap } from '../utils/helper';
import circuitData from '../constants/circuitData'
import ImageDialog from '../components/ImageDialog';
import { useNavigate } from 'react-router-dom';

const RaceDetails = () => {
  const { round } = useParams();
  const [race, setRace] = useState();
  const [events, setEvents] = useState();
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  

  useEffect(() => {
    axios.get(`${ERGASTAPI}current/${round}/races/`)
      .then(response => {
        const raceData = response.data.MRData.RaceTable.Races[0];
        // console.log(raceData[0]);
        setRace(raceData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const eventSessions = [];
    if (race?.FirstPractice) {
      eventSessions.push({
        label: "Practice 1",
        datetime: new Date(`${race?.FirstPractice.date}T${race?.FirstPractice.time}`),

      });
    }

    if (race?.SprintQualifying) {
      eventSessions.push({
        label: "Sprint Qualifying",
        datetime: new Date(`${race?.SprintQualifying.date}T${race?.SprintQualifying.time}`),

      });
    } else if (race?.SecondPractice) {
      eventSessions.push({
        label: "Practice 2",
        datetime: new Date(`${race?.SecondPractice.date}T${race?.SecondPractice.time}`),

      });
    }

    if (race?.Sprint) {
      eventSessions.push({
        label: "Sprint",
        datetime: new Date(`${race?.Sprint.date}T${race?.Sprint.time}`),

      });
    } else if (race?.ThirdPractice) {
      eventSessions.push({
        label: "Practice 3",
        datetime: new Date(`${race?.ThirdPractice.date}T${race?.ThirdPractice.time}`),

      });
    }

    if (race?.Qualifying) {
      eventSessions.push({
        label: "Qualifying",
        datetime: new Date(`${race?.Qualifying.date}T${race?.Qualifying.time}`),

      });
    }

    eventSessions.push({
      label: "Race",
      datetime: new Date(`${race?.date}T${race?.time}`),
    });
    setEvents(eventSessions)
  }, [race]);

  const seeResult = (session) => {
    navigate(`/race/${race?.raceName}/result/${session}`);
  };

  // console.log(events);

  return (
    <main className="ml-64 w-full">
      <div className="h-100 bg-cover bg-center relative m-4 rounded-xl"
        style={{ backgroundImage: `url(${getCircuitImage(race?.Circuit.circuitId)})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 rounded-xl"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="text-5xl text-white font-extrabold mb-2">{race?.Circuit.Location.country}</div>
          <div className="text-5xl text-white font-extrabold mb-2">{race?.season}</div>
          <div className="text-2xl text-white font-bold">
            {events?.find(event => event.label === "Free Practice 1")?.datetime.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short'
            })} - {events?.find(event => event.label === "Race")?.datetime.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short'
          })}
          </div>
          {/* <div className="h-25"></div>
          <div className="text-3xl text-white font-bold">{race?.Circuit.circuitName}</div> */}
        </div>
      </div>
      <div className="m-8">
        <div className="text-4xl text-black font-bold mb-6">
          {race?.raceName}
        </div>
        <div className="flex flex-col p-6">
          <div className="flex max-w-full justify-between">
            <div className="w-[60%] mr-6">
              {events?.map((session, index) => (
                <div key={index}>
                  <div className="flex flex-row mb-4 items-center border-2 border-red-600 rounded-2xl p-4">
                    <div className="text-2xl font-semibold">
                      {session.datetime.toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short'
                      })}
                    </div>
                    <div className="ml-4 mr-6 h-13 border-1 border-red-600"></div>
                    <div className="flex flex-col">
                      <div className="text-2xl font-bold">{session.label}</div>
                      <div className="text-xl font-semibold text-gray-500">
                        {session.datetime.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true,
                        })}</div>
                    </div>
                    <button onClick={() => seeResult(session.label)} className="ml-auto">Results {'>'}</button>
                  </div>
                </div>
              ))}
              <div className="text-base font-medium mt-4 text-wrap">
                Note: All times are shown in your local time zone ({Intl.DateTimeFormat().resolvedOptions().timeZone})
              </div>
            </div>
            <div className="w-[40%]">
              <div className="border-2 rounded-xl p-4 border-red-600 mb-6">
                <div className="text-base font-medium text-wrap mb-4">{race?.Circuit.circuitName}</div>
                {/* <img src={getCircuitTrackMap(race?.Circuit.circuitId)} alt="track map"/> */}
                <ImageDialog imageUrl={getCircuitTrackMap(race?.Circuit.circuitId)}/>
              </div>
              <div className="border-2 rounded-xl p-4 border-red-600">
                <div className="space-y-2">
                  <div>
                    <strong>Track Record:</strong>{" "}
                    {circuitData[race?.Circuit.circuitId]?.trackRecord.driver} (
                    {circuitData[race?.Circuit.circuitId]?.trackRecord.team}) -{" "}
                    {circuitData[race?.Circuit.circuitId]?.trackRecord.time} (
                    {circuitData[race?.Circuit.circuitId]?.trackRecord.year})
                  </div>
                  <div>
                    <strong>Laps:</strong>{" "}
                    {circuitData[race?.Circuit.circuitId]?.numberOfLaps}
                  </div>
                  <div>
                    <strong>Race Distance:</strong>{" "}
                    {circuitData[race?.Circuit.circuitId]?.raceDistance} km
                  </div>
                  <div>
                    <strong>Circuit Length:</strong>{" "}
                    {circuitData[race?.Circuit.circuitId]?.circuitLength} km
                  </div>
                  <div>
                    <button onClick={() => setExpanded(!expanded)} className="text-red-600 cursor-pointer focus:outline-none">
                      <div className={`text-left text-gray-700 transition-all ${expanded ? "" : "line-clamp-2"}`}>
                        {circuitData[race?.Circuit.circuitId]?.description}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default RaceDetails 