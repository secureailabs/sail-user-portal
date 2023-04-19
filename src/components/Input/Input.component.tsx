import React from 'react';
import type TInput from './Input.types';
import InputLabel from '@mui/material/InputLabel';

const Input: React.FC<TInput> = ({
  label,
  placeholder,
  full,
  register,
  name,
  type = 'text'
}) => {
  return (
    <div className={`input ${full ? 'input--full' : ''}`}>
      <InputLabel style={{ fontSize: '14px' }}>{label}</InputLabel>
      <input {...register(name)} placeholder={placeholder} type={type} />
    </div>
  );
};

export default Input;
