"use client";
import '@/app/globals.css'; 
import LoginPage from '@/components/main/LoginPage';

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Welcome !
            </h1>
                
            <LoginPage />
            
        </div>
    );
}