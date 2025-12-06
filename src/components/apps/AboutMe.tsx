import React from 'react';
import { Instagram, Twitter } from 'lucide-react';
import profileImg from '../../assets/profile.jpg';

const AboutMe: React.FC = () => {
    return (
        <div className="flex h-full bg-white">
            {/* Sidebar */}
            <div className="w-48 bg-[#E3EFFF] border-r border-[#A0C3EE] p-4 flex flex-col gap-4">
                <div className="bg-white p-2 border border-[#A0C3EE] rounded">
                    <img
                        src={profileImg}
                        alt="Muaz"
                        className="w-full h-auto rounded border-2 border-gray-200 inset-0"
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-[#003399] border-b border-[#A0C3EE] pb-1">Social Links</h3>
                    <a
                        href="https://www.instagram.com/muazzzzzz7?igsh=MWxqaGtnZTZueHMxbg%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
                    >
                        <Instagram size={16} />
                        Instagram
                    </a>
                    <a
                        href="https://x.com/mdmuaz23?s=21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
                    >
                        <Twitter size={16} />
                        X (Twitter)
                    </a>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-auto">
                <h1 className="text-2xl font-bold text-[#003399] mb-4">About Me</h1>
                <p className="text-gray-800 leading-relaxed mb-4">
                    This is muaz. Welcome to my web :p
                </p>
                <p className="text-gray-800 leading-relaxed">
                    I am a software engineering undergrad at Daffodil International University. I love building fun stuff and explore new techy things. This website is a piece of my work to bring back the nostalgia of Windows XP.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
