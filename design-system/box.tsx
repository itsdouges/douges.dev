/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { ClassNames } from '@emotion/react';
import { token } from '@atlaskit/tokens';
import { cloneElement, Children } from 'react';

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
  medium: {
    paddingBlockStart: 8,
  },
  large: {
    paddingBlockStart: 12,
  },
  xlarge: {
    paddingBlockStart: 16,
  },
});

const paddingBottomStyles = css({
  none: {},
  small: {
    paddingBlockEnd: 4,
  },
  medium: {
    paddingBlockEnd: 8,
  },
  large: {
    paddingBlockEnd: 12,
  },
  xlarge: {
    paddingBlockEnd: 16,
  },
});

const paddingLeftStyles = css({
  none: {},
  small: {
    paddingInlineStart: 4,
  },
  medium: {
    paddingInlineStart: 8,
  },
  large: {
    paddingInlineStart: 12,
  },
  xlarge: {
    paddingInlineStart: 16,
  },
});

const paddingRightStyles = css({
  none: {},
  small: {
    paddingInlineEnd: 4,
  },
  medium: {
    paddingInlineEnd: 8,
  },
  large: {
    paddingInlineEnd: 12,
  },
  xlarge: {
    paddingInlineEnd: 16,
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

export interface PaddingProps {
  padding?: keyof typeof paddingTopStyles;
  paddingTop?: keyof typeof paddingTopStyles;
  paddingRight?: keyof typeof paddingRightStyles;
  paddingBottom?: keyof typeof paddingBottomStyles;
  paddingLeft?: keyof typeof paddingLeftStyles;
  paddingX?: keyof typeof paddingLeftStyles;
  paddingY?: keyof typeof paddingTopStyles;
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

interface BoxProps extends PaddingProps, BorderProps {
  children: React.ReactNode;
  background?: keyof typeof backgroundStyles;
  borderRadius?: keyof typeof borderRadiusStyles;
  shadow?: keyof typeof shadowStyles;
  shouldForwardProps?: boolean;
  className?: string;
}

function Box({
  children,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  shouldForwardProps,
  className,
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  borderX,
  borderY,
  border = 'none',
  background = 'none',
  borderRadius = 'none',
  padding = 'none',
  shadow = 'none',
}: BoxProps) {
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

  return (
    <ClassNames>
      {({ css: cn, cx }) => {
        const boxClass = cn([
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
          className,
        ]);

        if (shouldForwardProps) {
          if (typeof children !== 'object') {
            throw new Error();
          }

          const element = children as JSX.Element;

          return cloneElement(Children.only(element), {
            className: cx([boxClass, element.props.className]),
          });
        }

        return <div className={boxClass}>{children}</div>;
      }}
    </ClassNames>
  );
}

export default Box;
