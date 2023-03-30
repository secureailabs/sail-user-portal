import { capitalize } from './general.utils';

export interface ILetterSpacingTypes {
  letterSpacing: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';
}

const borderStyleValues: { [name: string]: { value: string } } = {
  trackingTighter: { value: '-0.05em' },
  trackingTight: { value: '0.025em' },
  trackingNormal: { value: '0em' },
  trackingWide: { value: '0.025em' },
  trackingWider: { value: '0.05em' },
  trackingWidest: { value: '0.1em' }
};

export const letterSpacingPicker = ({
  letterSpacing
}: {
  letterSpacing: ILetterSpacingTypes['letterSpacing'];
}): string => {
  const value: { value: string } =
    borderStyleValues[`tracking${capitalize(letterSpacing)}`];
  if (value) {
    return value.value;
  }

  return 'solid';
};
