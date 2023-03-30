import type { TBackground } from './background.utils';
import { borderColorSupport, borderStylePicker } from './border.utils';
// tslint:disable-next-line: no-duplicate-imports
import type {
  IBorderColorSupportExportType,
  IBorderColorSupportInputType,
  IBorderRadiusType,
  IBorderTypes
} from './border.utils';

import { colorPicker, TColor } from './color.utils';

import { IEventTypes } from './event.utils';
import { ITextStyle } from './textStyle.utils';

import {
  ILetterSpacingTypes,
  letterSpacingPicker
} from './letterSpacing.utils';

import { ILineHeightTypes, lineHeightPicker } from './lineHeight.utils';

import { TTextSize } from './textSize.utils';

import { ITransitionTypes, transitionSupport } from './transition.utils';

import type { IStyleTypes } from './style.utils';

export {
  borderStylePicker,
  borderColorSupport,
  colorPicker,
  letterSpacingPicker,
  lineHeightPicker,
  transitionSupport
};

export type {
  ITextStyle,
  TBackground,
  IBorderTypes,
  IStyleTypes,
  IBorderColorSupportExportType,
  IBorderColorSupportInputType,
  IBorderRadiusType,
  TColor,
  IEventTypes,
  ILetterSpacingTypes,
  ILineHeightTypes,
  TTextSize,
  ITransitionTypes
};
