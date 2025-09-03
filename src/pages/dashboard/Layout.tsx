/** @format */

import React, { useState } from "react";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import SideNav from "@/components/navigation/sidenav";
import Icons from "@/constants/icons";
import { Link } from "react-router-dom";
import SearchField from "@/components/search-field";
import { Button } from "@/components/ui/button";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});

const persister = createAsyncStoragePersister({
  storage: window.localStorage,
});

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const handleToggleSearchBar = () => {
    setIsMobileSearchOpen((prev) => !prev);
  };

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}>
      <div className='min-h-screen w-full flex'>
        <SideNav />
        <div className='bg-[#F9FAFB] min-h-screen flex flex-col w-full overflow-y-scroll'>
          <div className={`w-full flex justify-end`}>
            <div className='lg:w-[82%] w-full'>
              {/* Main Header */}
              <div className='flex justify-between items-center bg-white lg:h-[98px] h-[60px] w-full px-10 gap-x-5'>
                {/* Desktop Search - Always visible on large screens */}
                <div className='lg:w-1/3 w-full hidden lg:block'>
                  <SearchField
                    placeholder='Search...'
                    onSubmit={() => console.log("test")}
                  />
                </div>

                {/* Mobile spacer */}
                <div className='lg:hidden flex-1'></div>

                <div className='flex items-center justify-center gap-2'>
                  {/* Mobile Search Toggle Button - Only visible on mobile */}
                  <div className='flex items-center gap-2 rounded-lg lg:p-3 lg:hidden'>
                    <Button variant={"ghost"} onClick={handleToggleSearchBar}>
                      <Icons.search width='16' height='16' color='#989898' />
                    </Button>
                  </div>

                  <div className='flex items-center gap-2 rounded-lg lg:p-3'>
                    <Link to='/dashboard/admin/notifications'>
                      <Icons.bell />
                    </Link>
                  </div>

                  <div className='flex items-center gap-2 lg:bg-[#F2F4F7] rounded-[8px] lg:px-3 py-2 lg:border lg:border-[#EBEEF2]'>
                    <div className='w-[32px] h-[32px] rounded-full border border-white'>
                      <img
                        src='https://api.dicebear.com/9.x/initials/svg?seed=Chioma Johnson&radius=50&size=32'
                        alt='avatar'
                      />
                    </div>
                    <div className='hidden lg:block'>
                      <p className='font-semibold font-dm-sans text-[#1E1E1E] text-[16px]'>
                        Chioma Johnson
                      </p>
                      <p className='font-dm-sans text-[#686868] text-[14px] font-medium'>
                        Super Admin
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Search Bar - Slides in/out */}
              <div
                className={`
                lg:hidden bg-white border-t border-[#EBEEF2] px-10 transition-all duration-300 ease-in-out overflow-hidden
                ${isMobileSearchOpen ? "max-h-20 py-4" : "max-h-0 py-0"}
              `}>
                <SearchField
                  placeholder='Search...'
                  onSubmit={() => console.log("mobile search")}
                />
              </div>

              <div className='w-full lg:p-10 p-3 overflow-y-scroll h-full'>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PersistQueryClientProvider>
  );
}

export default DashboardLayout;
