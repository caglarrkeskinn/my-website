"use client";
import { useState } from 'react';

export default function Appointment() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        date: '',
        time: '',
        message: ''
    });

    const [popup, setPopup] = useState({
        visible: false,
        content: '',
        header: ''
    });

    const handleInputChange = (e: { target: { id: any; value: any; }; }) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleFormSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setPopup({
                    visible: true,
                    content: `Appointment successfully scheduled on ${formData.date} at ${formData.time}.`,
                    header: 'Appointment Scheduled'
                });
                console.log('Appointment created successfully');
            } else {
                let errorMessage = 'Failed to schedule appointment. Please try again later.';
                if (response.status >= 500) {
                    errorMessage = 'Server error. Please try again later.';
                }
                setPopup({
                    visible: true,
                    content: errorMessage,
                    header: 'Appointment NOT Scheduled!'
                });
                console.error('Error creating appointment', response.status);
            }
        } catch (error : any) {
            if (error.message.includes('Failed to fetch')) {
                setPopup({
                    visible: true,
                    content: 'Server Connection Error. Please try again later.',
                    header: 'Appointment NOT Scheduled!'
                });
            } else {
                setPopup({
                    visible: true,
                    content: 'Error while scheduling appointment. Please try again later.',
                    header: 'Appointment NOT Scheduled!'
                });
                console.error('Error creating appointment:', error);
            }
        }
    };

    const closePopup = () => {
        setPopup({ visible: false, content: '', header: '' });
    };

    return (
        <div className="relative w-full max-w-lg bg-white p-6 rounded-lg shadow-md z-[20]">
            <form id="appointmentForm" onSubmit={handleFormSubmit}>
                <h2 className="text-2xl font-bold mb-4">Schedule an Appointment</h2>
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mb-2 p-2 border border-gray-300 rounded w-full"
                />
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mb-2 p-2 border border-gray-300 rounded w-full"
                />
                <input
                    type="text"
                    id="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="mb-2 p-2 border border-gray-300 rounded w-full"
                />
                <input
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="mb-2 p-2 border border-gray-300 rounded w-full"
                />
                <input
                    type="time"
                    id="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="mb-2 p-2 border border-gray-300 rounded w-full"
                />
                <textarea
                    id="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mb-2 p-2 border border-gray-300 rounded w-full"
                ></textarea>
                <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded w-full"
                >
                    Submit
                </button>
            </form>
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
