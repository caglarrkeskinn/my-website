import '@/app/globals.css'; 
import PdfUploader from '@/components/sub/PdfUploader';

export default function Converter() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-5">
            <PdfUploader />
        </div>
    );
}
