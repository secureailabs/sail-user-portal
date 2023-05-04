import { ReactElement } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';

export type FormFields = Record<
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
    defaultValue?: string;
  }
>;

export type TFormFieldsRenderer = {
  fields: FormFields;
  register: UseFormRegister<any>;
  formState: FormState<any>;
  button_text?: string;
  children?: ReactElement;
  full?: boolean;
  buttonNeverDisabled?: boolean;
};
