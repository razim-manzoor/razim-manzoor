import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-background">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />

            <div className="glass-card p-12 rounded-3xl border border-white/10 max-w-lg w-full">
                <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-primary mb-4">
                    404
                </h1>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Page Not Found</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                    The page you are looking for doesn't exist or has been moved.
                    Let's get you back to the strategic path.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-all font-medium"
                >
                    <ArrowLeft size={18} />
                    Return Home
                </Link>
            </div>
        </main>
    );
}
