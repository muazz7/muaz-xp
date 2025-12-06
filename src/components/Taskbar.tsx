import React, { useState, useEffect } from 'react';
import { useOS } from '../context/OSContext';
import StartMenu from './StartMenu';
import { Wifi, Volume2 } from 'lucide-react';

const Taskbar: React.FC = () => {
    const { windows, activeWindowId, focusWindow, minimizeWindow } = useOS();
    const [isStartOpen, setIsStartOpen] = useState(false);
    const [time, setTime] = useState(new Date());
    const startMenuRef = React.useRef<HTMLDivElement>(null);
    const startButtonRef = React.useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (
                isStartOpen &&
                startMenuRef.current &&
                !startMenuRef.current.contains(event.target as Node) &&
                startButtonRef.current &&
                !startButtonRef.current.contains(event.target as Node)
            ) {
                setIsStartOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isStartOpen]);

    return (
        <>
            {isStartOpen && (
                <div ref={startMenuRef} className="absolute bottom-0 left-0 z-50" onClick={(e) => e.stopPropagation()}>
                    <StartMenu onClose={() => setIsStartOpen(false)} />
                </div>
            )}

            <div className="absolute bottom-0 w-full h-8 bg-[#245DDA] flex items-center justify-between z-50 border-t border-[#3E80F3]">
                {/* Start Button */}
                <button
                    ref={startButtonRef}
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsStartOpen(!isStartOpen);
                    }}
                    className={`
            h-full px-2 flex items-center gap-1 rounded-r-xl transition-colors
            ${isStartOpen ? 'bg-[#184223] shadow-inner' : 'bg-gradient-to-b from-[#3C8D4D] to-[#2E6E3A] hover:brightness-110'}
            shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]
          `}
                    style={{
                        boxShadow: isStartOpen ? 'inset 2px 2px 4px rgba(0,0,0,0.5)' : '2px 2px 2px rgba(0,0,0,0.3)'
                    }}
                >
                    <div className="italic font-bold text-white text-lg drop-shadow-md pr-2 pl-1 flex items-center gap-1">
                        <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                            <div className="bg-[#F25022] rounded-tl-sm"></div>
                            <div className="bg-[#7FBA00] rounded-tr-sm"></div>
                            <div className="bg-[#00A4EF] rounded-bl-sm"></div>
                            <div className="bg-[#FFB900] rounded-br-sm"></div>
                        </div>
                        start
                    </div>
                </button>

                {/* Window Tabs */}
                <div className="flex-1 flex items-center px-2 gap-1 overflow-x-auto">
                    {windows.map((window) => (
                        <button
                            key={window.id}
                            onClick={() => {
                                if (activeWindowId === window.id && !window.isMinimized) {
                                    minimizeWindow(window.id);
                                } else {
                                    focusWindow(window.id);
                                }
                            }}
                            className={`
                h-6 px-2 min-w-[150px] max-w-[200px] flex items-center gap-2 rounded-sm text-white text-xs truncate
                ${activeWindowId === window.id && !window.isMinimized
                                    ? 'bg-[#1E52B7] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)]'
                                    : 'bg-[#3C81F3] hover:bg-[#5293FF] shadow-[1px_1px_1px_rgba(0,0,0,0.3)]'}
              `}
                        >
                            <div className="w-3 h-3 bg-white/20 rounded-sm" /> {/* Placeholder icon */}
                            <span className="truncate">{window.title}</span>
                        </button>
                    ))}
                </div>

                {/* System Tray */}
                <div className="h-full bg-[#0B96D7] px-4 flex items-center gap-3 border-l border-[#154888] shadow-[inset_1px_0_2px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center gap-2 text-white/80">
                        <Volume2 size={14} />
                        <Wifi size={14} />
                    </div>
                    <span className="text-white text-xs font-medium">
                        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                </div>
            </div>
        </>
    );
};

export default Taskbar;
