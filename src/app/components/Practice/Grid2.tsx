import React from 'react';
import IndividualTests from './IndividualTests';
import AvailableTests from './AvailableTests';
const Grid2 = () => {
  return (
    <div className="px-4 flex flex-col gap-8 w-full">
    
      <div className="w-full">
        <IndividualTests />
      </div>
      <div className="w-full">
        <AvailableTests />
      </div>

      
    </div>
  )
}

export default Grid2
