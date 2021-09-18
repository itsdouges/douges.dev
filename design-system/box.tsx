/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { token } from '@atlaskit/tokens';
import { ReactHTML, ForwardedRef } from 'react';
import { forwardRef } from 'lib/react';

export type SizeScale = keyof typeof paddingTopStyles;

const backgroundStyles = css({
  none: {},
  neutralSubtle: {
    color: token('color.text.highEmphasis'),
    backgroundColor: token('color.background.subtleNeutral.resting'),
  },
  transparent: {
    color: token('color.text.highEmphasis'),
    backgroundColor: 'transparent',
  },
  body: {
    color: token('color.text.highEmphasis'),
    backgroundColor: token('color.background.default'),
  },
  sunken: {
    color: token('color.text.highEmphasis'),
    backgroundColor: token('color.background.sunken'),
  },
  card: {
    color: token('color.text.highEmphasis'),
    backgroundColor: token('color.background.card'),
  },
  overlay: {
    color: token('color.text.highEmphasis'),
    backgroundColor: token('color.background.overlay'),
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
  brandBold: {
    color: token('color.text.onBold'),
    backgroundColor: token('color.background.boldBrand.resting'),
  },
  neutralBold: {
    color: token('color.text.onBold'),
    backgroundColor: token('color.background.boldNeutral.resting'),
  },
  subtleBorderedNeutral: {
    color: token('color.text.highEmphasis'),
    backgroundColor: token('color.background.subtleBorderedNeutral.resting'),
    border: `2px solid ${token('color.border.neutral')}`,
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

const borderTopStyles = css({
  none: {},
  neutral: {
    borderBlockStart: `2px solid ${token('color.border.neutral')}`,
  },
});

const borderRightStyles = css({
  none: {},
  neutral: {
    borderInlineEnd: `2px solid ${token('color.border.neutral')}`,
  },
});

const borderBottomStyles = css({
  none: {},
  neutral: {
    borderBlockEnd: `2px solid ${token('color.border.neutral')}`,
  },
});

const borderLeftStyles = css({
  none: {},
  neutral: {
    borderInlineStart: `2px solid ${token('color.border.neutral')}`,
  },
});

const paddingTopStyles = css({
  none: {},
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
  none: {},
  default: {
    borderRadius: 3,
    '::before,::after': {
      borderRadius: 3,
    },
  },
  round: {
    borderRadius: 8,
    '::before,::after': {
      borderRadius: 8,
    },
  },
});

const displayStyles = css({
  'block flow': {
    display: 'block',
  },
  'block flex': {
    display: 'flex',
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
  div: {},
  button: {
    border: 0,
    margin: 0,
  },
  a: {
    ':hover,:active': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
});

export interface PaddingProps {
  padding?: SizeScale;
  paddingTop?: SizeScale;
  paddingRight?: SizeScale;
  paddingBottom?: SizeScale;
  paddingLeft?: SizeScale;
  paddingX?: SizeScale;
  paddingY?: SizeScale;
}

export interface BorderProps {
  border?: keyof typeof borderTopStyles;
  borderTop?: keyof typeof borderTopStyles;
  borderRight?: keyof typeof borderRightStyles;
  borderBottom?: keyof typeof borderBottomStyles;
  borderLeft?: keyof typeof borderLeftStyles;
  borderX?: keyof typeof borderLeftStyles;
  borderY?: keyof typeof borderTopStyles;
}

type BoxHTMLElement = keyof ReactHTML;

interface BoxProps<TElement extends BoxHTMLElement> extends PaddingProps, BorderProps {
  children?: React.ReactNode;
  background?: keyof typeof backgroundStyles;
  borderRadius?: keyof typeof borderRadiusStyles;
  shadow?: keyof typeof shadowStyles;
  display?: keyof typeof displayStyles;
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
    borderBottom,
    borderLeft,
    borderRight,
    borderTop,
    borderX,
    borderY,
    display,
    border = 'none',
    background = 'none',
    borderRadius = 'none',
    padding = 'none',
    shadow = 'none',
    className,
    as: AsProp,
    ...props
  }: BoxProps<TElement> & BoxHTMLProps<TElement>,
  ref: ForwardedRef<HTMLElement>
) {
  const Component: 'div' = (AsProp || 'div') as any;
  const backgroundStyle = backgroundStyles[background];
  const shadowStyle = shadowStyles[shadow];
  const paddingTopStyle = paddingTopStyles[paddingTop || paddingY || padding];
  const paddingRightStyle = paddingRightStyles[paddingRight || paddingX || padding];
  const paddingBottomStyle = paddingBottomStyles[paddingBottom || paddingY || padding];
  const paddingLeftStyle = paddingLeftStyles[paddingLeft || paddingX || padding];
  const borderRadiusStyle = borderRadiusStyles[borderRadius];
  const borderTopStyle = borderTopStyles[borderTop || borderY || border];
  const borderRightStyle = borderRightStyles[borderRight || borderX || border];
  const borderBottomStyle = borderBottomStyles[borderBottom || borderY || border];
  const borderLeftStyle = borderLeftStyles[borderLeft || borderX || border];
  const displayStyle = display && displayStyles[display];
  const resetStyle = localResetStyles[Component];

  return (
    <Component
      ref={ref as any}
      css={[
        resetStyle,
        displayStyle,
        backgroundStyle,
        paddingTopStyle,
        paddingRightStyle,
        paddingBottomStyle,
        paddingLeftStyle,
        borderRadiusStyle,
        shadowStyle,
        borderTopStyle,
        borderRightStyle,
        borderBottomStyle,
        borderLeftStyle,
      ]}
      className={className}
      {...(props as {})}>
      {children}
    </Component>
  );
}

export default forwardRef(Box);
