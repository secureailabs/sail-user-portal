import type { TFormFieldsRenderer } from 'src/components/FormFieldsRenderer';
import setFormIcon from 'src/utils/setFormIcon';

import { FieldValues, FormState } from 'react-hook-form';

export const formData: (
  formState: FormState<FieldValues>
) => TFormFieldsRenderer['fields'] = (formState) => {
  return {
    email: {
      type: 'text',
      tooltip: {
        icon: setFormIcon(formState, 'email', false, true, false),
      },
    },
    password: {
      type: 'password',
      tooltip: {
        icon: setFormIcon(formState, 'password', false, true, false),
      },
    },
  };
};
