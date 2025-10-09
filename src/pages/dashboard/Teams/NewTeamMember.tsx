/** @format */

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newTeamMemberSchema } from "@/utils/form-schema";
import { useNavigate } from "react-router-dom";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { InnerPageContainer } from "@/components/innerpage-container";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { MemberSearch } from "./components/MemberSearch";
import type { UsersTableData } from "@/types";

const NewTeamMember = () => {
  const { teamName } = useParams();
  const navigate = useNavigate();
  const [selectedMembers, setSelectedMembers] = useState<UsersTableData[]>([]);
  type TeamMemberFormData = {
    members?: string[];
  };

  const form = useForm<TeamMemberFormData>({
    resolver: zodResolver(newTeamMemberSchema),
    defaultValues: {
      members: []
    },
  });

  const handleAddMember = (user: UsersTableData) => {
    const newMembers = [...selectedMembers, user];
    setSelectedMembers(newMembers);
    form.setValue(
      "members",
      newMembers.map((m) => m._id)
    );
  };

  const handleRemoveMember = (userId: string) => {
    const newMembers = selectedMembers.filter((m) => m._id !== userId);
    setSelectedMembers(newMembers);
    form.setValue(
      "members",
      newMembers.map((m) => m._id)
    );
  };

  const onSubmit = (data: TeamMemberFormData) => {
    console.log(data);
    navigate("/dashboard/admin/home");
  };
  return (
    <InnerPageContainer title={`Back to ${teamName}`}>
      <Card className='w-full px-5 shadow'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='w-full flex gap-2 flex-col p-5'>
              <p className='font-dm-sans text-xl font-bold text-[#1E1E1E]'>
                Add Team Member
              </p>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Username
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
              <div className='w-full flex justify-start mt-4'>
                <Button
                  type='submit'
                  disabled={form.formState.isSubmitting}
                  className='font-dm-sans text-center bg-[#198841] text-[14px] text-white px-4 py-6 w-fit cursor-pointer'>
                  Add Team Member
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </Card>
    </InnerPageContainer>
  );
};

export default NewTeamMember;
