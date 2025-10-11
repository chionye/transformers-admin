/** @format */

import { InnerPageContainer } from "@/components/innerpage-container";
import { Link, useParams } from "react-router-dom";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import { useEffect, useState } from "react";
import type { QueryProps } from "@/types";
import { Card } from "@/components/ui/card";
import type { PaymentProp } from "@/types";
import Icons from "@/constants/icons";
import moment from "moment";
import { ECurrency } from "@/constants/enums";

const PaymentDetails = () => {
  const { id } = useParams();
  const [payment, setPayment] = useState<PaymentProp | null>(null);
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  // const { mutation } = Mutation();

  const queries: { [key: string]: QueryProps } = {
    transaction: {
      id: `transaction-${id}`,
      url: ApiRoutes.FetchTransactionHistoryById(id as string),
      method: "GET",
      payload: null,
    },
  };

  const { queryData: transactionData } = Query(queries.transaction);

  useEffect(() => {
    if (transactionData.data) {
      console.log(transactionData.data.data.transaction);
      const data = transactionData.data.data.transaction;
      setPayment(data);
    }
  }, [transactionData.data]);

  return (
    <InnerPageContainer title='Back to Payments' hideTitle>
      <Card className='p-4'>
        <div>
          <div className='flex items-center justify-between bg-[#F6F8F9] p-3 rounded-xl'>
            <div className='flex items-center gap-2'>
              <img
                src={payment?.user.avatar}
                alt=''
                className='w-8 h-8 rounded-full'
              />
              <div>
                <p className='font-dm-sans text-[#1E1E1E] text-[16px] font-medium'>
                  {payment?.user.fullName}
                </p>
                <p className='font-dm-sans text-[#1E1E1E] text-[14px] font-medium'>
                  {payment?.user.email}
                </p>
              </div>
            </div>
            <Link
              to={"/dashboard/admin/users/user-profile/" + payment?.user._id}>
              <Icons.arrowCircleRight />
            </Link>
          </div>

          <div className='flex items-start justify-between mt-5'>
            <div className='flex flex-col gap-4'>
              <div>
                {" "}
                <p className='font-dm-sans text-[16px] text-[#1E1E1E] font-normal'>
                  Payment ID: #{payment?.reference}
                </p>
                <p className='font-dm-sans text-[14px] text-[#949294] font-normal'>
                  {moment(payment?.createdAt).format("DD/MM/YYYY")}
                </p>
              </div>
              <p className='font-dm-sans text-[14px] text-[#686868] font-medium uppercase'>
                Payment Summary
              </p>
              <div>
                <p className='font-dm-sans text-[14px] text-[#949294] font-normal'>
                  Plan
                </p>
                <p className='font-dm-sans text-[16px] text-[#1E1E1E] font-normal'>
                  {payment?.description}
                </p>
              </div>
              <div>
                <p className='font-dm-sans text-[14px] text-[#949294] font-normal'>
                  Amount Paid
                </p>
                <p className='font-dm-sans text-[16px] text-[#1E1E1E] font-normal'>
                  {
                    ECurrency[
                      (payment?.currency || "NGN") as keyof typeof ECurrency
                    ]
                  }{" "}
                  {(payment?.amount || 0).toLocaleString("en")}
                </p>
              </div>
              <div>
                <p className='font-dm-sans text-[14px] text-[#949294] font-normal'>
                  Payment Method
                </p>
                <p className='font-dm-sans text-[16px] text-[#1E1E1E] font-normal'>
                  Card
                </p>
              </div>
              <div>
                <p className='font-dm-sans text-[14px] text-[#949294] font-normal'>
                  Transaction Reference
                </p>
                <p className='font-dm-sans text-[16px] text-[#1E1E1E] font-normal'>
                  {payment?.reference}
                </p>
              </div>
            </div>
            <div
              className={`flex items-center gap-1 font-normal text-[16px] px-2 py-1 w-fit rounded-full border ${
                payment?.status === "success"
                  ? "bg-[#DDFBE7] text-[#4B4B4B]"
                  : "bg-[#DDFBE7] text-[#198841]"
              }`}>
              {payment?.status || "Successfull"}
            </div>
          </div>
        </div>
        <Link
          to={"/dashboard/admin/payments/" + payment?.user._id}
          className='flex items-center gap-2'>
          <span className='font-dm-sans text-[14px] text-[#198841] font-medium'>
            View Payment History
          </span>
          <Icons.arrowCircleRight />
        </Link>
      </Card>
    </InnerPageContainer>
  );
};

export default PaymentDetails;
