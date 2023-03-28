import {
  TColor,
  ILetterSpacingTypes,
  ILineHeightTypes,
  ITextStyle,
} from 'src/utils/index';
export type IHeadingProps = Partial<TColor> &
  Partial<ILetterSpacingTypes> &
  Partial<ILineHeightTypes> &
  Partial<ITextStyle> & {
    children: string;
    className?: string;
    inline?: boolean;
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  };
