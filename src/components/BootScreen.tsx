import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useOS } from '../context/OSContext';

const BootScreen: React.FC = () => {
    const { setSystemState } = useOS();

    useEffect(() => {
        const timer = setTimeout(() => {
            setSystemState('LOGIN');
        }, 3000);
        return () => clearTimeout(timer);
    }, [setSystemState]);

    return (
        <div className="w-full h-screen bg-black flex flex-col items-center justify-center text-white">
            <div className="flex flex-col items-center gap-8">
                <div className="flex items-center gap-4">
                    <div className="grid grid-cols-2 gap-1">
                        <div className="w-8 h-8 bg-[#F25022]"></div>
                        <div className="w-8 h-8 bg-[#7FBA00]"></div>
                        <div className="w-8 h-8 bg-[#00A4EF]"></div>
                        <div className="w-8 h-8 bg-[#FFB900]"></div>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tighter">
                        MUAZ <span className="font-light">OS</span>
                    </h1>
                </div>

                <div className="w-64 h-4 border-2 border-gray-600 rounded-sm p-0.5 mt-8">
                    <motion.div
                        className="h-full bg-blue-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                    />
                </div>

                <p className="text-gray-500 text-sm mt-4">Copyright © 1985-2001 Microsoft Corporation</p>
            </div>
        </div>
    );
};

export default BootScreen;
