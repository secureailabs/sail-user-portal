export interface ILineHeightTypes {
  lineHeight: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
}

const lineHeightValues: { [name: string]: { value: string } } = {
  leading2: { value: '0.8rem' },
  leading3: { value: '1.2rem' },
  leading4: { value: '1.6rem' },
  leading5: { value: '2rem' },
  leading6: { value: '2.4rem' },
  leading7: { value: '2.8rem' },
  leading8: { value: '3.2rem' },
  leading9: { value: '3.6rem' },
  leading10: { value: '4rem' },
  leading11: { value: '7rem' }
};

export const lineHeightPicker = ({
  lineHeight
}: {
  lineHeight: ILineHeightTypes['lineHeight'];
}): string => {
  const value: { value: string } = lineHeightValues[`leading${lineHeight}`];
  if (value) {
    return value.value;
  }

  return 'solid';
};
