import React from 'react';
import { User, LogOut } from 'lucide-react';
import { useOS } from '../context/OSContext';

const StartMenu: React.FC = () => {
    const { setSystemState } = useOS();

    return (
        <div className="absolute bottom-10 left-0 w-80 bg-white rounded-t-lg shadow-2xl border-2 border-[#0058EE] overflow-hidden z-50 origin-bottom-left animate-in fade-in slide-in-from-bottom-5 duration-200">
            {/* Header */}
            <div className="h-16 bg-gradient-to-b from-[#0058EE] to-[#3593FF] flex items-center px-4 gap-3 border-b-2 border-orange-400">
                <div className="w-10 h-10 bg-white rounded border-2 border-white overflow-hidden flex items-center justify-center">
                    <User className="text-blue-600 w-8 h-8" />
                </div>
                <span className="text-white font-bold text-lg shadow-black drop-shadow-md">MUAZ</span>
            </div>

            {/* Body */}
            <div className="flex h-96">
                {/* Left Column */}
                <div className="w-1/2 bg-white p-2 flex flex-col gap-1">
                    <div className="p-2 hover:bg-[#3593FF] hover:text-white rounded cursor-pointer flex items-center gap-2 group">
                        <div className="font-bold text-sm">Internet</div>
                        <span className="text-gray-500 text-xs group-hover:text-blue-100">Internet Explorer</span>
                    </div>
                    <div className="p-2 hover:bg-[#3593FF] hover:text-white rounded cursor-pointer flex items-center gap-2 group">
                        <div className="font-bold text-sm">E-mail</div>
                        <span className="text-gray-500 text-xs group-hover:text-blue-100">Outlook Express</span>
                    </div>
                    <div className="my-1 border-b border-gray-200"></div>
                    {/* Add more items as needed */}
                </div>

                {/* Right Column */}
                <div className="w-1/2 bg-[#D3E5FA] p-2 flex flex-col gap-1 border-l border-white">
                    <div className="p-1 hover:bg-[#3593FF] hover:text-white rounded cursor-pointer flex items-center gap-2">
                        <span className="text-sm font-bold text-[#003399] hover:text-white">My Documents</span>
                    </div>
                    <div className="p-1 hover:bg-[#3593FF] hover:text-white rounded cursor-pointer flex items-center gap-2">
                        <span className="text-sm font-bold text-[#003399] hover:text-white">My Recent Documents</span>
                    </div>
                    <div className="p-1 hover:bg-[#3593FF] hover:text-white rounded cursor-pointer flex items-center gap-2">
                        <span className="text-sm font-bold text-[#003399] hover:text-white">My Pictures</span>
                    </div>
                    <div className="p-1 hover:bg-[#3593FF] hover:text-white rounded cursor-pointer flex items-center gap-2">
                        <span className="text-sm font-bold text-[#003399] hover:text-white">My Music</span>
                    </div>
                    <div className="my-1 border-b border-[#A0C3EE]"></div>
                    <div className="p-1 hover:bg-[#3593FF] hover:text-white rounded cursor-pointer flex items-center gap-2">
                        <span className="text-sm text-[#003399] hover:text-white">Control Panel</span>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="h-10 bg-gradient-to-b from-[#3593FF] to-[#0058EE] flex items-center justify-end px-4 gap-4 border-t-2 border-orange-400">
                <button
                    onClick={() => setSystemState('SHUTDOWN')}
                    className="flex items-center gap-2 text-white hover:text-gray-200 text-sm"
                >
                    <LogOut size={16} />
                    <span>Turn Off Computer</span>
                </button>
            </div>
        </div>
    );
};

export default StartMenu;
