import React from 'react';
import { TFormFieldsRenderer } from './FormFieldsRenderer.types';
import Input from 'src/components/Input';
import Textarea from 'src/components/Textarea';
import Button from 'src/components/Button';
import { headerCase } from 'change-case';
import Text from 'src/components/Text';
import Dropzone from 'src/components/Dropzone';
import { MenuItem, TextField } from '@mui/material';
import Select from '@mui/material/Select';

const FormRenderer: React.FC<TFormFieldsRenderer> = ({
  fields,
  register,
  full = true,
  children,
  button_text
}) => {
  return (
    <>
      {Object.entries(fields).map(([key, value], index) => {
        const key_label = value.label
          ? value.label
          : headerCase(key, { delimiter: ' ' });
        const key_placeholder = value.placeholder
          ? value.placeholder
          : headerCase(key, { delimiter: ' ' });

        switch (value.type) {
          case 'textarea': {
            return (
              <Textarea
                key={index}
                name={key}
                full={full}
                label={key_label}
                rows={5}
                placeholder={key_placeholder}
                register={register}
              />
            );
          }
          case 'image':
            return (
              <div>
                {value.label ? (
                  <>
                    <Text fontWeight={500} fontSize="14px" lineHeight={5}>
                      {value.label}
                    </Text>
                    <Dropzone />
                  </>
                ) : (
                  <></>
                )}
              </div>
            );
          case 'date':
            return <input type="date" {...register(key)} />;
          case 'select': {
            return (
              <div className={`input ${full ? 'input--full' : ''}`}>
                <Text fontWeight={500} fontSize="14px" lineHeight={5}>
                  {key_label}
                </Text>
                <Select {...register(key)} defaultValue={value.options?.[0]}>
                  {value.options?.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            );
          }
          case 'text':
          case 'password':
          case 'number':
          default:
            return (
              <Input
                {...register(key)}
                key={index}
                placeholder={key_placeholder}
                label={key_label}
                register={register}
                type={value.type}
                full={full}
              />
            );
        }
      })}
      {children}
      {button_text && (
        <Button full={true} button_type="primary" type="submit">
          {button_text}
        </Button>
      )}
    </>
  );
};

export default FormRenderer;
