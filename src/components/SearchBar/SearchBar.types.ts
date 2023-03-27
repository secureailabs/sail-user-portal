import type { IconType } from 'react-icons';

type TSearchBar = {
  placeholder?: string;
  Icon?: IconType;
  search: (value: string) => void;
};

export default TSearchBar;
