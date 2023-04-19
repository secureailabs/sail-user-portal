import { UseFormRegister } from 'react-hook-form';

type TInput = {
  label: string;
  placeholder?: string;
  full?: boolean;
  register: UseFormRegister<any>;
  name: string;
  key: string;
  type?: React.HTMLInputTypeAttribute;
};

export default TInput;
