import React, { useState } from 'react';
import { Send, Bold, Italic, Underline, Paperclip, Smile } from 'lucide-react';

const ContactMe: React.FC = () => {
    const [formData, setFormData] = useState({
        from: 'Visitor',
        subject: '',
        body: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email Sent:', formData);
        alert('Message sent! (Check console for data)');
        setFormData({ ...formData, subject: '', body: '' });
    };

    return (
        <div className="flex flex-col h-full bg-[#ECE9D8] font-tahoma text-sm">
            {/* Toolbar */}
            <div className="flex items-center gap-2 p-1 border-b border-[#D4D0C8] bg-[#ECE9D8]">
                <button
                    onClick={handleSubmit}
                    className="flex flex-col items-center justify-center px-2 py-1 hover:bg-[#FFEEC2] hover:border-[#E5C365] border border-transparent rounded active:bg-[#FFD47F]"
                >
                    <Send size={24} className="text-gray-600" />
                    <span className="text-xs">Send</span>
                </button>
                <div className="w-px h-8 bg-[#D4D0C8] mx-1" />
                <div className="flex gap-1">
                    <button className="p-1 hover:bg-white border border-transparent hover:border-[#D4D0C8] rounded"><Bold size={16} /></button>
                    <button className="p-1 hover:bg-white border border-transparent hover:border-[#D4D0C8] rounded"><Italic size={16} /></button>
                    <button className="p-1 hover:bg-white border border-transparent hover:border-[#D4D0C8] rounded"><Underline size={16} /></button>
                </div>
            </div>

            {/* Headers */}
            <div className="bg-white p-4 flex flex-col gap-2 border-b border-[#D4D0C8]">
                <div className="flex items-center gap-2">
                    <label className="w-16 text-gray-500 text-right">From:</label>
                    <input
                        type="text"
                        value={formData.from}
                        onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                        className="flex-1 border border-[#D4D0C8] px-2 py-0.5 outline-none focus:border-[#003399]"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <label className="w-16 text-gray-500 text-right">To:</label>
                    <div className="flex-1 border border-[#D4D0C8] px-2 py-0.5 bg-gray-50 text-gray-600">
                        MUAZ &lt;mdmuaz23@gmail.com&gt;
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <label className="w-16 text-gray-500 text-right">Subject:</label>
                    <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="flex-1 border border-[#D4D0C8] px-2 py-0.5 outline-none focus:border-[#003399]"
                    />
                </div>
            </div>

            {/* Formatting Bar */}
            <div className="flex items-center gap-2 px-2 py-1 bg-[#ECE9D8] border-b border-[#D4D0C8]">
                <select className="text-xs border border-[#D4D0C8] px-1">
                    <option>Arial</option>
                    <option>Times New Roman</option>
                    <option>Courier New</option>
                </select>
                <select className="text-xs border border-[#D4D0C8] px-1">
                    <option>10</option>
                    <option>12</option>
                    <option>14</option>
                </select>
                <div className="w-px h-4 bg-[#999] mx-1" />
                <Paperclip size={14} className="text-gray-500" />
                <Smile size={14} className="text-gray-500" />
            </div>

            {/* Body */}
            <textarea
                className="flex-1 p-4 outline-none resize-none font-sans text-base"
                value={formData.body}
                onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                spellCheck={false}
            />
        </div>
    );
};

export default ContactMe;
