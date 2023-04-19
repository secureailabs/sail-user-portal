import React from 'react';
import type TInput from './Input.types';
import InputLabel from '@mui/material/InputLabel';

const Input: React.FC<TInput> = ({
  label,
  placeholder,
  full,
  onChange,
  register,
  name,
  type = 'text'
}) => {
  return (
    <div className={`input ${full ? 'input--full' : ''}`}>
      {label ? (
        <InputLabel style={{ fontSize: '14px' }}>{label}</InputLabel>
      ) : (
        <></>
      )}
      <input
        {...register(name)}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

export default Input;
