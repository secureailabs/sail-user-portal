/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserRole } from './UserRole';

export type RegisterUser_In = {
  name: string;
  email: string;
  job_title: string;
  role: UserRole;
  avatar?: string;
  password: string;
};
