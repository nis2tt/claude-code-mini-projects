"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CategoryFilter from "@/components/CategoryFilter";
import HookCard from "@/components/HookCard";
import { hooks } from "@/data/hooks";
import { HookCategory } from "@/lib/types";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<HookCategory | "All">("All");

  const categories: HookCategory[] = [
    "Notifications",
    "Formatting",
    "Logging",
    "Security",
    "AI Enhancement",
    "Multi-Agent",
    "Workflow"
  ];

  const filteredHooks = selectedCategory === "All"
    ? hooks
    : hooks.filter(hook => hook.category === selectedCategory);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Header />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredHooks.map((hook) => (
            <HookCard key={hook.id} hook={hook} />
          ))}
        </div>
      </div>
    </div>
  );
}
