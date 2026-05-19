import React from 'react';

const OverallProgressCard = ({ score }: { score: number }) => {
  // Logic to calculate the "fill" of the semi-circle (max score 9)
    const maxscore=9;
    const percentage=(score/maxscore)*100;
    const radius=40;
    const circumference=2*Math.PI*radius;
    const arcLength=circumference*0.75;
    const strokeDashoffset=arcLength-(percentage/100)*arcLength;

  
  
  return (
    <div className="bg-primary/15  p-4 rounded-xl flex  flex-col items-center justify-center h-[250] relative overflow-hidden">
      <div className="relative flex items-center justify-center w-48 h-48">
        <svg 
          className="w-48 h-48 transform -rotate-[225deg]" 
          viewBox="0 0 100 100"
        >

          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="10"
            strokeDasharray={arcLength}
            strokeLinecap="round"
            className="text-primary/20"
          />
         
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="#51A2FF"
            strokeWidth="10"
            strokeDasharray={arcLength}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
            style={{ strokeDasharray: `${arcLength} ${circumference}` }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-3xl font-bold text-primary leading-none">{score}</span>
          <span className="text-[10px] text-primary font-semibold tracking-wider uppercase">Overall</span>
        </div>
      </div>
    </div>
  );
};

export default OverallProgressCard;