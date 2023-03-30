import React, { useState } from 'react';

import type TSearchBar from './SearchBar.types';

import { MdOutlineSearch } from 'react-icons/md';

const SearchBar: React.FC<TSearchBar> = ({
  Icon = MdOutlineSearch,
  placeholder = 'Search...',
  search
}) => {
  const [value, updateValue] = useState<string>('');
  return (
    <div className="search-bar">
      <Icon
        className="search-bar__icon"
        onClick={() => {
          search(value);
        }}
      />
      <input
        onChange={(e) => {
          updateValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            search(value);
          }
        }}
        className="search-bar__input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
