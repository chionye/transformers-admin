/** @format */

import { DataTable } from "@/components/data-table";
import type { LeaderboardData } from "@/types";
import { ParticipantsColumns } from "../utils/participants-table-columns";

const Participants = ({
  participants,
}: {
  participants: LeaderboardData[];
}) => {
  return (
    <DataTable<LeaderboardData>
      columns={ParticipantsColumns}
      data={participants}
    />
  );
};

export default Participants;
