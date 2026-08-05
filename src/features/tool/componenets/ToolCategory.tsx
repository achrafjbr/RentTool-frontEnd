import { Tag } from "lucide-react";
import Divider from "../../../components/common/Divider";

export type ToolCategoryType = {
  selected: string;
  categories: string[];
  hanldeSelectCategory: (category: string) => void;
};
export default function ToolCategory({
  selected,
  categories,
  hanldeSelectCategory,
}: ToolCategoryType) {
  return (
    <div>
      <div className="flex items-center gap-2  ">
        <Tag className="text-gray-300" size={20} />
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Catégories
        </p>
      </div>
      <Divider padding="sm:pt-3 pt-1.5" />

      <div className="flex flex-wrap justify-start items-center gap-2.5">
        {categories.map((category) => (
          <div
            onClick={() => hanldeSelectCategory(category)}
            key={category}
            className={`rounded-lg shadow-none
         p-2 text-xs cursor-pointer ${selected !== category ? "hover:bg-gray-300 hover:border-gray-500" : ""}
          text-center ${selected == category ? " bg-blue-600 text-white " : " bg-gray-200 text-gray-600 "} `}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}
