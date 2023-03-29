import React from 'react';

import Text from 'src/components/Text';
import type TTextarea from './Textarea.types';

const Input: React.FC<TTextarea> = ({
  label,
  placeholder,
  full,
  name,
  register,
  rows,
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
      <textarea {...register(name)} rows={rows} placeholder={placeholder} />
    </div>
  );
};

export default Input;
