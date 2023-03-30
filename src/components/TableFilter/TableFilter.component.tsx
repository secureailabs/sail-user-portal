import React from 'react';

import TTableFilter from './TableFilter.types';

import Text from 'src/components/Text';

const TableFilter: React.FC<TTableFilter> = ({
  filters,
  setCurrentFilter,
  current_filter
}) => {
  return (
    <div className="table-filter">
      {filters.map((el, index) => (
        <Text
          className={
            current_filter == el.value
              ? `table-filter__item table-filter__item--current`
              : 'table-filter__item'
          }
          key={index}
          fontSize="14px"
          color="gray"
          onClick={() => setCurrentFilter(el.value)}
        >
          {el.name} ({el.count})
        </Text>
      ))}
    </div>
  );
};

export default TableFilter;
