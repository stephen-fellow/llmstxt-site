import { Github, ArrowRight } from "lucide-react";
export default function Footer() {
    return (
        <footer className="py-5 row-start-3 flex gap-6 flex-wrap">
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://github.com/krish-adi/llmstxt-site"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Github className="w-4 h-4" /> GitHub
                <ArrowRight className="w-4 h-4" />
            </a>
        </footer>
    );
}
