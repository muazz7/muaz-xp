import type { ReactNode } from 'react';

export type SystemState = 'BOOT' | 'LOGIN' | 'DESKTOP' | 'SHUTDOWN';

export interface WindowState {
    id: string;
    title: string;
    icon: any; // Using any for now, will replace with Lucide icon type or string
    component: ReactNode;
    isOpen: boolean;
    isMinimized: boolean;
    isMaximized: boolean;
    zIndex: number;
    position?: { x: number; y: number };
    size?: { width: number; height: number };
}

export interface OSContextType {
    systemState: SystemState;
    setSystemState: (state: SystemState) => void;
    windows: WindowState[];
    openWindow: (id: string) => void;
    closeWindow: (id: string) => void;
    minimizeWindow: (id: string) => void;
    maximizeWindow: (id: string) => void;
    focusWindow: (id: string) => void;
    activeWindowId: string | null;
    addWindow: (window: WindowState) => void;
}
