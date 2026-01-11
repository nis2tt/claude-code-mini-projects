export type HookCategory =
  | "Notifications"
  | "Formatting"
  | "Logging"
  | "Security"
  | "AI Enhancement"
  | "Multi-Agent"
  | "Workflow";

export interface Hook {
  id: string;
  name: string;
  category: HookCategory;
  description: string;
  githubUrl: string;
  author: string;
}
