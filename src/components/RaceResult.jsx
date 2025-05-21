import React from 'react'

function RaceResult({result}) {
  return (
      <div>
          {result.map((driver, index) => (
              <div key={driver.Abbreviation}>{index + 1} {driver.FullName} - {driver.Points}</div>
          ))}
      </div>
  )
}

export default RaceResult