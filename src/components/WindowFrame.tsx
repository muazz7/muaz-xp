import React, { useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { useOS } from '../context/OSContext';
import { X, Minus, Square } from 'lucide-react';
import type { WindowState } from '../types';

interface WindowFrameProps {
    window: WindowState;
}

const WindowFrame: React.FC<WindowFrameProps> = ({ window }) => {
    const { closeWindow, minimizeWindow, maximizeWindow, focusWindow, activeWindowId } = useOS();
    const dragControls = useDragControls();
    const constraintsRef = useRef(null);

    const isActive = activeWindowId === window.id;

    if (window.isMinimized) return null;

    return (
        <motion.div
            drag
            dragControls={dragControls}
            dragListener={false}
            dragMomentum={false}
            initial={window.position}
            animate={{
                x: window.isMaximized ? 0 : window.position.x,
                y: window.isMaximized ? 0 : window.position.y,
                width: window.isMaximized ? '100%' : window.size.width,
                height: window.isMaximized ? '100%' : window.size.height,
                zIndex: window.zIndex
            }}
            onDragEnd={(_, info) => {
                if (!window.isMaximized) {
                    // Update position in context if needed (omitted for simplicity in this prototype)
                }
            }}
            className={`absolute flex flex-col bg-[#ECE9D8] rounded-t-lg shadow-xl overflow-hidden border border-[#0055EA] ${isActive ? 'ring-1 ring-[#0055EA]/50' : ''
                }`}
            style={{
                position: 'absolute',
                touchAction: 'none' // Critical for touch dragging
            }}
            onClick={() => focusWindow(window.id)}
        >
            {/* Title Bar */}
            <div
                className={`h-8 flex items-center justify-between px-2 select-none cursor-default ${isActive
                    ? 'bg-gradient-to-b from-[#0058EE] via-[#3593FF] to-[#288EFF]'
                    : 'bg-gradient-to-b from-[#7697BB] via-[#A0BBD7] to-[#8CA3C3]'
                    }`}
                onPointerDown={(e) => {
                    focusWindow(window.id);
                    dragControls.start(e);
                }}
                onDoubleClick={() => maximizeWindow(window.id)}
            >
                <div className="flex items-center gap-2">
                    {/* Icon placeholder */}
                    <div className="w-4 h-4 bg-white/20 rounded-sm" />
                    <span className="text-white font-bold text-lg drop-shadow-md truncate max-w-[200px]">
                        {window.title}
                    </span>
                </div>

                <div className="flex items-center gap-1">
                    <button
                        onClick={(e) => { e.stopPropagation(); minimizeWindow(window.id); }}
                        className="w-5 h-5 flex items-center justify-center bg-[#288EFF] hover:bg-[#4C9EFF] rounded-[3px] border border-white/30 active:bg-[#1C68BD] transition-colors group"
                    >
                        <Minus size={12} className="text-white group-active:translate-y-[1px]" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); maximizeWindow(window.id); }}
                        className="w-5 h-5 flex items-center justify-center bg-[#288EFF] hover:bg-[#4C9EFF] rounded-[3px] border border-white/30 active:bg-[#1C68BD] transition-colors group"
                    >
                        <Square size={10} className="text-white group-active:translate-y-[1px]" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); closeWindow(window.id); }}
                        className="w-5 h-5 flex items-center justify-center bg-[#E81123] hover:bg-[#F44B56] rounded-[3px] border border-white/30 active:bg-[#BF0E1D] transition-colors group"
                    >
                        <X size={12} className="text-white group-active:translate-y-[1px]" />
                    </button>
                </div>
            </div>

            {/* Menu Bar (Placeholder) */}
            <div className="bg-[#ECE9D8] border-b border-[#D4D0C8] px-2 py-1 flex gap-4 text-sm text-black cursor-default">
                <span className="hover:bg-[#316AC5] hover:text-white px-1">File</span>
                <span className="hover:bg-[#316AC5] hover:text-white px-1">Edit</span>
                <span className="hover:bg-[#316AC5] hover:text-white px-1">View</span>
                <span className="hover:bg-[#316AC5] hover:text-white px-1">Help</span>
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-white relative overflow-hidden">
                {window.component}
            </div>

            {/* Resize Handle (Bottom Right) */}
            <div className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize z-50" />
        </motion.div>
    );
};

export default WindowFrame;
