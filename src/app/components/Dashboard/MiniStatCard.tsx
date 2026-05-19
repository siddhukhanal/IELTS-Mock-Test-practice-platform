import React from 'react';
import { IconType } from 'react-icons';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

interface MiniProps {
  title: string;
  score: string | number;
  trend: number;
  isUp: boolean;
  Icon: IconType;
  bgColor: string;
  iconColor: string;

}

const MiniStatCard = ({ title, score, trend, isUp, Icon, bgColor, iconColor }: MiniProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-50 flex flex-col justify-between h-[250px] min-w-[180px] ">

      <div className="flex justify-between items-start">
        <span className="text-stone-500 text-md font-bold">{title}</span>
        <div className={`p-3 rounded-full ${bgColor} ${iconColor} flex items-center justify-center`}>
          <Icon size={20} />
        </div>
      </div>
      

      <div className="space-y-3">
        <h4 className="text-6xl font-bold text-slate-800 tracking-tight">{score}</h4>
        
        <div className="flex items-start gap-2">
          {isUp ? (
            <FiTrendingUp className="text-emerald-400 mt-1" size={16} />
          ) : (
            <FiTrendingDown className="text-rose-400 mt-1" size={16} />
          )}
          
          <div className="flex flex-col leading-tight">
            <span className={`text-sm font-bold ${isUp ? 'text-emerald-400' : 'text-rose-400'}`}>
              {trend}%
            </span>
            <span className="text-stone-400 text-xs font-medium">
              Up from last test
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniStatCard;