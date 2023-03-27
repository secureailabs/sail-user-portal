import { UseMutateFunction } from "react-query";
import { UserInfo_Out } from "client";

export type TDashboardProps = {
    userData: UserInfo_Out;
    logoutMutationFunction: UseMutateFunction<void, unknown, void, unknown>;
}