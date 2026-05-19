// src/app/components/Practice/AvailableTests.tsx
"use client"
import React from 'react';
import { FiChevronDown, FiChevronRight, FiZap, FiPlay } from 'react-icons/fi'; 

export default function AvailableTests() {
  const leftColumnTests = [
    { id: '01', title: 'Full Test 1', type: 'Mock Test' },
    { id: '02', title: 'Full Test 1', type: 'Mock Test' },
    { id: '03', title: 'Full Test 1', type: 'Mock Test' },
    { id: '04', title: 'Full Test 1', type: 'Mock Test' },
    { id: '05', title: 'Full Test 1', type: 'Mock Test' },
  ];

  const rightColumnTests = [
    { id: '01', title: 'Full Test 1', type: 'Mock Test' },
    { id: '02', title: 'Full Test 1', type: 'Mock Test' },
  ];

  return (
    <div className="w-full bg-white rounded-2xl p-4 border border-slate-100 mt-4 shadow-sm">
      
      {/* Header & Dropdown Filter */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-800">Available Tests</h2>
        <div className="relative inline-block">
          <select className="appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2 pr-10 text-sm text-slate-500 font-medium outline-none cursor-pointer hover:border-slate-300 transition-colors">
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
          <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
      </div>

      {/* Internal Grid splitting Left & Right columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Column */}
        <div className="flex flex-col gap-3.5">
          {leftColumnTests.map((test, index) => (
            <div key={`left-${index}`} className="flex items-center justify-between bg-slate-50 hover:bg-slate-100/70 transition-all px-5 py-4 rounded-xl group">
              <div className="flex items-center">
                <span className="text-sm font-bold text-slate-400 w-10 group-hover:text-slate-600 transition-colors">{test.id}</span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">{test.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{test.type}</p>
                </div>
              </div>
              <button className="text-slate-400 hover:text-slate-600 transition-all p-1.5 rounded-lg bg-transparent hover:bg-white hover:shadow-sm">
                <FiPlay className="w-3.5 h-3.5 fill-current" />
              </button>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3.5 h-full">
          {rightColumnTests.map((test, index) => (
            <div key={`right-${index}`} className="flex items-center justify-between bg-slate-50 hover:bg-slate-100/70 transition-all px-5 py-4 rounded-xl group">
              <div className="flex items-center">
                <span className="text-sm font-bold text-slate-400 w-10 group-hover:text-slate-600 transition-colors">{test.id}</span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">{test.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{test.type}</p>
                </div>
              </div>
              <button className="text-slate-400 hover:text-slate-600 transition-all p-1.5 rounded-lg bg-transparent hover:bg-white hover:shadow-sm">
                <FiPlay className="w-3.5 h-3.5 fill-current" />
              </button>
            </div>
          ))}

          {/* Load More Button */}
          <button className="self-start flex items-center gap-2 bg-white border border-slate-200 text-slate-500 font-semibold text-xs px-4 py-2.5 rounded-lg hover:bg-slate-50 transition-colors mt-1 shadow-sm">
            Load More Tests
            <FiChevronRight className="w-3.5 h-3.5" />
          </button>

          {/* Purple Upgrade Banner */}
          <div className="relative overflow-hidden mt-auto bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-center flex flex-col items-center gap-4 text-white shadow-md">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none" />
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-md z-10">
              <FiZap className="w-5 h-5 fill-current" />
            </div>
            <h2 className="text-xl font-bold max-w-[180px] leading-snug z-10">Unlock AI Feedback</h2>
            <button className="w-full max-w-[240px] bg-purple-50 text-purple-700 text-sm font-bold py-3 rounded-xl hover:bg-white transition-all shadow-sm z-10">
              Upgrade Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}