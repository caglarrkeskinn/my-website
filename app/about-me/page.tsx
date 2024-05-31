import '@/app/globals.css'; 
import Hero from '@/components/main/Hero';
import Link from 'next/link';
import { FaDownload, FaFilePdf, FaLink } from 'react-icons/fa';

export default function AboutMe() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
            <div className="w-full">
                <Hero />
            </div>
            <Link href="/CaglarKeskinCV.pdf" className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 decoration-sky-500 underline hover:underline-offset-[12px] mt-8" target='_blank'>
                View My CV
            </Link>
        </div>
    );
}
