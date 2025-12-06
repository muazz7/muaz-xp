import React from 'react';
import { Folder, FileCode } from 'lucide-react';

const Projects: React.FC = () => {
    const projects = [
        { id: 'bccs', title: 'BCCS', type: 'folder' },
        { id: 'diu', title: 'DIU Connect', type: 'folder' },
    ];

    return (
        <div className="h-full bg-white p-4">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200 text-sm text-gray-500">
                <span>File</span>
                <span>Edit</span>
                <span>View</span>
                <span>Favorites</span>
                <span>Tools</span>
                <span>Help</span>
            </div>

            <div className="flex items-center gap-2 mb-4 text-sm">
                <span className="text-gray-500">Address</span>
                <div className="flex-1 border border-gray-300 px-2 py-0.5 bg-white flex items-center gap-1">
                    <Folder size={14} className="text-yellow-500" />
                    <span>C:\Documents and Settings\MUAZ\My Documents\Projects</span>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="flex flex-col items-center gap-1 group cursor-pointer p-2 hover:bg-blue-50 border border-transparent hover:border-blue-200 rounded">
                        <Folder className="w-16 h-16 text-yellow-400 fill-yellow-100 drop-shadow-sm" />
                        <span className="text-xs text-center group-hover:text-blue-600">{project.title}</span>
                    </div>
                ))}

                {/* Example File */}
                <div className="flex flex-col items-center gap-1 group cursor-pointer p-2 hover:bg-blue-50 border border-transparent hover:border-blue-200 rounded">
                    <FileCode className="w-14 h-14 text-blue-400 drop-shadow-sm" />
                    <span className="text-xs text-center group-hover:text-blue-600">readme.txt</span>
                </div>
            </div>
        </div>
    );
};

export default Projects;
