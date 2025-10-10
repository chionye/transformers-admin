/** @format */

import { Button } from "@/components/ui/button";
import Icons from "@/constants/icons";
import { Link } from "react-router-dom";
import Mutation from "@/services/query/mutation";
import { toast } from "sonner";
import ApiRoutes from "@/services/api/api-routes";
import { useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

const ActionButtons = ({ id }: { id: string }) => {
  const { mutation } = Mutation();
  const queryClient = useQueryClient();

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Warning: This action cannot be undone. Your data will not be retrieved once deleted. Are you sure you want to continue?"
    );

    if (!confirmed) return;

    mutation.mutate(
      {
        url: ApiRoutes.FetchFaqById(id as string),
        requestType: "delete",
      },
      {
        //eslint-disable-next-line
        onSuccess: (response: any) => {
          console.log(response, "delete");
          toast.success("Item deleted successfully");
          queryClient.invalidateQueries({ queryKey: ["faqs"] });
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
    <div className='flex flex-row items-center gap-2'>
      <Link
        to={`/dashboard/admin/faqs/edit/${id}`}
        className='font-dm-sans text-[#198841] text-[16px] cursor-pointer'>
        <Icons.post color={"#198841"} width="16" height="16" />
      </Link>
      <Button
        onClick={handleDelete}
        variant={"link"}
        disabled={mutation.isPending}
        className='cursor-pointer'>
        {mutation.isPending ? <Loader2 /> : <Icons.trash2 />}
      </Button>
    </div>
  );
};

export default ActionButtons;
