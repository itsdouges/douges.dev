/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Pressable from 'design-system/pressable';
import Box from 'design-system/box';
import FocusRing from 'design-system/focus-ring';
import { forwardRef } from 'react';
import Text from 'design-system/text';

const styles = css({
  button: {
    overflow: 'hidden',
    lineHeight: 1,
    flexShrink: 0,
  },
});

export const appearanceBgMap = {
  default: 'neutralSubtle',
  primary: 'brandBold',
  subtle: 'transparent',
  warning: 'warningBold',
  danger: 'dangerBold',
  selected: 'selected',
} as const;

export interface ButtonProps {
  appearance?: 'default' | 'primary' | 'subtle' | 'warning' | 'danger';
  type?: 'submit' | 'button';
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
  isDisabled?: boolean;
  isSelected?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, isSelected, onClick, appearance = 'default', type = 'button', isDisabled, ...props },
  ref
) {
  const mappedAppearance = isSelected ? 'selected' : appearance;
  const background = appearanceBgMap[mappedAppearance];

  return (
    <Pressable isDisabled={isDisabled} onClick={onClick} appearance="static">
      {(pressable) => (
        <FocusRing>
          <Box
            as="button"
            borderRadius="default"
            paddingX="medium"
            paddingY="regular"
            background={isDisabled ? 'disabled' : background}
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
