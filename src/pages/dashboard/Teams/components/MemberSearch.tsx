/** @format */

import ApiRoutes from "@/services/api/api-routes";
import Query from "@/services/query/query";
import type { UsersTableData } from "@/types";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

export const MemberSearch = ({
  selectedMembers,
  onAddMember,
  onRemoveMember,
  multiple = false,
}: {
  selectedMembers: UsersTableData[];
  onAddMember: (user: UsersTableData) => void;
  onRemoveMember: (userId: string) => void;
  multiple?: boolean;
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<UsersTableData[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [userList, setUserList] = useState<UsersTableData[]>([]);
  const [page] = useState(1);

  const { queryData: usersData } = Query({
    id: "users-list",
    url: ApiRoutes.FetchUsers(page, "100"),
    method: "GET",
    payload: null,
  });

  useEffect(() => {
    if (usersData.data) {
      console.log(usersData.data.data.users, "works");
      const { list, totalDocument } = usersData.data.data.users;
      console.log(list, totalDocument, "list doc");
      const listWithSn = list.map((item: UsersTableData, index: number) => ({
        ...item,
        sn: index + 1,
      }));
      setUserList(listWithSn);
    }
  }, [usersData.data]);

  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      // Simulate API call - Replace with actual API call
      const timer = setTimeout(() => {
        const filtered = userList.filter(
          (user) =>
            user.username.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !selectedMembers.find((m) => m._id === user._id)
        );
        setSearchResults(filtered);
        setIsSearching(false);
        setShowDropdown(true);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  }, [searchQuery, selectedMembers, userList]);

  const handleSelectUser = (user: UsersTableData) => {
    onAddMember(user);
    if (!multiple) {
      setSearchQuery("");
      setShowDropdown(false);
    }
  };

  return (
    <div className='space-y-3'>
      {/* Search Input */}
      <div className='relative'>
        <input
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => searchQuery && setShowDropdown(true)}
          placeholder='Search members by username...'
          className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
        />

        {/* Search Results Dropdown */}
        {showDropdown && (
          <div className='absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto'>
            {isSearching ? (
              <div className='p-4 text-center text-gray-500'>
                <Loader2 className='w-5 h-5 animate-spin mx-auto' />
              </div>
            ) : searchResults.length > 0 ? (
              searchResults.map((user) => (
                <button
                  key={user._id}
                  type='button'
                  onClick={() => handleSelectUser(user)}
                  className='w-full p-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left'>
                  <img
                    src={user.avatar}
                    alt={user.fullName}
                    className='w-10 h-10 rounded-full'
                  />
                  <div className='flex-1 min-w-0'>
                    <p className='font-medium text-gray-900 truncate'>
                      {user.fullName}
                    </p>
                    <p className='text-sm text-gray-500 truncate'>
                      @{user.username}
                    </p>
                  </div>
                </button>
              ))
            ) : (
              <div className='p-4 text-center text-gray-500'>
                No users found
              </div>
            )}
          </div>
        )}
      </div>

      {/* Selected Members */}
      {selectedMembers.length > 0 && (
        <div className='space-y-2'>
          {selectedMembers.map((member) => (
            <div
              key={member._id}
              className='flex items-center justify-between p-3 rounded-xl'
              style={{ backgroundColor: "#EBEEF2" }}>
              <div className='flex items-center gap-3'>
                <img
                  src={member.avatar}
                  alt={member.fullName}
                  className='w-10 h-10 rounded-full'
                />
                <div className='min-w-0'>
                  <p className='font-medium text-gray-900 truncate'>
                    {member.fullName}
                  </p>
                  <p className='text-sm text-gray-600 truncate'>
                    @{member.username}
                  </p>
                </div>
              </div>
              <button
                type='button'
                onClick={() => onRemoveMember(member._id)}
                className='text-gray-400 hover:text-red-600 transition-colors'>
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
