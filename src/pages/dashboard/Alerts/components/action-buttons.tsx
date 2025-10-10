/** @format */

import { Button } from "@/components/ui/button";
import Mutation from "@/services/query/mutation";
import { toast } from "sonner";
import ApiRoutes from "@/services/api/api-routes";
import { useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import CustomModal from "@/components/custom-modal";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ActionButtons = ({ id }: { id: string }) => {
  const { mutation } = Mutation();
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionTaken, setActionTaken] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setActionTaken("");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActionTaken("");
  };

  const handleSubmit = () => {
    if (!actionTaken.trim()) {
      toast.error("Please enter the action taken");
      return;
    }

    const payload = {
      status: "action_taken",
      actionTaken: actionTaken,
    };
    mutation.mutate(
      {
        url: ApiRoutes.FetchAlertById(id as string),
        requestType: "patch",
        data: payload,
      },
      {
        //eslint-disable-next-line
        onSuccess: (response: any) => {
          console.log(response, "resolve");
          toast.success("Alert resolved successfully");
          queryClient.invalidateQueries({ queryKey: ["alerts"] });
          handleCloseModal();
        },
        //eslint-disable-next-line
        onError: (error: any) => {
          console.log(error);
          toast.error(
            error?.response?.data?.message ||
              error.message ||
              "Something went wrong"
          );
        },
      }
    );
  };

  return (
    <>
      <div className='flex flex-row items-center gap-2'>
        <Button
          onClick={handleOpenModal}
          variant={"link"}
          disabled={mutation.isPending}
          className='cursor-pointer text-[#198841] hover:no-underline'>
          Resolve
        </Button>
      </div>

      <CustomModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        showCloseButton={false}
        title='Resolve Alert'
        size='sm'
        footer={
          <>
            <Button
              variant='outline'
              onClick={handleCloseModal}
              disabled={mutation.isPending}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={mutation.isPending}
              className='bg-[#198841] hover:bg-[#156632]'>
              {mutation.isPending ? (
                <>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </>
        }>
        <div>
          <div>
            <label
              htmlFor='actionTaken'
              className='block text-sm font-medium text-gray-700 mb-2'>
              Action Taken
            </label>
            <Textarea
              id='actionTaken'
              placeholder='Describe the action taken (e.g., User account was deleted)'
              value={actionTaken}
              onChange={(e) => setActionTaken(e.target.value)}
              rows={4}
              disabled={mutation.isPending}
            />
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default ActionButtons;
