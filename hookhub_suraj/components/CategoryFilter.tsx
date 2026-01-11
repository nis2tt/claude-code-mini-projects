import { HookCategory } from "@/lib/types";

interface CategoryFilterProps {
  categories: HookCategory[];
  selectedCategory: HookCategory | "All";
  onSelectCategory: (category: HookCategory | "All") => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  const allCategories = ["All", ...categories] as const;

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {allCategories.map((category) => {
        const isSelected = selectedCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category as HookCategory | "All")}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all
              ${
                isSelected
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "border-2 border-zinc-300 text-zinc-700 hover:border-zinc-400 dark:border-zinc-600 dark:text-zinc-300 dark:hover:border-zinc-500"
              }
            `}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
