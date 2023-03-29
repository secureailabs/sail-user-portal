import { UseFormRegister } from 'react-hook-form';

type TTextarea = {
  label?: string;
  placeholder?: string;
  full?: boolean;
  name: string;
  rows: number;
  register: UseFormRegister<any>;
};

export default TTextarea;
