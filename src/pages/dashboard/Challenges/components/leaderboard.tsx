/** @format */

import { DataTable } from "@/components/data-table";
import type { LeaderboardData } from "@/types";
import { LeaderBoardColumns } from "../utils/leaderboard-table-columns";

const Leaderboard = ({ leaderboard }: { leaderboard: LeaderboardData[] }) => {
  console.log(leaderboard, "leaderboard");
  return (
    <DataTable<LeaderboardData>
      columns={LeaderBoardColumns}
      data={leaderboard}
    />
  );
};

export default Leaderboard;
