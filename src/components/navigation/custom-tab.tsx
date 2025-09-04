/** @format */

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CustomTabs({
  tabList,
  defaultValue,
  tabContent,
  rghtPositionedChild,
  onValueChange,
}: {
  defaultValue: string;
  tabList: { value: string; label: React.ReactNode }[];
  tabContent: { key: string; children: React.ReactNode }[];
  rghtPositionedChild?: React.ReactNode;
  onValueChange?: (value: string) => void;
}) {
  return (
    <div className='w-full'>
      <Tabs
        defaultValue={defaultValue}
        className='w-full'
        onValueChange={onValueChange}>
        <div className='flex flex-row items-center justify-between w-full lg:gap-0 gap-3  overflow-y-auto'>
          <TabsList className='p-2 h-fit flex bg-[#F2F4F7] rounded-full'>
            {tabList.map((tab) => (
              <TabsTrigger
                value={tab.value}
                className='px-5 py-[6px] cursor-pointer rounded-full data-[state=active]:bg-[#198841] data-[state=active]:text-white data-[state=active]:hover:bg-[#198841]'>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {rghtPositionedChild && rghtPositionedChild}
        </div>
        {tabContent.map(
          (
            content: { key: string; children: React.ReactNode },
            index: number
          ) => (
            <TabsContent value={content.key} key={index} className='w-full'>
              {content.children}
            </TabsContent>
          )
        )}
      </Tabs>
    </div>
  );
}
