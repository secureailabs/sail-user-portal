import React from 'react';

import Text from 'src/components/Text';

import type TInput from './Input.types';

const Input: React.FC<TInput> = ({
  label,
  placeholder,
  full,
  onChange,
  register,
  name,
  type = 'text',
}) => {
  return (
    <div className={`input ${full ? 'input--full' : ''}`}>
      {label ? (
        <Text fontWeight={500} fontSize="14px" lineHeight={5}>
          {label}
        </Text>
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
