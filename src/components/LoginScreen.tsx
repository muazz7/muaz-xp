import React from 'react';
import { useOS } from '../context/OSContext';
import { ArrowRight, Power } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const LoginScreen: React.FC = () => {
    const { setSystemState } = useOS();

    return (
        <div className="w-full h-screen bg-[#003399] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Top/Bottom Orange Bars */}
            <div className="absolute top-0 w-full h-24 bg-[#003399] border-b-4 border-[#FF6600]" />
            <div className="absolute bottom-0 w-full h-24 bg-[#003399] border-t-4 border-[#FF6600] flex items-center justify-between px-8">
                <button className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors">
                    <div className="bg-red-500 p-1 rounded-sm border border-white">
                        <Power size={20} />
                    </div>
                    <span className="font-tahoma text-lg drop-shadow-md">Turn off computer</span>
                </button>
            </div>

            {/* Center Content */}
            <div className="flex items-center gap-8 z-10">
                {/* Left Side */}
                <div className="text-right border-r border-white/30 pr-8 py-4">
                    <h1 className="text-white text-5xl font-bold font-tahoma drop-shadow-lg mb-2">Windows <span className="text-xl align-top">XP</span></h1>
                    <p className="text-white/80 text-xl font-tahoma">To begin, click your user name</p>
                </div>

                {/* Right Side - User */}
                <div className="pl-4">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-4 cursor-pointer group"
                        onClick={() => setSystemState('DESKTOP')}
                    >
                        <div className="relative">
                            <div className="w-24 h-24 rounded border-4 border-[#FFCC00] overflow-hidden bg-white shadow-lg group-hover:border-[#FFDD33] transition-colors">
                                <img
                                    src={profileImg}
                                    alt="User"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white text-2xl font-tahoma font-bold group-hover:underline drop-shadow-md">MUAZ</span>
                            <span className="text-white/70 text-sm font-tahoma">Software Engineer</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
