/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { createContext } from 'react';
import token from 'design-system/token';
import { ForwardedRef, useContext } from 'react';
import { forwardRef } from 'lib/react';

const BoxContext = createContext<Background>('body');

export const useBoxBackground = (): Background => {
  const context = useContext(BoxContext);
  return context;
};

const backgroundStyles = css({
  inverse: {
    color: 'currentColor',
    backgroundColor: token('color.background.inverse'),
  },
  warningInverse: {
    color: 'currentColor',
    backgroundColor: token('color.background.warning.inverse'),
  },
  accentBlueSubtle: {
    backgroundColor: token('color.accent.subtleBlue'),
  },
  accentRedSubtle: {
    backgroundColor: token('color.accent.subtleRed'),
  },
  accentGreenSubtle: {
    backgroundColor: token('color.accent.subtleGreen'),
  },
  accentMagentaSubtle: {
    backgroundColor: token('color.accent.subtleMagenta'),
  },
  accentOrangeSubtle: {
    backgroundColor: token('color.accent.subtleOrange'),
  },
  accentPurpleSubtle: {
    backgroundColor: token('color.accent.subtlePurple'),
  },
  accentTealSubtle: {
    backgroundColor: token('color.accent.subtleTeal'),
  },
  accentBlueBold: {
    backgroundColor: token('color.accent.boldBlue'),
  },
  accentRedBold: {
    backgroundColor: token('color.accent.boldRed'),
  },
  accentGreenBold: {
    backgroundColor: token('color.accent.boldGreen'),
  },
  accentOrangeBold: {
    backgroundColor: token('color.accent.boldOrange'),
  },
  accentPurpleBold: {
    backgroundColor: token('color.accent.boldPurple'),
  },
  accentTealBold: {
    backgroundColor: token('color.accent.boldTeal'),
  },
  blanket: {
    backgroundColor: token('color.background.blanket'),
  },
  body: {
    backgroundColor: token('color.background.default'),
  },
  sunken: {
    backgroundColor: token('color.background.sunken'),
  },
  card: {
    backgroundColor: token('color.background.card'),
  },
  overlay: {
    backgroundColor: token('color.background.overlay'),
  },
  transparent: {
    color: 'currentColor',
    backgroundColor: 'transparent',
  },
  disabled: {
    color: token('color.text.disabled'),
    backgroundColor: token('color.background.disabled'),
    cursor: 'not-allowed',
  },
  selected: {
    color: token('color.text.selected'),
    backgroundColor: token('color.background.selected.resting'),
  },
  neutralBold: {
    color: token('color.text.onBold'),
    backgroundColor: token('color.background.boldNeutral.resting'),
  },
  brandBold: {
    color: token('color.text.onBold'),
    backgroundColor: token('color.background.boldBrand.resting'),
  },
  dangerBold: {
    color: token('color.text.onBold'),
    backgroundColor: token('color.background.boldDanger.resting'),
  },
  successBold: {
    color: token('color.text.onBold'),
    backgroundColor: token('color.background.boldSuccess.resting'),
  },
  discoveryBold: {
    color: token('color.text.onBold'),
    backgroundColor: token('color.background.boldDiscovery.resting'),
  },
  warningBold: {
    color: token('color.text.onBoldWarning'),
    backgroundColor: token('color.background.boldWarning.resting'),
  },
  neutralSubtle: {
    color: 'currentColor',
    backgroundColor: token('color.background.subtleNeutral.resting'),
  },
  brandSubtle: {
    color: token('color.text.brand'),
    backgroundColor: token('color.background.subtleBrand.resting'),
  },
  dangerSubtle: {
    color: token('color.text.danger'),
    backgroundColor: token('color.background.subtleDanger.resting'),
  },
  successSubtle: {
    color: token('color.text.success'),
    backgroundColor: token('color.background.subtleSuccess.resting'),
  },
  discoverySubtle: {
    color: token('color.text.discovery'),
    backgroundColor: token('color.background.subtleDiscovery.resting'),
  },
  warningSubtle: {
    color: token('color.text.warning'),
    backgroundColor: token('color.background.subtleWarning.resting'),
  },
});

const shadowStyles = css({
  none: {},
  card: {
    boxShadow: token('shadow.card'),
  },
  overlay: {
    boxShadow: token('shadow.overlay'),
  },
});

