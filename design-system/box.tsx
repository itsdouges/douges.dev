/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { ClassNames } from '@emotion/react';
import { token } from '@atlaskit/tokens';
import { CSSProperties, cloneElement, Children } from 'react';

const styles = css({
  active: {
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

const appearanceStyles = css({
  none: {},
  'subtle-neutral': {
    color: token('color.text.highEmphasis'),
    backgroundColor: token('color.background.subtleNeutral.resting'),
  },
  transparent: {
    color: token('color.text.highEmphasis'),
    backgroundColor: 'transparent',
  },
  default: {
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
  'bold-brand': {
    color: token('color.text.onBold'),
    backgroundColor: token('color.background.boldBrand.resting'),
  },
  'subtle-bordered-neutral': {
    color: token('color.text.highEmphasis'),
    backgroundColor: token('color.background.subtleBorderedNeutral.resting'),
  },
});

const appearanceUniqueHoverStyles = css({
  'subtle-bordered-neutral': {
    ':hover,:focus': {
      backgroundColor: 'transparent',
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

interface BoxProps {
  children: JSX.Element;
  appearance?: keyof typeof appearanceStyles;
  padding?: keyof typeof paddingStyles;
  hasBorderRadius?: boolean;
  isActive?: boolean;
  isHoverable?: boolean;
  hasBorder?: boolean;
  style?: CSSProperties;
  shouldForwardProps?: boolean;
}

function Box({
  children,
  appearance = 'none',
  padding = 'none',
  hasBorderRadius,
  isActive,
  isHoverable,
  shouldForwardProps,
  hasBorder,
}: BoxProps) {
  const appear = appearanceStyles[appearance];
  const pad = paddingStyles[padding];
  const hover = (appearanceUniqueHoverStyles as any)[appearance] || styles.hover;
  const border = (borderStyles as any)[appearance] || borderStyles.default;
  const isDisabled = appearance === 'disabled';

  return (
    <ClassNames>
      {({ css: cn }) => {
        const className = cn([
          appear,
          pad,
          hasBorderRadius && styles.borderRadius,
          isHoverable && !isDisabled && hover,
          hasBorder && border,
          isActive && !isDisabled && styles.active,
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
