"use client";
import { useState } from 'react';

export default function Feedback() {
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [popup, setPopup] = useState({
        visible: false,
        content: '',
        header: ''
    });

    const handleFeedbackSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ feedbackMessage: feedbackMessage }),
            });

            if (response.ok) {
                setPopup({
                    visible: true,
                    content: 'Thank you for your feedback!',
                    header: 'Feedback Submitted'
                });
                console.log('Feedback submitted successfully');
            } else {
                let errorMessage = 'Failed to submit feedback. Please try again later.';
                if (response.status >= 500) {
                    errorMessage = 'Server error. Please try again later.';
                }
                setPopup({
                    visible: true,
                    content: errorMessage,
                    header: 'Feedback NOT Submitted!'
                });
                console.error('Failed to submit feedback', response.status);
            }
        } catch (error : any) {
            if (error.message.includes('Failed to fetch')) {
                setPopup({
                    visible: true,
                    content: 'Server Connection Error. Please try again later.',
                    header: 'Feedback NOT Submitted!'
                });
            } else {
                setPopup({
                    visible: true,
                    content: 'Error while submitting feedback. Please try again later.',
                    header: 'Feedback NOT Submitted!'
                });
                console.error('Error while submitting feedback:', error);
            }
        }
    };

    const closePopup = () => {
        setPopup({ visible: false, content: '', header: '' });
    };

    return (
        <div className="relative w-full max-w-lg bg-white p-6 rounded-lg shadow-md z-[20]">
            <textarea
                id="feedbackMessage"
                placeholder="Why didn't you schedule an appointment?"
                value={feedbackMessage}
                onChange={(e) => setFeedbackMessage(e.target.value)}
                className="mb-2 p-2 border border-gray-300 rounded w-full"
            ></textarea>
            <button
                onClick={handleFeedbackSubmit}
                className="p-2 bg-blue-500 text-white rounded w-full"
            >
                Submit Feedback
            </button>
            {popup.visible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2">{popup.header}</h3>
                        <p>{popup.content}</p>
                        <button
                            onClick={closePopup}
                            className="mt-4 p-2 bg-blue-500 text-white rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
