import React from 'react';
import { User, LogOut } from 'lucide-react';
import { useOS } from '../context/OSContext';
import AboutMe from './apps/AboutMe';
import Projects from './apps/Projects';
import Resume from './apps/Resume';
import ContactMe from './apps/ContactMe';

interface StartMenuProps {
    onClose: () => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ onClose }) => {
    const { setSystemState, addWindow, windows } = useOS();



    // Better approach: The user said "using the existing openWindow function". 
    // But that function is local to Desktop.tsx. 
    // I will implement a helper here that does the same thing using `addWindow` from context.

    const openApp = (id: string, title: string, component: React.ReactNode) => {
        const isMobile = window.innerWidth < 768;
        const defaultSize = isMobile
            ? { width: window.innerWidth * 0.9, height: window.innerHeight * 0.75 }
            : { width: 600, height: 450 };

        const defaultPosition = isMobile
            ? { x: 0, y: 10 }
            : { x: 100 + (windows.length * 20), y: 100 + (windows.length * 20) };

        addWindow({
            id,
            title,
            icon: 'folder',
            component,
            isOpen: true,
            isMinimized: false,
            isMaximized: false,
            zIndex: 50,
            position: defaultPosition,
            size: defaultSize
        });
        onClose();
    };

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
                    <div
                        className="p-1 hover:bg-[#3593FF] hover:text-white rounded cursor-pointer flex items-center gap-2"
                        onClick={() => openApp('about', 'About Me', <AboutMe />)}
                    >
                        <span className="text-sm font-bold text-[#003399] hover:text-white">About Me</span>
                    </div>
                    <div
                        className="p-1 hover:bg-[#3593FF] hover:text-white rounded cursor-pointer flex items-center gap-2"
                        onClick={() => openApp('resume', 'My Resume', <Resume />)}
                    >
                        <span className="text-sm font-bold text-[#003399] hover:text-white">My Resume</span>
                    </div>
                    <div
                        className="p-1 hover:bg-[#3593FF] hover:text-white rounded cursor-pointer flex items-center gap-2"
                        onClick={() => openApp('projects', 'Projects', <Projects />)}
                    >
                        <span className="text-sm font-bold text-[#003399] hover:text-white">Projects</span>
                    </div>
                    <div
                        className="p-1 hover:bg-[#3593FF] hover:text-white rounded cursor-pointer flex items-center gap-2"
                        onClick={() => openApp('contact', 'Contact Me', <ContactMe />)}
                    >
                        <span className="text-sm font-bold text-[#003399] hover:text-white">Contact Me</span>
                    </div>
                    <div className="my-1 border-b border-[#A0C3EE]"></div>
                    <div
                        className="p-1 hover:bg-[#3593FF] hover:text-white rounded cursor-pointer flex items-center gap-2"
                        onClick={() => openApp('recycle', 'Recycle Bin', (
                            <div className="h-full flex items-center justify-center bg-white">
                                <span className="text-gray-400 font-serif italic text-xl">Emotions</span>
                            </div>
                        ))}
                    >
                        <span className="text-sm font-bold text-[#003399] hover:text-white">Recycle Bin</span>
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
