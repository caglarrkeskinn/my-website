"use client";
import React, { useState, ChangeEvent } from 'react';

export default function FileConverter() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);
    const [fileId, setFileId] = useState<string | null>(null);
    const [downloadLink, setDownloadLink] = useState<string | null>(null);
    const [inputFormat, setInputFormat] = useState<string>('pdf');
    const [outputFormat, setOutputFormat] = useState<string>('word');
    const [popup, setPopup] = useState<{ visible: boolean, content: string }>({
        visible: false,
        content: ''
    });

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedFile(file);
            setFileName(file.name);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            setPopup({
                visible: true,
                content: "Please select a file to upload."
            });
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch(`http://localhost:8081/convert/${inputFormat}-to-${outputFormat}`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log(inputFormat, outputFormat, "asjdfhgaslfjhq");
                const fileId = await response.text();
                setFileId(fileId);
                setDownloadLink(`http://localhost:8081/convert/${inputFormat}-to-${outputFormat}/${fileId}`);
            } else {
                setPopup({
                    visible: true,
                    content: "File conversion failed."
                });
                console.error("File conversion failed:", response.status);
            }
        } catch (error : any) {
            console.error("Error uploading file:", error);
            if (error.message === 'Failed to fetch') {
                setPopup({
                    visible: true,
                    content: "Server Connection Error. Please try again later."
                });
            } else {
                setPopup({
                    visible: true,
                    content: "Error uploading file. Please try again later."
                });
            }
        }
    };

    const closePopup = () => {
        setPopup({ visible: false, content: '' });
    };

    return (
        <div className="flex flex-col items-center z-[20]">
            {popup.visible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2">Error</h3>
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
            <select value={inputFormat} onChange={(e) => setInputFormat(e.target.value)} className="mt-2 p-2 rounded border">
                <option value="pdf">PDF</option>
                <option value="docx">Word</option>
                <option value="pptx">PowerPoint</option>
                <option value="xlsx">Excel</option>
            </select>
            <select value={outputFormat} onChange={(e) => setOutputFormat(e.target.value)} className="mt-2 p-2 rounded border">
                <option value="word">Word</option>
                <option value="pdf">PDF</option>
                <option value="pptx">PowerPoint</option>
                <option value="xlsx">Excel</option>
            </select>
            <input type="file" accept="application/*" onChange={handleFileChange} className="mt-2" />
            <button onClick={handleUpload} className="mt-2 p-2 bg-blue-500 text-white rounded">
                Upload and Convert File
            </button>
            {downloadLink && (
                <a href={downloadLink} download={`converted.${outputFormat}`} className="mt-2 p-2 bg-green-500 text-white rounded">
                    Download Converted File
                </a>
            )}
        </div>
    );
}
