import React from 'react'
import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi';

const Statcard = () => {
  return <>
    
      
      <Card 
      title="Reading"
      value="7.5"
      pillText="+5.6%"
      trend="up"
      period="Since last test"
      />
      <Card 
      title="Writing"
      value="7"
      pillText="+5.6%"
      trend="up"
      period="Since last test"
      />
      <Card 
      title="Speaking"
      value="6.5"
      pillText="-3.5%"
      trend="down"
      period="Since last test"
      />
      <Card 
      title="Listening"
      value="6"
      pillText="-5.8%"
      trend="down"
      period="Since last test"
      />
     
    </>;
  ;
}
const Card=({
    title,
    value,
    pillText,
    trend,
    period,
}:{
    title:string;
    value:string;
    pillText:string;
    trend:"up"|"down";
    period:string;
}

)=>{
    return <div className="col-span-4 p-4 rounded-xl">
        <div className="flex mb-8 items-start justify between">
            <div>
            <h3 className="text-stone-500 text-sm"
            >{title}</h3>
            <p className="text-3xl font-semibold">{value}</p>

            </div>
        </div>
        <span
        className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded
        ${
        trend==="up"
        ?"bg-green-100 text-green-700"
        :"bg-red-100 text-red-700"
        
        
        }`}
        >
            {trend==="up" ? <FiTrendingUp/>:<FiTrendingDown/>}
            {pillText}
        </span>
        <p className="text-xs text-stone-500">{period}</p>

    </div>
}

export default Statcard
