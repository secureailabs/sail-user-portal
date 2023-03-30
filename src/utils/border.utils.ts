import { IStyleTypes } from './style.utils';

import { colorPicker, TColor } from './color.utils';

import { capitalize } from './general.utils';

export interface IBorderStyleType {
  borderStyle:
    | 'dotted'
    | 'dashed'
    | 'solid'
    | 'double'
    | 'groove'
    | 'ridge'
    | 'inset'
    | 'outset';
}

export interface IBorderWidthType {
  borderWidth: number;
}

interface IBorderPrivateTypes {
  borderColor: TColor['color'];
  radius: string;
}

export interface IBorderRadiusType {
  borderBottomLeftRadius: string;
  borderBottomRightRadius: string;
  borderRadius: string;
  borderTopLeftRadius: string;
  borderTopRightRadius: string;
}

export interface IBorderColorSupportInputType {
  borderBottomColor?: IBorderPrivateTypes['borderColor'];
  borderColor?: IBorderPrivateTypes['borderColor'];
  borderLeftColor?: IBorderPrivateTypes['borderColor'];
  borderRightColor?: IBorderPrivateTypes['borderColor'];
  borderTopColor?: IBorderPrivateTypes['borderColor'];
}

export interface IBorderColorSupportExportType {
  borderBottomColor?: string;
  borderColor?: string;
  borderLeftColor?: string;
  borderRightColor?: string;
  borderTopColor?: string;
}

export type IBorderTypes = IBorderColorSupportInputType &
  IBorderRadiusType &
  IBorderWidthType &
  IBorderStyleType;

const borderStyleValues: { [name: string]: { borderStyle: string } } = {
  borderDashed: { borderStyle: 'dashed' },
  borderDotted: { borderStyle: 'dotted' },
  borderDouble: { borderStyle: 'double' },
  borderGroove: { borderStyle: 'groove' },
  borderInset: { borderStyle: 'inset' },
  borderOutset: { borderStyle: 'outset' },
  borderRidge: { borderStyle: 'ridge' },
  borderSolid: { borderStyle: 'solid' }
};

export const borderColorSupport = ({
  borderBottomColor,
  borderColor,
  borderTopColor,
  borderLeftColor,
  borderRightColor
}: IBorderColorSupportInputType): IBorderColorSupportExportType => {
  let final: IBorderColorSupportExportType = {};
  if (borderColor) {
    final = {
      ...final,
      borderColor: borderColor && colorPicker(borderColor)
    };
  }
  if (borderBottomColor) {
    final = {
      ...final,
      borderBottomColor: borderBottomColor && colorPicker(borderBottomColor)
    };
  }
  if (borderTopColor) {
    final = {
      ...final,
      borderTopColor: borderTopColor && colorPicker(borderTopColor)
    };
  }
  if (borderLeftColor) {
    final = {
      ...final,
      borderLeftColor: borderLeftColor && colorPicker(borderLeftColor)
    };
  }
  if (borderRightColor) {
    final = {
      ...final,
      borderRightColor: borderRightColor && colorPicker(borderRightColor)
    };
  }

  return { ...final };
};

export const borderStylePicker = ({
  borderStyle
}: {
  borderStyle: IStyleTypes['borderStyle'];
}): string => {
  const value: { borderStyle: string } =
    borderStyleValues[`border${capitalize(borderStyle)}`];
  if (value) {
    return value.borderStyle;
  }

  return 'solid';
};
