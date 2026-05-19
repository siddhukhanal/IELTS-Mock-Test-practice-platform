import React from 'react'
import TopBar from './TopBar'
import Grid from './Grid'

const Dashboard = () => {
  return (
    <div className="px-4 flex gap-4 flex-col bg-stone-100 rounded-lg shadow w-full min-h-screen">
      <header className="">
                <h1 className="text-2xl font-bold text-stone-800p p-4">Dashboard</h1>
                
        </header>

        <Grid />    
      
    </div>
  )
}
export default Dashboard
