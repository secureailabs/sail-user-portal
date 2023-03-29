type TTable = {
  filters: Array<{
    name: string;
    value: string;
    count: number;
  }>;
  setCurrentFilter(value: string): void;
  current_filter: string;
};

export default TTable;
