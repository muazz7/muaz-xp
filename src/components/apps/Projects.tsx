import React, { useState } from 'react';
import { Folder, Info, X } from 'lucide-react';

interface Project {
    id: string;
    title: string;
    url: string | null; // null means "Coming Soon"
}

const Projects: React.FC = () => {
    const [comingSoonTarget, setComingSoonTarget] = useState<string | null>(null);

    const projects: Project[] = [
        { id: 'muaz-wrapper', title: "Muaz's Wrapper", url: 'https://muaz-ai.vercel.app/' },
        { id: 'leviro', title: 'Leviro (E-Com)', url: 'https://leviro.vercel.app/' },
        { id: 'research-tech', title: 'Research Tech', url: 'https://researchtech.vercel.app/' },
        { id: 'imtiaz-portfolio', title: "Imtiaz's Portfolio", url: 'https://imtiazz.vercel.app/' },
        { id: 'ludo-moodo', title: 'Ludo (Moodo)', url: 'https://moodo.vercel.app/' },
        { id: 'khan-filling', title: 'Khan Filling Station', url: 'https://khanfillingstation.vercel.app/' },
        { id: 'bcss', title: 'BCSS', url: null },
        { id: 'diu-connect', title: 'DIU Connect', url: null },
    ];

    const handleDoubleClick = (project: Project) => {
        if (project.url) {
            window.open(project.url, '_blank', 'noopener,noreferrer');
        } else {
            setComingSoonTarget(project.title);
        }
    };

    return (
        <div className="h-full bg-white p-4 relative">
            {/* Explorer Menu Bar */}
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200 text-sm text-gray-500">
                <span>File</span>
                <span>Edit</span>
                <span>View</span>
                <span>Favorites</span>
                <span>Tools</span>
                <span>Help</span>
            </div>

            {/* Address Bar */}
            <div className="flex items-center gap-2 mb-4 text-sm">
                <span className="text-gray-500">Address</span>
                <div className="flex-1 border border-gray-300 px-2 py-0.5 bg-white flex items-center gap-1">
                    <Folder size={14} className="text-yellow-500" />
                    <span>C:\Documents and Settings\MUAZ\My Documents\Projects</span>
                </div>
            </div>

            {/* Project Folders Grid */}
            <div className="grid grid-cols-4 gap-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="flex flex-col items-center gap-1 group cursor-pointer p-2 hover:bg-blue-50 border border-transparent hover:border-blue-200 rounded select-none"
                        onDoubleClick={() => handleDoubleClick(project)}
                    >
                        <Folder className="w-16 h-16 text-yellow-400 fill-yellow-100 drop-shadow-sm" />
                        <span className="text-xs text-center group-hover:text-blue-600">{project.title}</span>
                    </div>
                ))}
            </div>

            {/* Windows XP "Coming Soon" Dialog */}
            {comingSoonTarget && (
                <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/20">
                    <div className="w-[340px] bg-[#ECE9D8] rounded-t-lg shadow-2xl border border-[#0055EA] overflow-hidden">
                        {/* Dialog Title Bar */}
                        <div className="h-7 flex items-center justify-between px-2 bg-gradient-to-b from-[#0058EE] via-[#3593FF] to-[#288EFF] select-none">
                            <span className="text-white text-xs font-bold drop-shadow-md">{comingSoonTarget}</span>
                            <button
                                onClick={() => setComingSoonTarget(null)}
                                className="w-5 h-5 flex items-center justify-center bg-[#E81123] hover:bg-[#F44B56] rounded-[3px] border border-white/30 active:bg-[#BF0E1D] transition-colors"
                            >
                                <X size={10} className="text-white" />
                            </button>
                        </div>

                        {/* Dialog Body */}
                        <div className="p-5 flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#316AC5] flex items-center justify-center">
                                <Info size={22} className="text-white" />
                            </div>
                            <div className="flex flex-col gap-1 pt-1">
                                <span className="text-sm font-bold text-gray-800">Coming Soon</span>
                                <span className="text-xs text-gray-600">
                                    This project is currently under development and will be available soon.
                                </span>
                            </div>
                        </div>

                        {/* Dialog Footer */}
                        <div className="px-5 pb-4 flex justify-center">
                            <button
                                onClick={() => setComingSoonTarget(null)}
                                className="px-8 py-1 bg-[#ECE9D8] border border-gray-400 rounded-sm text-sm font-medium hover:bg-[#D4D0C8] active:bg-[#C0BCB0] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#316AC5]"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
