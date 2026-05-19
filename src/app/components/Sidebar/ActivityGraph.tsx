"use client";

import React from 'react';
import { 
  CartesianGrid, 
  Line, 
  LineChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis,
  Legend 
} from 'recharts';
import { FiUser } from 'react-icons/fi';

const data = [
  { name: 'Oct 10', Reading: 7.5, writing: 7.5, Speaking: 8, Listening: 5.5 },
  { name: 'Oct 11', Reading: 7, writing: 6.5, Speaking: 5.5, Listening: 9 },
  { name: 'Oct 12', Reading: 6, writing: 5.5, Speaking: 5, Listening: 6.5 },
  { name: 'Oct 13', Reading: 6.5, writing: 5, Speaking: 5, Listening: 8.5 },
  { name: 'Oct 14', Reading: 8, writing: 6, Speaking: 6, Listening: 8 },
  { name: 'Oct 15', Reading: 6.5, writing: 6.5, Speaking: 7.5, Listening: 5.5 },
  { name: 'Oct 16', Reading: 7, writing: 6.5, Speaking: 6.5, Listening: 5.5 },
  { name: 'Oct 17', Reading: 6.5, writing: 5.5, Speaking: 5.5, Listening: 4 },
  { name: 'Oct 18', Reading: 5, writing: 7.5, Speaking: 6, Listening: 8 },
  { name: 'Oct 19', Reading: 8, writing: 6.5, Speaking: 8, Listening: 7.5 },
  { name: 'Oct 20', Reading: 7.5, writing: 6, Speaking: 7.5, Listening: 5.5 },
  { name: 'Oct 21', Reading: 6.5, writing: 7, Speaking: 6, Listening: 5 },
  { name: 'Oct 22', Reading: 5.5, writing: 7.5, Speaking: 6.5, Listening: 6.5 },
];

const ActivityGraph = () => {
  return (
    <div className="col-span-12 overflow-hidden rounded border border-stone-300 bg-white">
      <div className="flex items-center justify-between p-4 border-b border-stone-100">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiUser /> Performance Trend
        </h3>
        <button className="text-sm text-primary hover:underline">October</button>
        
      </div>

      <div className="h-120 w-full p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={true} 
              tickLine={true} 
              tick={{ fill: '#78716c', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              domain={[6, 9]} 
              axisLine={true} 
              tickLine={true} 
              tick={{ fill: '#78716c', fontSize: 12 }} 
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Legend verticalAlign="top" height={36} iconType="circle" />
            
            {/* Individually styled lines for each metric */}
            <Line type="linear" dataKey="Reading" stroke="#8280FF" strokeWidth={3} dot={true} activeDot={{ r: 6 }} />
            <Line type="linear" dataKey="writing" stroke="#FEC53D" strokeWidth={3} dot={true} activeDot={{ r: 6 }} />
            <Line type="linear" dataKey="Speaking" stroke="#4AD991" strokeWidth={3} dot={true} activeDot={{ r: 6 }} />
            <Line type="linear" dataKey="Listening" stroke="#FF9066" strokeWidth={3} dot={true} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityGraph;