import React from 'react'
import { FiCalendar } from 'react-icons/fi'
import { FiBell } from 'react-icons/fi'
import { FiChevronDown } from 'react-icons/fi'

const TopBar = () => {
  return (
    <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200"
    >
        <div className="flex items-center justify-between p-0.5"
        >
            <div>
                <span className="text-sm font-bold block"> Good Morning, Mike</span>
                <span className="text-xs block text-stone-500"> Tuesday, May 13th 2026</span>
            </div>
            <div>
            <div className="flex items-center gap-4">

          <div className="relative cursor-pointer hover:bg-stone-100 p-2 rounded-full transition-colors">
            <FiBell className="text-stone-600 text-lg size-5" />
            {/* <span className="absolute top-1 right-1 bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
              6
            </span> */}
          </div>

          {/* User Profile Section */}
          <div className="flex items-center gap-3 pl-2">
            <img 
            src="https://api.dicebear.com/9.x/notionists/svg"
            alt="avatar"
            className="size-8 rounded shrink-0 bg-violet-500 shadow"
            />
            <div className="hidden sm:block">
              <span className="text-sm font-bold block leading-tight">Mike Hawk</span>
              <span className="text-xs text-stone-500 block">User</span>
            </div>
            <button className="text-stone-400 hover:text-stone-600 transition-colors">
              <FiChevronDown />
            </button>
          </div>
        </div>
            </div>
        </div>
      
    </div>
  )
}

export default TopBar
