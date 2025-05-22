import React from 'react'
import teamData from '../constants/teamData'
import { formatTime } from '../utils/helper'

function getStatus(status, time){
    switch (status) {
        case "Finished":
            return `+${time}`
        case "Lapped":
            return "+1 Lap"
        case "Disqualified":
            return "DSQ"
        case "Retired":
            return "RET"
        default:
            return "DNF"
    }
}


function RaceResult({result}) {
  return (
      <div>
          <div className="grid grid-cols-12 font-semibold border-b-2 pb-2 mb-4 border-red-600">
              <div className="col-span-1 text-center">Pos</div>
              <div className="col-span-5">Driver</div>
              <div className="col-span-3">Team</div>
              <div className="col-span-1 text-center">Pts</div>
              <div className="col-span-2 text-center">Gap</div>
          </div>
          <div className="flex flex-col space-y-4">
              {result.map((driver, index) => (
                  <div key={driver.DriverId}
                      className="grid grid-cols-12 items-center bg-white rounded-lg shadow-sm py-4">
                      <div className="col-span-1 text-center font-base">{index+1}</div>
                      <div className="col-span-5 flex items-center space-x-3">
                          <div className="h-4 w-1" style={{ backgroundColor: `#${driver.TeamColor}` || '#000' }}></div>
                          <div className="text-lg font-bold">{driver.FullName}</div>
                      </div>
                      <div className="col-span-3 font-medium">{driver.TeamName}</div>
                      <div className="col-span-1 text-center font-semibold">{driver.Points}</div>
                      <div className="col-span-2 text-center font-base">{index === 0 ? '—' : getStatus(driver.Status, formatTime(driver.Time))}</div>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default RaceResult