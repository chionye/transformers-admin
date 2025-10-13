/** @format */

import { Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CollapsibleView } from "@/components/collapsible";
import { CategoryChips } from "@/components/categories/cartegory-chips";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Trash2, Plus, Info } from "lucide-react";
import { icons } from "@/constants/data";
import { Card } from "@/components/ui/card";
import { InnerPageContainer } from "@/components/innerpage-container";
import type { Category } from "@/types";
import { DatePicker } from "@/components/date-picker";
import { useNewChallenge } from "@/hooks/useNewChallenge";

export default function NewChallenge() {
  const {
    categories,
    loading,
    control,
    handleSubmit,
    errors,
    onSubmit,
    handleCategorySelect,
    handleIconSelect,
    selectedCategory,
    selectedIcon,
    fields,
    append,
    remove,
  } = useNewChallenge();
  return (
    <InnerPageContainer title='Back to Challenges' hideTitle>
      <Card className='w-full px-5 shadow'>
        <div className='p-6'>
          <div className='flex items-center justify-between'>
            <h1 className='text-xl font-bold text-gray-900'>
              Create Challenge
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6 mt-6'>
            {/* Category Selection */}
            <div className='space-y-3'>
              <div className='flex items-center gap-2'>
                <Label className='text-sm font-medium text-gray-700'>
                  Select Category
                </Label>
                <Info className='w-4 h-4 text-gray-400' />
              </div>
              <div className='flex flex-wrap gap-2'>
                {(categories as Category[]).map(
                  (category: Category) =>
                    category.name !== "Outcome" && (
                      <button
                        key={category._id}
                        type='button'
                        onClick={() =>
                          handleCategorySelect(category._id, category.name)
                        }
                        className='transition-all'>
                        <CategoryChips
                          type={category.name}
                          showIcon
                          showText
                          icon={selectedIcon}
                          bgColor={
                            selectedCategory === category.name
                              ? category.color.bgColor
                              : "#F3F4F6"
                          }
                          textColor={
                            selectedCategory === category.name
                              ? category.color.colorHex
                              : "#1F2937"
                          }
                          className={cn(
                            "cursor-pointer",
                            selectedCategory === category.name
                              ? "ring-2 ring-offset-2"
                              : ""
                          )}
                        />
                      </button>
                    )
                )}
              </div>
              {errors.category && (
                <p className='text-xs text-red-500'>
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* Challenge Title */}
            <div className='space-y-2'>
              <Label
                htmlFor='title'
                className='text-sm font-medium text-gray-700'>
                Challenge Title
              </Label>
              <Controller
                name='title'
                control={control}
                render={({ field }) => (
                  <>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Title
                    </label>
                    <input
                      {...field}
                      type='text'
                      placeholder='Enter your challenge title'
                      className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
                    />
                  </>
                )}
              />
              {errors.title && (
                <p className='text-xs text-red-500'>{errors.title.message}</p>
              )}
            </div>

            {/* Timeline */}
            <div className='space-y-3'>
              <Label className='text-sm font-medium text-gray-700'>
                Timeline
              </Label>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Controller
                    control={control}
                    name='start'
                    render={({ field }) => (
                      <>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                          Start Date
                        </label>
                        <DatePicker
                          value={
                            field.value ? new Date(field.value) : undefined
                          }
                          onChange={(date) =>
                            field.onChange(date?.toISOString())
                          }
                        />
                      </>
                    )}
                  />
                  {errors.start && (
                    <p className='text-xs text-red-500'>
                      {errors.start.message}
                    </p>
                  )}
                </div>

                <div className='space-y-2'>
                  <Controller
                    control={control}
                    name='end'
                    render={({ field }) => (
                      <>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                          End Date
                        </label>
                        <DatePicker
                          value={
                            field.value ? new Date(field.value) : undefined
                          }
                          onChange={(date) =>
                            field.onChange(date?.toISOString())
                          }
                        />
                      </>
                    )}
                  />
                  {errors.end && (
                    <p className='text-xs text-red-500'>{errors.end.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className='space-y-3'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <Label className='text-sm font-medium text-gray-700'>
                    Checklist
                  </Label>
                  <Info className='w-4 h-4 text-gray-400' />
                </div>
                <Button
                  type='button'
                  variant='ghost'
                  size='sm'
                  onClick={() => append({ task: "" })}
                  className='text-sm'>
                  <Plus className='w-4 h-4 mr-1' />
                  Add
                </Button>
              </div>
              <div className='space-y-2'>
                {fields.map((field, index) => (
                  <div key={field.id} className='flex items-center gap-2'>
                    <Controller
                      name={`checklists.${index}.task`}
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type='text'
                          placeholder='Enter checklist item'
                          className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
                        />
                      )}
                    />
                    <Button
                      type='button'
                      variant='ghost'
                      size='icon'
                      onClick={() => remove(index)}
                      disabled={fields.length <= 2}>
                      <Trash2 className='w-4 h-4 text-gray-500' />
                    </Button>
                  </div>
                ))}
              </div>
              {errors.checklists && (
                <p className='text-xs text-red-500'>
                  {errors.checklists.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div className='space-y-2'>
              <Label
                htmlFor='description'
                className='text-sm font-medium text-gray-700'>
                Challenge Description
              </Label>
              <Controller
                name='description'
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    id='description'
                    placeholder='What do you hope to achieve on challenge?'
                    className='min-h-[120px]'
                  />
                )}
              />
              {errors.description && (
                <p className='text-xs text-red-500'>
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Icon Selection */}
            <CollapsibleView
              title={
                selectedIcon ? (
                  <div className='flex items-center gap-3'>
                    {icons
                      .find((item) => item.title === selectedIcon)
                      ?.icon("#7344AC")}
                    <span className='text-gray-700'>{selectedIcon}</span>
                  </div>
                ) : (
                  <span className='text-gray-600'>Select Icon</span>
                )
              }>
              <div className='flex flex-wrap gap-4'>
                {icons.map((item, index) => (
                  <button
                    key={index}
                    type='button'
                    onClick={() => handleIconSelect(item.title)}
                    className={cn(
                      "w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all hover:scale-110",
                      selectedIcon === item.title
                        ? "ring-2 ring-purple-500 ring-offset-2 bg-purple-100"
                        : ""
                    )}>
                    {item.icon
                      ? item.icon(
                          selectedIcon === item.title ? "#7C3AED" : "#1F2937"
                        )
                      : null}
                  </button>
                ))}
              </div>
              {errors.icon && (
                <p className='text-xs text-red-500 mt-2'>
                  {errors.icon.message}
                </p>
              )}
            </CollapsibleView>

            {/* Make Public Toggle */}
            <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
              <div className='flex items-center gap-2'>
                <Label
                  htmlFor='isPublic'
                  className='text-sm font-medium text-gray-700'>
                  Make your challenge public?
                </Label>
                <Info className='w-4 h-4 text-gray-400' />
              </div>
              <Controller
                control={control}
                name='isPublic'
                render={({ field }) => (
                  <Switch
                    id='isPublic'
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
            </div>

            {/* Submit Button */}
            <div className='flex justify-start gap-3 pt-4 w-fit'>
              <Button
                type='submit'
                disabled={loading}
                className='flex-1 bg-[#198841] text-white hover:bg-[#198841]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center w-fit'>
                {loading ? "Creating..." : "Create Challenge"}
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </InnerPageContainer>
  );
}
