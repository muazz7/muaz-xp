import React from 'react';
import { useOS } from '../context/OSContext';

interface DesktopIconProps {
    id: string;
    title: string;
    icon: React.ReactNode;
    onDoubleClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ id, title, icon, onDoubleClick }) => {
    return (
        <div
            className="flex flex-col items-center gap-1 w-20 md:w-32 p-1 md:p-2 cursor-pointer hover:bg-blue-600/30 rounded border border-transparent hover:border-blue-400/50 transition-colors group"
            onDoubleClick={onDoubleClick}
            onTouchEnd={onDoubleClick} // Simple touch support
        >
            <div className="w-12 h-12 md:w-20 md:h-20 drop-shadow-md group-hover:opacity-90 transition-opacity">
                {icon}
            </div>
            <span className="text-white text-xs md:text-base text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] font-medium px-1 rounded bg-transparent group-hover:bg-blue-800/50 leading-tight">
                {title}
            </span>
        </div>
    );
};

export default DesktopIcon;
