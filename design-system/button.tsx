/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Pressable from 'design-system/pressable';
import Box from 'design-system/box';
import FocusRing from 'design-system/focus-ring';
import { forwardRef } from 'react';
import Text from 'design-system/text';

const styles = css({
  button: {
    position: 'relative',
    overflow: 'hidden',
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
            as="button"
            borderRadius="default"
            paddingX="medium"
            paddingY="regular"
            background={isDisabled ? 'disabled' : mappedAppearance}
            css={styles.button}
            type={type}
            disabled={isDisabled}
            ref={ref}
            {...pressable}
            {...props}>
            <Text size="small" weight="bold">
              {children}
            </Text>
          </Box>
        </FocusRing>
      )}
    </Pressable>
  );
});

export default Button;
