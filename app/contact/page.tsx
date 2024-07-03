"use client";
import '@/app/globals.css';
import { useState, useEffect } from 'react';
import Appointment from '@/components/main/Appointment';
import Feedback from '@/components/main/Feedback';

export default function Contact() {
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const [activeTab, setActiveTab] = useState('appointment'); // Default active tab

    useEffect(() => {
        const handleBeforeUnload = (event: { preventDefault: () => void; returnValue: string; }) => {
            setShowFeedbackModal(true);
            event.preventDefault();
            event.returnValue = '';
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-full mt-[65px] ">
            <div className="flex p-4 md:p-24 w-full justify-center">
                <button
                    className={`px-4 py-2 mr-4 text-lg font-semibold rounded focus:outline-none z-[20] ${activeTab === 'appointment' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'}`}
                    onClick={() => setActiveTab('appointment')}
                >
                    Schedule Appointment
                </button>
                <button
                    className={`px-4 py-2 text-lg font-semibold rounded focus:outline-none z-[20] ${activeTab === 'feedback' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'}`}
                    onClick={() => setActiveTab('feedback')}
                >
                    Provide Feedback
                </button>
            </div>
            <div className="flex flex-col items-center w-full min-h-screen">
                {activeTab === 'appointment' && <Appointment />}
                {activeTab === 'feedback' && <Feedback />}
            </div>
        </div>
    );
}
