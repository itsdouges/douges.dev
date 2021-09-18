/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { ClassNames } from '@emotion/react';
import { token } from '@atlaskit/tokens';
import usePressable, { UsePressable } from 'lib/use-pressable';

const styles = css({
  pressable: {
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
  pressed: {
    position: 'relative',
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
  push: {
    transform: 'scale(0.95)',
  },
});

interface PressableProps {
  children: (props: { className: string } & UsePressable['buttonProps']) => JSX.Element;
  onClick?: React.MouseEventHandler;
  isDisabled?: boolean;
  pressedAppearance?: 'push' | 'static';
}

function Pressable({ children, onClick, isDisabled, pressedAppearance = 'push' }: PressableProps) {
  const { isPressed, buttonProps } = usePressable({ onClick });

  return (
    <ClassNames>
      {({ css: cn }) =>
        children({
          className: cn(
            !isDisabled && [
              styles.pressable,
              isPressed && styles.pressed,
              isPressed && pressedAppearance === 'push' && styles.push,
            ]
          ),
          ...buttonProps,
        })
      }
    </ClassNames>
  );
}

export default Pressable;
