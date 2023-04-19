import React from 'react';
import { TFormFieldsRenderer } from './FormFieldsRenderer.types';
import Input from 'src/components/Input';
import Textarea from 'src/components/Textarea';
import Button from 'src/components/Button';
import { headerCase } from 'change-case';
import Dropzone from 'src/components/Dropzone';
import { InputLabel, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';

const FormRenderer: React.FC<TFormFieldsRenderer> = ({
  fields,
  register,
  full = true,
  formState,
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
                    <InputLabel style={{ fontSize: '18px' }}>
                      {key_label}
                    </InputLabel>
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
              <div>
                <InputLabel style={{ fontSize: '14px' }}>
                  {key_label}
                </InputLabel>
                <Select
                  {...register(key)}
                  defaultValue={value.defaultValue}
                  style={{ width: '100%', fontSize: '12px' }}
                >
                  {value.options?.map((option) => (
                    <MenuItem
                      key={option}
                      value={option}
                      style={{ width: '100%', fontSize: '12px' }}
                    >
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
        <Button
          full={true}
          disabled={!formState.isDirty}
          button_type="primary"
          type="submit"
        >
          {button_text}
        </Button>
      )}
    </>
  );
};

export default FormRenderer;
