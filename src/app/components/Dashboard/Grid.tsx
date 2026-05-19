import React from 'react'
import Statcard from './Statcard'
import ActivityGraph from '../Sidebar/ActivityGraph'
import Results from './RecentTests'
import { FiBookOpen, FiEdit3, FiHeadphones, FiMic } from 'react-icons/fi'
import OverallProgressCard from './OverallProgressCard'
import MiniStatCard from './MiniStatCard'
import PracticeSmarterCard from './PracticeSmartCard'
import RecentTests from './RecentTests'

const Grid = () => {
  return (
    <div className="bg-stone-100 px-4 grid gap-4 grid-cols-12 mt-4">
      <div className="col-span-12 lg:col-span-3">
        <OverallProgressCard score={6.5} />
      </div>
      <div className="col-span-12 lg:col-span-6 grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        <MiniStatCard title="Reading" score={7.5} trend={8.5} Icon={FiBookOpen} color="bg-purple-100" iconColor="text-purple-600" />
        <MiniStatCard title="Writing" score={7} trend={8.5} Icon={FiEdit3} color="bg-yellow-100" iconColor="text-yellow-600" />
        <MiniStatCard title="Speaking" score={6.5} trend={3.5} Icon={FiMic} color="bg-emerald-100" iconColor="text-emerald-600" />
        <MiniStatCard title="Listening" score={6} trend={8.5} Icon={FiHeadphones} color="bg-orange-100" iconColor="text-orange-600" />
      </div>
      <div className="col-span-12 lg:col-span-3">
        <PracticeSmarterCard />
      </div>
        {/* <Statcard /> */}
        <div className="col-span-12 lg:col-span-12">
          <ActivityGraph />
          </div>
        <div className="col-span-12">
          <RecentTests />
          </div>

      
    </div>
  )
}

export default Grid
