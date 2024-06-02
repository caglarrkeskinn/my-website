import '@/app/globals.css'; 
import Hero from '@/components/main/Hero';
import VideoContent from '@/components/sub/VideoContent';
import Link from 'next/link';
import { FaDownload, FaFilePdf, FaLink } from 'react-icons/fa';

export default function AboutMe() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
            {/* <VideoContent /> */}
            <Hero />
            <Link 
                href="/CaglarKeskinCV.pdf" 
                className="inline-block px-4 py-1 mt-8 text-lg md:text-2xl font-bold text-cyan-400 bg-gradient-to-r from-purple-500 to-cyan-500 border-1 border-sky-500 rounded-lg hover:bg-sky-500 hover:border-black hover:text-white transition-colors duration-500 ease-in-out"
                target='_blank'
            >
                My Resume
            </Link>
        </div>
    );
}
