import '@/app/globals.css'; 
import Hero from '@/components/main/Hero';
import Projects from '@/components/main/Projects';
import VideoContent from '@/components/sub/VideoContent';

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-5">
            <Projects />
        </div>
    );
}
