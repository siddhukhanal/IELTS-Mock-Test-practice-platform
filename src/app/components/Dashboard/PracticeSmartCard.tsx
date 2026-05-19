import React from 'react';

const PracticeSmarterCard = () => {
  return (
    <div className="bg-primary p-4 rounded-xl text-white flex flex-col items-center justify-center text-center h-[250px] shadow-sm">
      <div>
        <h4 className="font-bold text-[24px] items-center leading-tight">Practice Smarter.</h4>
        <p className="text-[14.83px] opacity-80 mt-1 leading-relaxed">
          Start a new mock test to get instant feedback.
        </p>
      </div>
      
      <button className="block bg-[#f0f4ff] text-primary w-full py-4 rounded-[8px] text-[16px] font-bold mt-auto transition-all duration-200 
      ease-in-out hover:bg-white hover:shadow-md hover:scale-[1.02] active:scale-95 mb-1">
        Start Test
      </button>
    </div>
  );
};

export default PracticeSmarterCard;