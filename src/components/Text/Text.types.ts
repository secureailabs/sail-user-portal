import {
  TColor,
  IEventTypes,
  ILetterSpacingTypes,
  ILineHeightTypes,
  TTextSize,
  ITextStyle,
  ITransitionTypes
} from 'src/utils';
import { ReactElement, ReactNode } from 'react';

type TText = Partial<TColor> &
  Partial<ILetterSpacingTypes> &
  Partial<ILineHeightTypes> &
  Partial<TTextSize> &
  Partial<ITextStyle> &
  Partial<IEventTypes> &
  Partial<ITransitionTypes> & {
    children: ReactElement | string | ReactNode;
    className?: string;
  };

export default TText;
