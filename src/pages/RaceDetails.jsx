import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ERGASTAPI } from '../constants';
import { getCircuitImage } from '../utils/helper';

const RaceDetails = () => {
  const { round } = useParams();
  const [race, setRace] = useState();
  const [events, setEvents] = useState();

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
  },[]);

  useEffect(() => {
    const eventSessions = [];
    if (race?.FirstPractice) {
      eventSessions.push({
        label: "Free Practice 1",
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
        label: "Free Practice 2",
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
        label: "Free Practice 3",
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

  console.log(events);

  return (
    <main className="ml-64 w-full">
      <div className="h-100 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${getCircuitImage(race?.Circuit.circuitId)})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="text-5xl text-white font-extrabold">{race?.Circuit.Location.country}</div>
          <div className="text-5xl text-white font-extrabold">{race?.season}</div>
          <div className="h-25"></div>
          <div className="text-3xl text-white font-bold">{race?.Circuit.circuitName}</div>
        </div>
      </div>
      <div className="m-8">
        <div>
          {race?.raceName}
        </div>
      </div>
    </main>
  )
}

export default RaceDetails 