/** @format */

import { NavLink, useLocation } from "react-router-dom";
import { NavbarItems } from "@/utils/nav-items";
import React from "react";
import Icons from "@/constants/icons";

const MobileSideNavItem = ({
  to,
  icon,
  label,
  location,
  onClick,
}: {
  to: string;
  icon: React.ReactNode | ((color: string) => React.ReactNode);
  label: string;
  location: string;
  onClick: () => void;
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
        onClick={onClick}
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

interface MobileSideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSideNav: React.FC<MobileSideNavProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const settings = NavbarItems;

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`
        lg:hidden fixed top-0 left-0 h-screen w-[280px] bg-white z-50 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        shadow-lg
      `}>
        <div className='w-full overflow-y-auto scrollbar-hide h-full'>
          {/* Header */}
          <div className='flex items-center justify-between px-5 h-[60px] border-b border-[#EBEEF2]'>
            <NavLink to={"/"} onClick={onClose}>
              <h5 className='font-dm-sans text-[#2F2F30] text-2xl font-bold'>
                Logo
              </h5>
            </NavLink>
            <button
              onClick={onClose}
              className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
              <Icons.close />
            </button>
          </div>

          {/* Navigation Items */}
          <div className='flex flex-col min-h-full w-full px-5 py-6'>
            <div className='space-y-6'>
              {settings.admin.map((item, index) => (
                <div key={index}>
                  <div className='w-full px-3 py-2'>
                    <p className='text-left font-dm-sans text-[#989898] text-[14px] font-medium'>
                      {item.parent}
                    </p>
                  </div>
                  <div className='flex flex-col items-end w-full gap-1'>
                    {item.items.map((navItem, navIndex) => {
                      return navItem.label !== "Logout" ? (
                        <MobileSideNavItem
                          key={navIndex}
                          {...navItem}
                          location={location.pathname}
                          icon={navItem.icon}
                          onClick={onClose}
                        />
                      ) : (
                        <div
                          key={navIndex}
                          className={`rounded-[8px] group hover:bg-[#198841] py-4 px-5 w-full transition-all`}>
                          <NavLink
                            to={navItem.to}
                            onClick={onClose}
                            className={`text-[#7D7E8E] w-full group-hover:text-white text-[16px] font-dm-sans`}>
                            <span className='flex items-center gap-3'>
                              {navItem.icon("#C8230D")}
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
    </>
  );
};

export default MobileSideNav;
