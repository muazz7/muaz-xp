import React from 'react';
import { useOS } from '../context/OSContext';
import DesktopIcon from './DesktopIcon';
import WindowFrame from './WindowFrame';
import Taskbar from './Taskbar';
import AboutMe from './apps/AboutMe';
import Projects from './apps/Projects';
import Resume from './apps/Resume';
import ContactMe from './apps/ContactMe';
import { User, FileText, Folder, Mail, Trash2 } from 'lucide-react';
import wallpaper from '../assets/wallpaper.png';

const Desktop: React.FC = () => {
    const { addWindow, windows } = useOS();

    const handleOpenWindow = (id: string, title: string) => {
        let content;
        switch (id) {
            case 'about':
                content = <AboutMe />;
                break;
            case 'projects':
                content = <Projects />;
                break;
            case 'resume':
                content = <Resume />;
                break;
            case 'contact':
                content = <ContactMe />;
                break;
            case 'recycle':
                content = (
                    <div className="h-full flex items-center justify-center bg-white">
                        <span className="text-gray-400 font-serif italic text-xl">Emotions</span>
                    </div>
                );
                break;
            default:
                content = <div className="p-4">Content for {title}</div>;
        }

        const isMobile = window.innerWidth < 768;
        const defaultSize = isMobile
            ? { width: window.innerWidth * 0.9, height: window.innerHeight * 0.75 }
            : { width: 600, height: 450 };

        const defaultPosition = isMobile
            ? { x: 0, y: 10 } // Centered horizontally (handled by flex/grid usually, but here absolute), slightly down
            : { x: 100 + (windows.length * 20), y: 100 + (windows.length * 20) };

        addWindow({
            id,
            title,
            icon: 'folder', // Placeholder
            component: content,
            isOpen: true,
            isMinimized: false,
            isMaximized: false,
            zIndex: 50, // Higher z-index for windows
            position: defaultPosition,
            size: defaultSize
        });
    };

    return (
        <div className="w-full h-full overflow-hidden bg-black relative">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${wallpaper})` }}
            >
                {/* Perspective Text Removed */}

                {/* Desktop Icons Grid - Lower Z-Index */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 md:gap-4 z-0">
                    <DesktopIcon
                        id="about"
                        title="About Me"
                        icon={<User className="w-full h-full text-blue-400 fill-blue-100" />}
                        onDoubleClick={() => handleOpenWindow('about', 'About Me')}
                    />
                    <DesktopIcon
                        id="resume"
                        title="My Resume"
                        icon={<FileText className="w-full h-full text-white fill-gray-100" />}
                        onDoubleClick={() => handleOpenWindow('resume', 'My Resume')}
                    />
                    <DesktopIcon
                        id="projects"
                        title="Projects"
                        icon={<Folder className="w-full h-full text-yellow-400 fill-yellow-100" />}
                        onDoubleClick={() => handleOpenWindow('projects', 'Projects')}
                    />
                    <DesktopIcon
                        id="contact"
                        title="Contact Me"
                        icon={<Mail className="w-full h-full text-blue-300 fill-blue-50" />}
                        onDoubleClick={() => handleOpenWindow('contact', 'Contact Me')}
                    />
                    <DesktopIcon
                        id="recycle"
                        title="Recycle Bin"
                        icon={<Trash2 className="w-full h-full text-gray-300 fill-gray-100" />}
                        onDoubleClick={() => handleOpenWindow('recycle', 'Recycle Bin')}
                    />
                </div>

                {/* Windows Layer - Higher Z-Index */}
                <div className="absolute inset-0 pointer-events-none z-50">
                    {windows.map((window) => (
                        <div key={window.id} className="pointer-events-auto">
                            <WindowFrame window={window} />
                        </div>
                    ))}
                </div>

                {/* Taskbar - Highest Z-Index */}
                <div className="absolute bottom-0 w-full z-[100]">
                    <Taskbar />
                </div>
            </div>
        </div>
    );
};

export default Desktop;
