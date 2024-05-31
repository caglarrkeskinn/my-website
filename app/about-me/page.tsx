import '@/app/globals.css'; 
import Hero from '@/components/main/Hero';


export default function AboutMe() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                <Hero />
            </h1>
        </div>
    );
}