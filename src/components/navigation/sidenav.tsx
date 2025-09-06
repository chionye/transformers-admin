/** @format */

import { NavLink, useLocation } from "react-router-dom";
import { NavbarItems } from "@/utils/nav-items";
import React from "react";

const SideNavItem = ({
  to,
  icon,
  label,
  location,
}: {
  to: string;
  icon: React.ReactNode | ((color: string) => React.ReactNode);
  label: string;
  location: string;
}) => {
  const isActive = location.indexOf(to) !== -1;
  const iconColor = isActive ? "#FFFFFF" : "#7D7E8E";
  const iconComponent = typeof icon === "function" ? icon(iconColor) : icon;
  return (
    <div
      className={`rounded-[8px] group hover:bg-[#198841] py-4 px-5 w-full ${
        isActive && "bg-[#198841]"
      } transition-all`}>
      <NavLink
        to={to}
        className={`text-[#7D7E8E] w-full group-hover:text-white text-[16px] font-dm-sans ${
          isActive && "text-white"
        }`}>
        <span className='flex items-center gap-3'>
          {iconComponent}
          <span>{label}</span>
        </span>
      </NavLink>
    </div>
  );
};

const SideNav = () => {
  const location = useLocation();
  const settings = NavbarItems.admin;

  return (
    <div className='auto-rows-max text-sm lg:flex hidden bg-white fixed top-0 left-0 h-screen w-[18%] z-20'>
      <div className='w-full overflow-y-auto scrollbar-hide'>
        <div className='flex items-center px-5'>
          <div className='flex items-center h-[98px]'>
            <NavLink to={"/"}>
              <h5 className='font-dm-sans text-[#2F2F30] text-2xl font-bold'>
                Logo
              </h5>
            </NavLink>
          </div>
        </div>
        <div className='flex flex-col items-center min-h-full w-full px-5'>
          <div>
            {settings.map((item, index) => (
              <div key={index}>
                <div className='w-full px-3 py-2'>
                  <p className='text-left font-dm-sans text-[#989898] text-[14px] font-medium'>
                    {item.parent}
                  </p>
                </div>
                <div className='flex flex-col items-end w-full gap-1'>
                  {item.items.map((item, index) => {
                    return item.label !== "Logout" ? (
                      <SideNavItem
                        key={index}
                        {...item}
                        location={location.pathname}
                        icon={item.icon}
                      />
                    ) : (
                      <div
                        key={index}
                        className={`rounded-[8px] group hover:bg-[#198841] py-4 px-5 w-full transition-all`}>
                        <NavLink
                          to={"#"}
                          onClick={() => {
                            localStorage.removeItem("user");
                            localStorage.removeItem("token");
                            window.location.href = "/";
                          }}
                          className={`text-[#7D7E8E] w-full group-hover:text-white text-[16px] font-dm-sans`}>
                          <span className='flex items-center gap-3'>
                            {item.icon("#C8230D")}
                            <span>Logout</span>
                          </span>
                        </NavLink>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
