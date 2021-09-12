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
    boxShadow: token('shadow.card'),
  },
  overlay: {
    backgroundColor: token('color.background.overlay'),
    boxShadow: token('shadow.overlay'),
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
  subtleBorderedNeutral: {
    color: token('color.text.highEmphasis'),
    backgroundColor: token('color.background.subtleBorderedNeutral.resting'),
    border: `2px solid ${token('color.border.neutral')}`,
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
  isPressed?: boolean;
  isInteractive?: boolean;
  hasBorder?: boolean;
  style?: CSSProperties;
  shouldForwardProps?: boolean;
  width?: number;
  height?: number;
  maxWidth?: number;
  maxHeight?: number;
}

function Box({
  children,
  background = 'none',
  padding = 'none',
  borderRadius = 'none',
  isPressed,
  isInteractive: isHoverable,
  shouldForwardProps,
  hasBorder,
}: BoxProps) {
  const appear = backgroundStyles[background];
  const pad = paddingStyles[padding];
  const br = borderRadiusStyles[borderRadius];
  const hover = (backgroundUniqueHoverStyles as any)[background] || styles.hover;
  const border = (borderStyles as any)[background] || borderStyles.default;
  const isDisabled = background === 'disabled';

  return (
    <ClassNames>
      {({ css: cn }) => {
        const className = cn([
          appear,
          pad,
          br,
          isHoverable && !isDisabled && hover,
          hasBorder && border,
          isPressed && !isDisabled && styles.pressed,
        ]);

        if (shouldForwardProps) {
          return cloneElement(Children.only(children), {
            className: className,
          });
        }

        return <div className={className}>{children}</div>;
      }}
    </ClassNames>
  );
}

export default Box;
