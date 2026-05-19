"use client"
import React from 'react';

const testCategories = [
    {
        title: "$0.00",
        plan: "Starter",
        description: "Practice your reading comprehension with academic texts.",
        color: "bg-white",
    },
    {
        title: "$29.99",
        plan: "Pro",
        description: "Improve your essay structure and task response skills.",
        color: "bg-white",
    },

    {
        title: "$49.99",
        plan: "Premium",
        description: "Test your ability to understand diverse English accents.",
        color: "bg-white", 
    }
];

const PricingCard = () => {
    return (
        <div className="w-full p-8 rounded-lg flex items-center justify-center min-h-[80vh]">
            


            <div className="w-full max-w-full grid grid-cols-2 gap-4 md:gap-8 justify-center mx-auto">
                {testCategories.map((test, index) => (
                    <div 
                        key={index} 
                        className={`${test.color} w-full rounded-xl p-6 text-stone-500  relative overflow-hidden flex flex-col justify-between min-h-[280px] group transition-transform hover:scale-[1.02] cursor-pointer`}
                    >
                     
                        
                        <div>
                            <p className="text-lg opacity-90 font-bold mb-1 text-center">{test.plan}</p>
                            <h2 className="text-4xl font-extrabold mb-4 text-primary text-center">{test.title}</h2>
                            <p className="text-sm opacity-80 leading-relaxed text-center">
                                {test.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-6 items-center justify-center">
                            <button className=" max-w-[200px] border border-[#635bff] text-[#635bff] bg-white rounded-full px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-[#635bff] hover:text-white transition-all">
                              Get Started
                            </button>
                            
                            {/* <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                                <MdArrowForward size={24} />
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingCard;