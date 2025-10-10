/** @format */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import type { TeamFormData, UsersTableData } from "@/types";
import { newTeamSchema } from "@/utils/form-schema";
import { MemberSearch } from "./components/MemberSearch";
import { CollapsibleView } from "@/components/collapsible";
import { icons } from "@/constants/data";
import CustomModal from "@/components/custom-modal";
import { Card } from "@/components/ui/card";
import Mutation from "@/services/query/mutation";
import { responseHandler } from "@/services/response";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import ApiRoutes from "@/services/api/api-routes";
import { InnerPageContainer } from "@/components/innerpage-container";

// Main Component
const CreateTeams = () => {
  const [mode, setMode] = useState<"create" | "edit">("create");
  const [loading, setLoading] = useState(false);
  const { mutation } = Mutation();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState<UsersTableData[]>([]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TeamFormData>({
    resolver: zodResolver(newTeamSchema),
    defaultValues: {
      name: "",
      description: "",
      color: "",
      icon: "",
      owner: [],
    },
  });

  const selectedColor = watch("color");
  const selectedIcon = watch("icon");

  const colors = [
    "#3662AE",
    "#198841",
    "#C8230D",
    "#A17C07",
    "#7344AC",
    "#1E1E1E",
  ];

  const handleAddMember = (user: UsersTableData) => {
    const newMembers = [...selectedMembers, user];
    setSelectedMembers(newMembers);
    setValue(
      "owner",
      newMembers.map((m) => m._id)
    );
  };

  const handleRemoveMember = (userId: string) => {
    const newMembers = selectedMembers.filter((m) => m._id !== userId);
    setSelectedMembers(newMembers);
    setValue(
      "owner",
      newMembers.map((m) => m._id)
    );
  };

  const onSubmit = async (data: TeamFormData) => {
    setLoading(true);
    try {
      mutation.mutate(
        {
          url: ApiRoutes.CreateTeam,
          data: data,
          requestType: "post",
        },
        responseHandler({
          //eslint-disable-next-line
          onSuccess: (response: any) => {
            console.log(response, "create team");
            setLoading(false);
            navigate(-1);
          },
          //eslint-disable-next-line
          onError: (error: any) => {
            console.log(error, "create team");
            setLoading(false);
            toast.error(error || "Something went wrong");
          },
        })
      );
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = () => {
    console.log("Deleting team");
    setIsDeleteModalOpen(false);
    alert("Team deleted successfully!");
  };

  return (
    <InnerPageContainer title='Back to Teams' hideTitle>
      <div className='min-h-screen bg-gray-50'>
        <Card className='max-w-4xl mx-auto px-4 py-8'>
          {/* Header */}
          <div className='flex items-center justify-between'>
            <h1 className='text-xl font-bold text-gray-900'>
              {mode === "edit" ? "Edit Team" : "Create New Team"}
            </h1>
            <button
              onClick={() => setMode(mode === "create" ? "edit" : "create")}
              className='text-sm text-blue-600 hover:text-blue-700'>
              Switch to {mode === "create" ? "Edit" : "Create"} Mode
            </button>
          </div>

          {/* Form */}
          <div className='space-y-6'>
            <div className=' space-y-6'>
              {/* Team Name */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Team Name
                </label>
                <input
                  {...register("name")}
                  type='text'
                  placeholder='Enter your team name'
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
                />
                {errors.name && (
                  <p className='text-sm text-red-600 mt-1'>
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Team Members */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Assign Team Lead
                </label>
                <MemberSearch
                  selectedMembers={selectedMembers}
                  onAddMember={handleAddMember}
                  onRemoveMember={handleRemoveMember}
                />
                {selectedMembers.length > 0 && (
                  <p className='text-sm text-gray-500 mt-2'>
                    {selectedMembers.length} member
                    {selectedMembers.length !== 1 ? "s" : ""} selected
                  </p>
                )}
              </div>

              {/* Team Description */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Team Description
                </label>
                <textarea
                  {...register("description")}
                  placeholder='Tell us about your team'
                  rows={4}
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all resize-none'
                />
                {errors.description && (
                  <p className='text-sm text-red-600 mt-1'>
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Color Picker */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Team Color
                </label>
                <CollapsibleView
                  title={
                    selectedColor ? (
                      <div className='flex items-center gap-3'>
                        <div
                          className='w-8 h-8 rounded-full'
                          style={{ backgroundColor: selectedColor }}
                        />
                        <span className='text-gray-700'>Selected Color</span>
                      </div>
                    ) : (
                      <span className='text-gray-600'>Select Color</span>
                    )
                  }>
                  <div className='flex flex-wrap gap-4 justify-start'>
                    {colors.map((color) => (
                      <button
                        key={color}
                        type='button'
                        onClick={() => setValue("color", color)}
                        className={`w-12 h-12 rounded-full transition-all ${
                          color === selectedColor
                            ? "ring-4 ring-offset-2 ring-gray-400"
                            : "hover:scale-110"
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </CollapsibleView>
                {errors.color && (
                  <p className='text-sm text-red-600 mt-1'>
                    {errors.color.message}
                  </p>
                )}
              </div>

              {/* Icon Picker */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Team Icon
                </label>
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
                  <div className='flex flex-wrap gap-4 justify-start'>
                    {icons.map((item) => (
                      <button
                        key={item.title}
                        type='button'
                        onClick={() => setValue("icon", item.title)}
                        className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center transition-all hover:bg-gray-200 ${
                          selectedIcon === item.title
                            ? "ring-4 ring-[#7344AC] bg-purple-100"
                            : ""
                        }`}>
                        {item.icon(
                          selectedIcon === item.title ? "#7344AC" : "#1E1E1E"
                        )}
                      </button>
                    ))}
                  </div>
                </CollapsibleView>
                {errors.icon && (
                  <p className='text-sm text-red-600 mt-1'>
                    {errors.icon.message}
                  </p>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className='flex gap-4'>
              <button
                type='button'
                onClick={handleSubmit(onSubmit)}
                disabled={loading}
                className='flex-1 bg-[#198841] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#198841]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center'>
                {loading ? (
                  <>
                    <Loader2 className='w-5 h-5 mr-2 animate-spin' />
                    {mode === "edit" ? "Updating..." : "Creating..."}
                  </>
                ) : mode === "edit" ? (
                  "Update Team"
                ) : (
                  "Create Team"
                )}
              </button>

              {mode === "edit" && (
                <button
                  type='button'
                  onClick={() => setIsDeleteModalOpen(true)}
                  className='px-6 py-3 text-red-600 border border-red-600 rounded-lg font-semibold hover:bg-red-50 transition-all'>
                  Delete
                </button>
              )}
            </div>
          </div>

          {/* Delete Confirmation Modal */}
          <CustomModal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            showCloseButton={false}
            title='Delete Team?'
            footer={
              <div className='flex justify-end space-x-3'>
                <button
                  onClick={() => setIsDeleteModalOpen(false)}
                  className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'>
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className='px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700'>
                  Delete Team
                </button>
              </div>
            }>
            <p className='text-gray-600'>
              Are you sure you want to delete this team? You cannot undo this
              action.
            </p>
          </CustomModal>
        </Card>
      </div>
    </InnerPageContainer>
  );
};

export default CreateTeams;