const borderColorStyles = css({
  currentColor: {
    '--ds-box-border-color': 'currentColor',
  },
  default: {
    '--ds-box-border-color': token('color.background.default'),
  },
  neutral: {
    '--ds-box-border-color': token('color.border.neutral'),
  },
  focus: {
    '--ds-box-border-color': token('color.border.focus'),
  },
  brand: {
    '--ds-box-border-color': token('color.iconBorder.brand'),
  },
  danger: {
    '--ds-box-border-color': token('color.iconBorder.danger'),
  },
  success: {
    '--ds-box-border-color': token('color.iconBorder.success'),
  },
  discovery: {
    '--ds-box-border-color': token('color.iconBorder.discovery'),
  },
  warning: {
    '--ds-box-border-color': token('color.iconBorder.warning'),
  },
});

const borderStyles = css({
  none: {},
  full: {
    boxShadow: `inset 0 0 0 2px var(--ds-box-border-color)`,
  },
  top: {
    boxShadow: `0 -2px 0 0 var(--ds-box-border-color)`,
  },
  right: {
    boxShadow: `inset -2px 0 0 0 var(--ds-box-border-color)`,
  },
  bottom: {
    boxShadow: `inset 0 -2px 0 0 var(--ds-box-border-color)`,
  },
  left: {
    boxShadow: `inset 2px 0 0 0 var(--ds-box-border-color)`,
  },
});

const widthStyles = css({
  auto: {},
  xsmall: {
    inlineSize: 20,
  },
  small: {
    inlineSize: 24,
  },
  medium: {
    inlineSize: 32,
  },
  large: {
    inlineSize: 40,
  },
  xlarge: {
    inlineSize: 48,
  },
  full: {
    inlineSize: '100%',
  },
});

const heightStyles = css({
  auto: {},
  xsmall: {
    blockSize: 20,
  },
  small: {
    blockSize: 24,
  },
  medium: {
    blockSize: 32,
  },
  large: {
    blockSize: 40,
  },
  xlarge: {
    blockSize: 48,
  },
  full: {
    blockSize: '100%',
  },
});

const paddingTopStyles = css({
  none: {},
  xsmall: {
    paddingBlockStart: 2,
  },
  small: {
    paddingBlockStart: 4,
  },
  regular: {
    paddingBlockStart: 8,
  },
  medium: {
    paddingBlockStart: 12,
  },
  large: {
    paddingBlockStart: 16,
  },
  xlarge: {
    paddingBlockStart: 24,
  },
});

const paddingBottomStyles = css({
  none: {},
  xsmall: {
    paddingBlockEnd: 2,
  },
  small: {
    paddingBlockEnd: 4,
  },
  regular: {
    paddingBlockEnd: 8,
  },
  medium: {
    paddingBlockEnd: 12,
  },
  large: {
    paddingBlockEnd: 16,
  },
  xlarge: {
    paddingBlockEnd: 24,
  },
});

const paddingLeftStyles = css({
  none: {},
  xsmall: {
    paddingInlineStart: 2,
  },
  small: {
    paddingInlineStart: 4,
  },
  regular: {
    paddingInlineStart: 8,
  },
  medium: {
    paddingInlineStart: 12,
  },
  large: {
    paddingInlineStart: 16,
  },
  xlarge: {
    paddingInlineStart: 24,
  },
});

const paddingRightStyles = css({
  none: {},
  xsmall: {
    paddingInlineEnd: 2,
  },
  small: {
    paddingInlineEnd: 4,
  },
  regular: {
    paddingInlineEnd: 8,
  },
  medium: {
    paddingInlineEnd: 12,
  },
  large: {
    paddingInlineEnd: 16,
  },
  xlarge: {
    paddingInlineEnd: 24,
  },
});

const borderRadiusStyles = css({
  declaration: {
    borderRadius: 'var(--ds-box-br)',
    '::before,::after': {
      borderRadius: 'var(--ds-box-br)',
    },
  },
  none: {
    '--ds-box-br': ' ',
  },
  default: {
    '--ds-box-br': '3px',
  },
  rounded: {
    '--ds-box-br': '12px',
  },
  circle: {
    '--ds-box-br': '50%',
  },
});

const displayStyles = css({
  'block flow': {
    display: 'block',
  },
  'block flex': {
    display: 'flex',
    flexDirection: 'column',
  },
  'inline flex': {
    display: 'inline-flex',
  },
  'block grid': {
    display: 'grid',
  },
  'inline grid': {
    display: 'inline-grid',
  },
});

