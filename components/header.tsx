import { Github, ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <div className="p-10 pb-10 bg-zinc-100">
      <h1 className="mb-5 text-4xl font-bold">llms.txt directory</h1>
      <p className="mb-5 text-lg">A list if all the llms.txt files location.</p>
      <p className="mb-5 text-lg">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4" /> GitHub Repository{" "}
          <ArrowRight className="w-4 h-4" />
        </a>
      </p>
    </div>
  );
}
