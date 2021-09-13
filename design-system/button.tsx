/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Pressable from 'design-system/pressable';
import Box from 'design-system/box';
import FocusRing from 'design-system/focus-ring';
import { forwardRef } from 'react';

const styles = css({
  reset: {
    margin: 0,
    fontSize: 16,
    border: 0,
    fontWeight: 600,
    position: 'relative',
    flexShrink: 0,
  },
});

export interface ButtonProps {
  appearance?: 'brandBold' | 'transparent' | 'neutralSubtle';
  type?: 'submit' | 'button';
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
  isDisabled?: boolean;
  isSelected?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    isSelected,
    onClick,
    appearance = 'neutralSubtle',
    type = 'button',
    isDisabled,
    ...props
  },
  ref
) {
  const mappedAppearance = isSelected ? 'selected' : appearance;

  return (
    <Pressable isDisabled={isDisabled} onClick={onClick}>
      {(pressable) => (
        <FocusRing>
          <Box
            shouldForwardProps
            borderRadius="default"
            paddingX="large"
            paddingY="medium"
            background={isDisabled ? 'disabled' : mappedAppearance}>
            <button
              {...props}
              {...pressable}
              ref={ref}
              type={type}
              disabled={isDisabled}
              css={styles.reset}>
              {children}
            </button>
          </Box>
        </FocusRing>
      )}
    </Pressable>
  );
});

export default Button;
