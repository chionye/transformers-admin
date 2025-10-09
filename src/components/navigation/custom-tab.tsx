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
            {tabList.map((tab, index) => (
              <TabsTrigger
                key={index}
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

export function PageTabs({
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
          <TabsList className='p-2 h-fit flex bg-transparent rounded-0'>
            {tabList.map((tab) => (
              <TabsTrigger
                value={tab.value}
                className='px-5 py-[6px] border-b border-[#EBEEF2] data-[state=active]:shadow-none cursor-pointer rounded-none data-[state=active]:bg-transparent data-[state=active]:text-[#198841] data-[state=active]:hover:bg-white data-[state=active]:hover:text-[#198841] data-[state=active]:border-b data-[state=active]:border-[#198841]'>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <div
          className={`w-full grid ${
            rghtPositionedChild ? "lg:grid-cols-[1fr_350px]" : "grid-cols-1"
          } gap-6`}>
          <div className='col-span-1'>
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
          </div>
          {rghtPositionedChild && <div className='col-span-1 sticky top-4 h-fit'>{rghtPositionedChild}</div>}
        </div>
      </Tabs>
    </div>
  );
}
