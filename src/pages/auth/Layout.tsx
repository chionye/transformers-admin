/** @format */

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className='min-h-screen w-full'>
      <div
        className={`bg-white/80 min-h-screen w-full flex items-center justify-center`}>
        <div className='w-full'>
          <div className='flex flex-row justify-center'>
            <div className='lg:w-1/3 w-full bg-white rounded-3xl'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
