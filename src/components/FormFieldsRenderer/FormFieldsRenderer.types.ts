import { ReactElement } from 'react';
import { FieldValues, FormState, UseFormRegister } from 'react-hook-form';

export type TFormFieldsRenderer = {
  fields: Record<
    string,
    {
      type?:
        | 'text'
        | 'password'
        | 'image'
        | 'textarea'
        | 'number'
        | 'radio'
        | 'select'
        | 'image'
        | 'date';
      label?: string;
      placeholder?: string;
      errorMessage?: string;
      options?: string[];
    }
  >;
  register: UseFormRegister<any>;
  formState: FormState<any>;
  button_text?: string;

  children?: ReactElement;

  full?: boolean;
};
