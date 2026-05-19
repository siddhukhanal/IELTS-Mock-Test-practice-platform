"use client"
import React from 'react';
import { MdArrowForward } from 'react-icons/md';
const testCategories = [
    {
        title: "Reading",
        date: "06/26",
        description: "Practice your reading comprehension with academic texts.",
        color: "bg-[#8280FF]",
    },
    {
        title: "Writing",
        date: "06/26",
        description: "Improve your essay structure and task response skills.",
        color: "bg-[#FEC53D]",
    },
    {
        title: "Speaking",
        date: "06/26",
        description: "Engage in mock interviews and pronunciation drills.",
        color: "bg-[#4AD991]", 
    },
    {
        title: "Listening",
        date: "06/26",
        description: "Test your ability to understand diverse English accents.",
        color: "bg-[#FF9066]", 
    }
];

const IndividualTests = () => {
    return (
        <div className="w-full bg-stone-100 p-4 rounded-lg ">
            


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {testCategories.map((test, index) => (
                    <div 
                        key={index} 
                        className={`${test.color} rounded-xl p-6 text-white shadow-lg relative overflow-hidden flex flex-col justify-between min-h-[280px] group transition-transform hover:scale-[1.02] cursor-pointer`}
                    >
                     
                        
                        <div>
                            <p className="text-sm opacity-90 font-medium mb-1">Last Test Taken {test.date}</p>
                            <h2 className="text-4xl font-extrabold mb-4">{test.title}</h2>
                            <p className="text-sm opacity-80 leading-relaxed max-w-[180px]">
                                {test.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-6">
                            <button className="bg-white text-stone-900 px-6 py-2 rounded-b-sm font-bold text-sm hover:bg-stone-100 transition-colors">
                                Get Started
                            </button>
                            
                            <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                                <MdArrowForward size={24} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IndividualTests;