import { UseMutateFunction } from 'react-query';
import { AxiosError } from 'axios';
import { LoginSuccess_Out } from 'src/client';

export interface IEmailAndPassword {
  username: string;
  password: string;
}

export type TLoginProps = {
  signInStart: UseMutateFunction<LoginSuccess_Out, AxiosError<any>, void, unknown>;
  signInReset(): void;
  status: 'success' | 'error' | 'loading' | 'idle';
};

export type TLoginFormProps = {
  signInStart: UseMutateFunction<LoginSuccess_Out, AxiosError<any>, void, unknown>;
  signInReset(): void;
};
