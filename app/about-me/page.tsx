import '@/app/globals.css'; 
import Hero from '@/components/main/Hero';
import Link from 'next/link';
import { FaDownload, FaFilePdf, FaLink } from 'react-icons/fa';


export default function AboutMe() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl font-bold text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
                <Hero />
                <Link href="/CaglarKeskinCV.pdf" className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 decoration-sky-500 underline underline-offset-[12px]" target='_blank'>
                <FaLink className="inline-block mr-2 text-sky-500 w-7 " />
                    View My CV 
                <FaLink className="inline-block ml-2 text-sky-500 w-7 rotate-90" />
                </Link>
            </h1>
        </div>
    );
}