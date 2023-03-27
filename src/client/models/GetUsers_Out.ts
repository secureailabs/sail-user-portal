/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BasicObjectInfo } from './BasicObjectInfo';
import type { UserRole } from './UserRole';

export type GetUsers_Out = {
    name: string;
    email: string;
    job_title: string;
    role: UserRole;
    avatar: string;
    _id: string;
    organization: BasicObjectInfo;
};

