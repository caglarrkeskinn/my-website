import '@/app/globals.css'; 
import Hero from '@/components/main/Hero';
import Link from 'next/link';
import { FaDownload, FaFilePdf, FaLink } from 'react-icons/fa';


export default function AboutMe() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl font-bold text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
                <Hero />
                <Link href="/CaglarKeskinCV.pdf" className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 decoration-sky-500 underline hover:underline-offset-[12px]" target='_blank'>

                    View My CV 

                </Link>
            </h1>
        </div>
    );
}