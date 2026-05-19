import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import { IconType } from 'react-icons';

const logout = () => {
  return (
        <div className="space-y-1">
            <Route selected={true} Icon={FiLogOut} title="Logout"/>
            
    
          
        </div>
      )
    };
const Route=({
    selected,
    Icon,
    title,
}:{
    selected:boolean;
    Icon:IconType;
    title:string;
})=>{
    return <button className={`flex items-center justtify-start gap-2 w-full rounded px-2 py-1.5
    text-sm transition-[box-shadow,_background-color,_color]
    }`}>
        <Icon className={selected ? "text-":""}/>
        <span>{title}</span>
    </button>
}

export default logout
