/** @format */

import ApiRoutes from "@/services/api/api-routes";
import Query from "@/services/query/query";
import type { Category } from "@/types";
import { Loader2, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export const CategoriesDropdown = ({
  selectedCategory,
  onSelectCategory,
  label = "Category",
  placeholder = "Choose a category...",
}: {
  selectedCategory?: Category | null;
  onSelectCategory: (category: Category) => void;
  label?: string;
  placeholder?: string;
}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const { queryData: categoriesData } = Query({
    id: "categories",
    url: ApiRoutes.FetchCategories,
    method: "GET",
    payload: null,
  });

  useEffect(() => {
    if (categoriesData.data) {
      const categoryList = categoriesData.data.data.category || [];
      console.log(categoriesData.data.data);
      setCategories(categoryList);
    }
  }, [categoriesData.data]);

  const handleSelectCategory = (category: Category) => {
    onSelectCategory(category);
    setShowDropdown(false);
  };

  return (
    <div className='space-y-2'>
      {label && (
        <label className='block text-sm font-medium text-gray-700'>
          {label}
        </label>
      )}

      <div className='relative'>
        <button
          type='button'
          onClick={() => setShowDropdown(!showDropdown)}
          className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all bg-white flex items-center justify-between'>
          <span
            className={
              selectedCategory ? "text-gray-900" : "text-gray-400"
            }>
            {selectedCategory ? selectedCategory.name : placeholder}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform ${
              showDropdown ? "transform rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown */}
        {showDropdown && (
          <div className='absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto'>
            {categoriesData.isLoading ? (
              <div className='p-4 text-center text-gray-500'>
                <Loader2 className='w-5 h-5 animate-spin mx-auto' />
              </div>
            ) : categories.length > 0 ? (
              categories.map((category) => (
                <button
                  key={category._id}
                  type='button'
                  onClick={() => handleSelectCategory(category)}
                  className={`w-full p-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left ${
                    selectedCategory?._id === category._id
                      ? "bg-gray-50"
                      : ""
                  }`}>
                  {category.color && (
                    <div
                      className='w-4 h-4 rounded-full'
                      style={{ backgroundColor: category?.color.color }}
                    />
                  )}
                  <p className='font-medium text-gray-900'>
                    {category.name}
                  </p>
                </button>
              ))
            ) : (
              <div className='p-4 text-center text-gray-500'>
                No categories found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
