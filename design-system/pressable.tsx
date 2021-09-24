/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { ClassNames } from '@emotion/react';
import token from 'design-system/token';
import usePressable, { UsePressable } from 'lib/use-pressable';

const styles = css({
  pressable: {
    userSelect: 'none',
    position: 'relative',
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0,
    },
    ':hover::before': {
      opacity: 1,
    },
  },
  push: {
    transform: 'scale(0.9)',
  },
});

const hoverStyles = css({
  default: {
    '::before': {
      backgroundColor: token('color.overlay.hover'),
    },
  },
  inverse: {
    '::before': {
      backgroundColor: token('color.overlay.inverse.hover'),
    },
  },
});

const pressedStyles = css({
  default: {
    '::before': {
      backgroundColor: token('color.overlay.pressed'),
    },
  },
  inverse: {
    '::before': {
      backgroundColor: token('color.overlay.inverse.pressed'),
    },
  },
});

interface PressableProps {
  children: (props: { className: string } & UsePressable['buttonProps']) => JSX.Element;
  onClick?: React.MouseEventHandler;
  isDisabled?: boolean;
  appearance?: 'default' | 'inverse';
  pressedAppearance?: 'push' | 'static' | 'none';
}

function Pressable({
  children,
  onClick,
  isDisabled,
  appearance = 'default',
  pressedAppearance = 'push',
}: PressableProps) {
  const { isPressed, buttonProps } = usePressable({ onClick });
  const hoverStyle = hoverStyles[appearance];
  const pressedStyle = pressedStyles[appearance];

  return (
    <ClassNames>
      {({ css: cn }) =>
        children({
          className: cn(
            !isDisabled &&
              pressedAppearance !== 'none' && [
                styles.pressable,
                hoverStyle,
                isPressed && [pressedStyle, pressedAppearance === 'push' && styles.push],
              ]
          ),
          ...buttonProps,
        })
      }
    </ClassNames>
  );
}

export default Pressable;
