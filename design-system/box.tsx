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

const borderStyles = css({
  none: {},
  neutral: {
    border: `2px solid ${token('color.border.neutral')}`,
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

interface BoxProps extends PaddingProps {
  children: React.ReactNode;
  background?: keyof typeof backgroundStyles;
  borderRadius?: keyof typeof borderRadiusStyles;
  shadow?: keyof typeof shadowStyles;
  border?: keyof typeof borderStyles;
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
  const borderStyle = borderStyles[border];

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
          borderStyle,
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
