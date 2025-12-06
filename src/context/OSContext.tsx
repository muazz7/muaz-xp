import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { SystemState, WindowState, OSContextType } from '../types';

const OSContext = createContext<OSContextType | undefined>(undefined);

export const useOS = () => {
    const context = useContext(OSContext);
    if (!context) {
        throw new Error('useOS must be used within an OSProvider');
    }
    return context;
};

export const OSProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [systemState, setSystemState] = useState<SystemState>('BOOT');
    const [windows, setWindows] = useState<WindowState[]>([]);
    const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
    const [nextZIndex, setNextZIndex] = useState(1);

    const openWindow = (id: string) => {
        // Logic to open window will be implemented when we have the registry of windows
        // For now, just a placeholder or we can pass the full window object
        console.log('Open window', id);
    };

    const closeWindow = (id: string) => {
        setWindows((prev) => prev.filter((w) => w.id !== id));
    };

    const minimizeWindow = (id: string) => {
        setWindows((prev) =>
            prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w))
        );
    };

    const maximizeWindow = (id: string) => {
        setWindows((prev) =>
            prev.map((w) => (w.id === id ? { ...w, isMaximized: !w.isMaximized } : w))
        );
    };

    const focusWindow = (id: string) => {
        setActiveWindowId(id);
        setWindows((prev) =>
            prev.map((w) =>
                w.id === id ? { ...w, zIndex: nextZIndex, isMinimized: false } : w
            )
        );
        setNextZIndex((prev) => prev + 1);
    };

    // Helper to add a window (will be used by Desktop icons)
    const addWindow = (window: WindowState) => {
        if (windows.find((w) => w.id === window.id)) {
            focusWindow(window.id);
            return;
        }
        setWindows((prev) => [...prev, { ...window, zIndex: nextZIndex, isOpen: true }]);
        setActiveWindowId(window.id);
        setNextZIndex((prev) => prev + 1);
    };

    return (
        <OSContext.Provider
            value={{
                systemState,
                setSystemState,
                windows,
                openWindow: (id) => console.log('Use addWindow instead'), // Placeholder
                closeWindow,
                minimizeWindow,
                maximizeWindow,
                focusWindow,
                activeWindowId,
                // @ts-ignore - extending the interface locally for now to include addWindow
                addWindow,
            }}
        >
            {children}
        </OSContext.Provider>
    );
};
