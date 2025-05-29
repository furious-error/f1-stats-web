import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import RaceResult from "../components/RaceResult"
import QualifyingResult from "../components/QualifyingResult"
import PracticeResult from "../components/PracticeResult"

function RaceResultPage() {
    const {round, session} = useParams()
    const [result, setResult] = useState();

    // console.log(round);
    // console.log(session);
    const year = new Date().getFullYear()
    const gp = round
    const API = "https://f1-stats-backend-nodejs.onrender.com/api"
    // const API = "http://127.0.0.1:5001"
    useEffect(() => {
        axios.get(`${API}/events/${gp}/${year}/sessions/${session}`).then(response => {
                const res = response;
                // console.log(res.data.sessionData.data);
                setResult(res.data.sessionData.data)
            }).catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [round, session]);
    // console.log(result);

    const renderResultComponent = () => {
        if (!result) return <div>Loading...</div>

        switch (session.toLowerCase()) {
            case 'sprint':
            case 'race':
                return <RaceResult result={result} />
            case 'sprint qualifying':    
            case 'qualifying':
                return <QualifyingResult result={result} />
            case 'practice':
            case 'practice 1':
            case 'practice 2':
            case 'practice 3':
                return <PracticeResult result={result} />
            default:
                return <div>Unknown session type: {session}</div>
        }
    }

  return (
    <main className="ml-64 px-12 py-8 w-full">
        <div className="my-6 text-3xl font-bold">{round} - {session} results</div>
        {renderResultComponent()}
    </main>
  )
}

export default RaceResultPage