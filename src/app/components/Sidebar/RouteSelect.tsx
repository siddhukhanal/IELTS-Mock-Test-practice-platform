"use client"
import React from 'react';
import { type IconType } from 'react-icons';
import { MdHome, MdTrendingUp, MdExplore, MdChatBubble, MdBookmark } from 'react-icons/md';
import { useNavigate, useLocation } from 'react-router-dom';

const ICON_SIZE = 28;

const RouteSelect = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;
    return (
        <div className="relative group flex flex-col items-center justify-center w-full space-y-3">
            <Route
                selected={isActive("/")}
                onClick={() => navigate("/")}
                Icon={MdHome}
                title="Dashboard" />
            <Route
                selected={isActive("/practice")}
                onClick={() => navigate("/practice")}
                Icon={MdTrendingUp} title="Practice" />
            <Route
                selected={isActive("/results")}
                onClick={() => navigate("/results")}
                Icon={MdExplore}
                title="Results" />
            <Route
                selected={isActive("/upgrade")}
                onClick={() => navigate("/upgrade")}
                Icon={MdChatBubble} title="Upgrade" />
            <Route
                selected={isActive("/contact")}
                onClick={() => navigate("/contact")}
                Icon={MdBookmark}
                title="Contact Us" />
        </div>
    );
};

const Route = ({
    selected,
    Icon,
    title,
    onClick,
}: {
    selected: boolean;
    Icon: IconType;
    title: string;
    onClick?: () => void;
}) => {
    return (
        <div className="relative group flex items-center">
            <button
                onClick={onClick}
                className={`flex items-center justify-center rounded-xl p-2.5 transition-all duration-200"
            
            }`}>

                <Icon size={ICON_SIZE} className={`transition-colors duration-200 ${selected
                        ? "text-primary"
                        : "text-stone-400 group-hover:text-stone-600"
                    }`} />
            </button>


            <span className="absolute left-16 scale-0 transition-all rounded bg-stone-800 px-2 py-1 text-xs text-white group-hover:scale-100 z-50 whitespace-nowrap pointer-events-none shadow-lg">
                {title}
            </span>
            {selected && (
                <div className="absolute -left-2 h-6 w-1 rounded-full bg-primary"></div>)}
        </div>
    );
};

export default RouteSelect;
