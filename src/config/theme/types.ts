import { CSSProperties, ElementType } from 'react';
import { css } from 'styled-components';
import { IconType } from 'react-icons';

export type ThemeKey = 'LIGHT' | 'DARK';

export type ColourKey =
  | 'primary'
  | 'secondary'
  | 'text-heading'
  | 'text-sub-heading'
  | 'text-body'
  | 'bg'
  | 'switch-bg'
  | 'switch-dot'
  | 'border';

export type ColourValue = {
  [K in ThemeKey]: string;
};

export type Colours = {
  [K in ColourKey]: ColourValue;
};

export type BreakpointKey = 'mobile' | 'desktop';

export type Breakpoints = {
  [K in BreakpointKey]: number;
};

export type MediaQuery = (
  template: TemplateStringsArray,
  ...args: any[]
) => ReturnType<typeof css>;

export type SpacingKey = 'BASE_1' | 'BASE_2' | 'BASE_3' | 'BASE_4' | 'BASE_5';

export type Spacing = {
  [K in SpacingKey]: string;
};

export type TextKey =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'section-title'
  | 'body';

export type FontSize =
  | '12px'
  | '16px'
  | '18px'
  | '20px'
  | '22px'
  | '24px'
  | '36px';

export type FontWeight = 200 | 400 | 500 | 700;

export type TextVariant = {
  element: ElementType;
  colour: ColourKey;
  size: FontSize;
  weight: FontWeight;
  textTransform?: CSSProperties['textTransform'];
  letterSpacing?: CSSProperties['letterSpacing'];
};

export type TextVariants = {
  [K in TextKey]: TextVariant;
};

export type IconKey =
  | 'sun'
  | 'moon'
  | 'code'
  | 'react'
  | 'layout'
  | 'cpu'
  | 'layers'
  | 'hardDrive'
  | 'arrowRight'
  | 'send'
  | 'linkedin'
  | 'twitter'
  | 'github';

export type Icons = {
  [K in IconKey]: IconType;
};
