/** @format */
import { CustomDropdown } from "@/components/custom-dropdown";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import type {
  PaymentAnalytics,
  PaymentApiResponse,
  PaymentProp,
  QueryProps,
} from "@/types";
import { PaymentColumns } from "./utils/payment-table-columns";
import PageTitle from "@/components/page-title";
import MetricsCard from "./components/metrics-card";
import { useEffect, useMemo, useState } from "react";
import ApiRoutes from "@/services/api/api-routes";
import Query from "@/services/query/query";
import { ECurrency } from "@/constants/enums";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();
  const [payment, setPayment] = useState<PaymentApiResponse>({
    totalDocument: 0,
    history: [],
  });
  const [analytics, setAnalytics] = useState<PaymentAnalytics>({
    totalRevenue: 0,
    totalPayout: 0,
    activeSubscription: 0,
    failedPayments: 0,
  });

  const [page] = useState<number>(1);
  const [limit] = useState<number>(10);

  const queries: { [key: string]: QueryProps } = {
    payments: {
      id: "payments",
      url: id
        ? ApiRoutes.FetchTransactionHistory(page, limit, id)
        : ApiRoutes.FetchTransactionHistory(page, limit),
      method: "GET",
      payload: null,
    },
    paymentAnalytics: {
      id: "paymentsAnalytics",
      url: ApiRoutes.FetchPaymentAnalytics,
      method: "GET",
      payload: null,
    },
  };

  const { queryData: paymentData } = Query(queries.payments);
  const { queryData: anayticsData } = Query(queries.paymentAnalytics);

  useEffect(() => {
    if (paymentData.data) {
      const response = paymentData.data.data.transaction;
      console.log(response);
      setPayment(response);
    }
  }, [paymentData.data]);

  useEffect(() => {
    if (anayticsData.data) {
      const response = anayticsData.data.data.analytics;
      console.log(response);
      setAnalytics(response);
    }
  }, [anayticsData.data]);

  const cardData = useMemo(
    () => [
      {
        count:
          ECurrency["NGN"] +
          analytics.totalRevenue.toLocaleString("en", {
            minimumFractionDigits: 2,
          }),
        title: "Total Revenue",
        icon: <Icons.revenue color='#198841' />,
        iconBg: "#DDFBE7",
      },
      {
        count:
          ECurrency["NGN"] +
          analytics.totalPayout.toLocaleString("en", {
            minimumFractionDigits: 2,
          }),
        title: "Total Payouts (withdrawal)",
        icon: <Icons.export color='#7344AC' />,
        iconBg: "#F2EDFA",
      },
      {
        count: analytics.activeSubscription.toLocaleString("en"),
        title: "Active Subscriptions",
        icon: <Icons.circleCheck color='#A17C07' />,
        iconBg: "#FEF0C3",
      },
      {
        count: analytics.failedPayments,
        title: "Failed Payments",
        icon: <Icons.circleCancel />,
        iconBg: "#DDFBE7",
      },
    ],
    [analytics]
  );

  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='flex flex-row items-center justify-between gap-4'>
        <PageTitle
          title='Challenges'
          subtitle='Track and manage all app challenges.'
          child={
            <div className='flex flex-row items-center gap-2'>
              <CustomDropdown
                triggerLabel='Filter'
                icon={<Icons.upNdownArrow />}
                iconPosition='right'
                items={[
                  { label: "My Profile" },
                  { label: "Settings" },
                  { type: "separator" },
                  { label: "Logout" },
                ]}
              />
              <Button className='font-dm-sans text-[14px] font-semibold text-[#686868] bg-white shadow'>
                <Icons.export />
                <span className='lg:block hidden'>Export</span>
              </Button>
            </div>
          }
        />
      </div>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {cardData.map((card) => (
          <MetricsCard
            key={card.title}
            title={card.title}
            count={card.count}
            icon={card.icon}
            iconBg={card.iconBg}
          />
        ))}
      </div>
      <Card className='lg:col-span-7 p-4'>
        <DataTable<PaymentProp>
          columns={PaymentColumns}
          data={payment.history}
        />
      </Card>
    </div>
  );
};

export default Payment;
