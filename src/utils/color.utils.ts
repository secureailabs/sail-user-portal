export type TColor = {
  color:
    | 'primary'
    | 'black'
    | 'white'
    | 'grey'
    | 'whitish'
    | 'blackish'
    | 'backgroundWhite'
    | string;
};

const colorValues: { [name: string]: { color: string } } = {
  // BASIC
  black: { color: 'black' },
  white: { color: 'white' },
  primary: { color: '#f37324' },
  grey: { color: '#869EA6' },
  whitish: { color: '#f7fbfc' },
  blackish: { color: '#000000cc' },
  backgroundWhite: { color: '#d8E4E8' },
};

export const colorPicker = (color: TColor['color']): string => {
  if (color in colorValues) {
    const value: { color: string } = colorValues[color];
    return value.color;
  }

  return color;
};
