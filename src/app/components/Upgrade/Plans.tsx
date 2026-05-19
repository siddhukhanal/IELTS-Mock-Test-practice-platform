import React, { useState } from 'react';

export default function PricingToggle() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3 p-4 font-sans bg-[#f7f8fa]">

      <h3 className="text-2xl font-bold text-gray-800 tracking-tight">
        Pricing Plans
      </h3>


      <button
        type="button"
        onClick={() => setIsAnnual(!isAnnual)}
        className="relative inline-flex h-10 w-20 flex-shrink-0 cursor-pointer rounded-full bg-[#e5e5e7] px-6 p-1 transition-colors duration-200 ease-in-out focus:outline-none border border-gray-300/40"
        aria-pressed={isAnnual}
      >
        <span className="sr-only">Toggle pricing plan</span>
        
  
        <span
          className={`
            pointer-events-none inline-block h-7 w-7 transform rounded-full bg-[#5d83ff] shadow-sm transition duration-200 ease-in-out
            ${isAnnual ? 'translate-x-10' : 'translate-x-0'}
          `}
        />
      </button>
    </div>
  );
}
