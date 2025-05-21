import React from 'react'

function QualifyingResult({result}) {
  return (
      <div>
          {result.map((driver, index) => (
              <div key={driver.Abbreviation}>{index + 1} {driver.FullName} - {driver.Points}</div>
          ))}
      </div>
  )
}

export default QualifyingResult