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
import ApiRoutes from "@/services/api/api-routes";
import { responseHandler } from "@/services/response";
import { toast } from "sonner";
import Mutation from "@/services/query/mutation";

const NewTeamMember = () => {
  const { teamId, teamName } = useParams();
  const navigate = useNavigate();
  const { mutation } = Mutation();
  const [selectedMembers, setSelectedMembers] = useState<UsersTableData[]>([]);
  type TeamMemberFormData = {
    member: string;
  };

  const form = useForm<TeamMemberFormData>({
    resolver: zodResolver(newTeamMemberSchema),
    defaultValues: {
      member: "",
    },
  });

  const handleAddMember = (user: UsersTableData) => {
    setSelectedMembers([user]);
    form.setValue("member", user._id);
  };

  const handleRemoveMember = () => {
    setSelectedMembers([]);
    form.setValue("member", "");
  };

  const onSubmit = (data: TeamMemberFormData) => {
    mutation.mutate(
      {
        url: ApiRoutes.JoinTeam(teamId as string),
        data: data,
        requestType: "post",
      },
      responseHandler({
        //eslint-disable-next-line
        onSuccess: (response: any) => {
          console.log(response, "create team");
          toast.success("Team member added successfully");
          navigate(-1);
        },
        //eslint-disable-next-line
        onError: (error: any) => {
          console.log(error, "create team");
          toast.error(error || "Something went wrong");
        },
      })
    );
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
                {form.formState.errors.member && (
                  <p className='text-red-500 mt-2'>
                    {form.formState.errors.member.message}
                  </p>
                )}
              </div>
              <div className='w-full flex justify-start mt-4'>
                <Button
                  type='submit'
                  disabled={mutation.isPending}
                  className='font-dm-sans text-center bg-[#198841] text-[14px] text-white px-4 py-6 w-fit cursor-pointer'>
                  {mutation.isPending ? "Adding..." : "Add Team Member"}
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
