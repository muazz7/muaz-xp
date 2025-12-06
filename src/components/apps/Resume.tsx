import React from 'react';
import resumeImg from '../../assets/resume.png';

const Resume: React.FC = () => {
    return (
        <div className="h-full bg-[#525659] flex items-center justify-center overflow-auto p-4">
            <div className="bg-white shadow-lg max-w-3xl w-full h-full overflow-y-auto">
                <img
                    src={resumeImg}
                    alt="Resume"
                    className="w-full h-auto block"
                />
            </div>
        </div>
    );
};

export default Resume;
