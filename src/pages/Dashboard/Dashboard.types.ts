import { UseMutateFunction } from "react-query";
import { UserInfo_Out } from "src/client";

export type TDashboardProps = {
    userData: UserInfo_Out;
    logoutMutationFunction: UseMutateFunction<void, unknown, void, unknown>;
}
