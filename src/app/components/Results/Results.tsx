import React from 'react'
import AllTests from './AllTests'

const Results = () => {
  return (
    <div className="px-4 flex gap-4 flex-col bg-stone-100 rounded-lg shadow w-full min-h-screen">
        <header className="">
                <h1 className="text-2xl font-bold text-stone-800p p-4">Results</h1>
                
        </header>

        <div className="w-full">
            <AllTests />
        </div>
      

      
    </div>
  )
}

export default Results
