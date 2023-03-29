import { UseFormRegister } from 'react-hook-form';

type TInput = {
  onChange(e: React.FormEvent<HTMLInputElement>): void;
  label?: string;
  placeholder?: string;
  full?: boolean;
  register: UseFormRegister<any>;
  name: string;
  type?: React.HTMLInputTypeAttribute;
};

export default TInput;
