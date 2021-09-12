/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { ClassNames } from '@emotion/react';
import { token } from '@atlaskit/tokens';
import { CSSProperties, cloneElement, Children } from 'react';

const styles = css({
  pressed: {
    position: 'relative',
    transform: 'scale(0.95)',
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: token('color.overlay.pressed'),
    },
  },
  hover: {
    position: 'relative',
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: token('color.overlay.hover'),
      opacity: 0,
    },
    ':hover::before': {
      opacity: 1,
    },
  },
  borderRadius: {
    borderRadius: 3,
    '::before,::after': {
      borderRadius: 3,
    },
  },
});

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

const backgroundUniqueHoverStyles = css({
  subtleBorderedNeutral: {
    ':hover,:focus': {
      backgroundColor: 'transparent',
    },
  },
  card: {
    ':hover': {
      backgroundColor: token('color.background.overlay'),
      boxShadow: token('shadow.overlay'),
    },
  },
});

const borderStyles = css({
  default: {
    border: `2px solid ${token('color.border.neutral')}`,
  },
});

const paddingStyles = css({
  none: {},
  small: {
    padding: 4,
  },
  medium: {
    padding: 8,
  },
  large: {
    padding: 16,
  },
});

const borderRadiusStyles = css({
  none: {},
  default: {
    borderRadius: 3,
  },
});

interface BoxProps {
  children: JSX.Element;
  background?: keyof typeof backgroundStyles;
  padding?: keyof typeof paddingStyles;
  borderRadius?: keyof typeof borderRadiusStyles;
  shadow?: keyof typeof shadowStyles;
  isPressed?: boolean;
  isInteractive?: boolean;
  hasBorder?: boolean;
  style?: CSSProperties;
  shouldForwardProps?: boolean;
  width?: number;
  height?: number;
  maxWidth?: number;
  maxHeight?: number;
  className?: string;
}

function Box({
  children,
  background = 'none',
  padding = 'none',
  borderRadius = 'none',
  shadow = 'none',
  isPressed,
  isInteractive: isHoverable,
  shouldForwardProps,
  hasBorder,
  className,
}: BoxProps) {
  const backgroundStyle = backgroundStyles[background];
  const shadowStyle = shadowStyles[shadow];
  const paddingStyle = paddingStyles[padding];
  const borderRadiusStyle = borderRadiusStyles[borderRadius];
  const hoverStyle = (backgroundUniqueHoverStyles as any)[background] || styles.hover;
  const borderStyle = (borderStyles as any)[background] || borderStyles.default;
  const isDisabled = background === 'disabled';

  return (
    <ClassNames>
      {({ css: cn }) => {
        const boxClass = cn([
          backgroundStyle,
          paddingStyle,
          borderRadiusStyle,
          shadowStyle,
          isHoverable && !isDisabled && hoverStyle,
          hasBorder && borderStyle,
          isPressed && !isDisabled && styles.pressed,
          className,
        ]);

        if (shouldForwardProps) {
          return cloneElement(Children.only(children), {
            className: boxClass,
          });
        }

        return <div className={boxClass}>{children}</div>;
      }}
    </ClassNames>
  );
}

export default Box;