const localResetStyles = css({
  base: {
    boxSizing: 'border-box',
    padding: 0,
    border: 0,
    outline: 0,
    verticalAlign: 'baseline',
    WebkitTapHighlightColor: 'transparent',
  },
  pre: {
    margin: 0,
  },
  div: {},
  button: {},
  a: {
    ':hover,:active': {
      color: 'initial',
      textDecoration: 'none',
    },
  },
});

export interface PaddingProps {
  padding?: Spacing;
  paddingTop?: Spacing;
  paddingRight?: Spacing;
  paddingBottom?: Spacing;
  paddingLeft?: Spacing;
  paddingX?: Spacing;
  paddingY?: Spacing;
}

export interface BorderProps {
  border?: Border;
  borderColor?: BorderColor;
}

export interface SizeProps {
  size?: Size;
  width?: Size;
  height?: Size;
}

export type Spacing = keyof typeof paddingTopStyles;
export type Background = keyof typeof backgroundStyles;
export type Shadow = keyof typeof shadowStyles;
export type Border = keyof typeof borderStyles;
export type BorderColor = keyof typeof borderColorStyles;
export type BorderRadius = keyof Omit<typeof borderRadiusStyles, 'declaration'>;
export type Size = keyof typeof widthStyles;
export type Display = keyof typeof displayStyles;

export type SemanticNames = {
  default: 'neutralSubtle';
  success: 'successSubtle';
  removed: 'dangerSubtle';
  inprogress: 'brandSubtle';
  new: 'discoverySubtle';
  moved: 'warningSubtle';
  defaultBold: 'neutralBold';
  successBold: 'successBold';
  removedBold: 'dangerBold';
  inprogressBold: 'brandBold';
  newBold: 'discoveryBold';
  movedBold: 'warningBold';
};

export type BoxHTMLElement = keyof JSX.IntrinsicElements;

export interface BoxProps<TElement extends BoxHTMLElement>
  extends PaddingProps,
    BorderProps,
    SizeProps {
  children?: React.ReactNode;
  background?: Background;
  borderRadius?: BorderRadius;
  shadow?: Shadow;
  display?: Display;
  className?: string;
  as?: TElement;
}

type BoxHTMLProps<TElement extends BoxHTMLElement> = Omit<
  JSX.IntrinsicElements[TElement],
  'className' | 'width' | 'height' | 'size' | 'marginWidth' | 'marginHeight' | 'cellPadding' | 'as'
>;

function Box<TElement extends BoxHTMLElement = 'div'>(
  {
    children,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    paddingX,
    paddingY,
    display,
    className,
    as: AsProp,
    width,
    height,
    borderColor,
    border,
    shadow,
    background,
    borderRadius = 'none',
    padding = 'none',
    size = 'auto',
    ...props
  }: BoxProps<TElement> & BoxHTMLProps<TElement>,
  ref: ForwardedRef<HTMLElement>
) {
  const Component: 'div' = (AsProp || 'div') as any;
  const backgroundStyle = background && backgroundStyles[background];
  const shadowStyle = shadow && shadowStyles[shadow];
  const paddingTopStyle = paddingTopStyles[paddingTop || paddingY || padding];
  const paddingRightStyle = paddingRightStyles[paddingRight || paddingX || padding];
  const paddingBottomStyle = paddingBottomStyles[paddingBottom || paddingY || padding];
  const paddingLeftStyle = paddingLeftStyles[paddingLeft || paddingX || padding];
  const borderRadiusStyle = borderRadiusStyles[borderRadius];
  const borderStyle = border && borderStyles[border];
  const borderColorStyle = borderColor && borderColorStyles[borderColor];
  const displayStyle = display && displayStyles[display];
  const resetStyle = localResetStyles[Component];
  const widthStyle = widthStyles[width || size];
  const heightStyle = heightStyles[height || size];

  return (
    <BoxContext.Provider value={background || 'body'}>
      <Component
        ref={ref as ForwardedRef<HTMLDivElement>}
        css={[
          localResetStyles.base,
          resetStyle,
          displayStyle,
          backgroundStyle,
          paddingTopStyle,
          paddingRightStyle,
          paddingBottomStyle,
          paddingLeftStyle,
          borderRadiusStyles.declaration,
          borderRadiusStyle,
          borderStyle && borderColorStyle,
          shadowStyle || borderStyle,
          widthStyle,
          heightStyle,
        ]}
        className={className}
        {...(props as unknown)}>
        {children}
      </Component>
    </BoxContext.Provider>
  );
}

export default forwardRef(Box);
