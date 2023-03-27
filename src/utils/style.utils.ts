import { TBackground } from './background.utils';
import { IBorderTypes } from './border.utils';
import { TColor } from './color.utils';
import { IEventTypes } from './event.utils';
import { ITextStyle } from './textStyle.utils';
import { ILetterSpacingTypes } from './letterSpacing.utils';
import { ILineHeightTypes } from './lineHeight.utils';
import { TTextSize } from './textSize.utils';
import { ITransitionTypes } from './transition.utils';

export type IStyleTypes = IBorderTypes &
  TColor &
  ILetterSpacingTypes &
  ILineHeightTypes &
  TTextSize &
  ITransitionTypes &
  IEventTypes &
  TBackground &
  ITextStyle;
