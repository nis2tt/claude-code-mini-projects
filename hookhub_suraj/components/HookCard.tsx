import { Hook, HookCategory } from "@/lib/types";
import { ExternalLink, Github } from "lucide-react";

interface HookCardProps {
  hook: Hook;
}

const categoryColors: Record<HookCategory, { light: string; dark: string }> = {
  "Notifications": {
    light: "bg-blue-100 text-blue-800",
    dark: "dark:bg-blue-900 dark:text-blue-200"
  },
  "Formatting": {
    light: "bg-purple-100 text-purple-800",
    dark: "dark:bg-purple-900 dark:text-purple-200"
  },
  "Logging": {
    light: "bg-green-100 text-green-800",
    dark: "dark:bg-green-900 dark:text-green-200"
  },
  "Security": {
    light: "bg-red-100 text-red-800",
    dark: "dark:bg-red-900 dark:text-red-200"
  },
  "AI Enhancement": {
    light: "bg-amber-100 text-amber-800",
    dark: "dark:bg-amber-900 dark:text-amber-200"
  },
  "Multi-Agent": {
    light: "bg-cyan-100 text-cyan-800",
    dark: "dark:bg-cyan-900 dark:text-cyan-200"
  },
  "Workflow": {
    light: "bg-pink-100 text-pink-800",
    dark: "dark:bg-pink-900 dark:text-pink-200"
  }
};

export default function HookCard({ hook }: HookCardProps) {
  const categoryColor = categoryColors[hook.category];

  return (
    <a
      href={hook.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 transition-all hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700 group"
    >
      <div className="flex items-start justify-between mb-4">
        <span
          className={`
            px-3 py-1 rounded-full text-xs font-bold uppercase
            ${categoryColor.light} ${categoryColor.dark}
          `}
        >
          {hook.category}
        </span>
        <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" />
      </div>

      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
        {hook.name}
      </h3>

      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
        {hook.description}
      </p>

      <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-500">
        <Github className="w-4 h-4 mr-2" />
        <span>by @{hook.author}</span>
      </div>
    </a>
  );
}
