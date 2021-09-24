/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Pressable from 'design-system/pressable';
import Box, { useBoxBackground } from 'design-system/box';
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
  inverted: 'inverse',
} as const;

export interface ButtonProps {
  appearance?: keyof typeof appearanceBgMap;
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
  const parentBackground = useBoxBackground();
  const shouldUseWarningInverseBackground =
    parentBackground?.startsWith('warning') && appearance === 'inverted';
  const background = shouldUseWarningInverseBackground
    ? 'warningInverse'
    : appearanceBgMap[mappedAppearance];
  const pressableAppearance = shouldUseWarningInverseBackground ? 'inverse' : 'default';

  return (
    <Pressable
      appearance={pressableAppearance}
      isDisabled={isDisabled}
      onClick={onClick}
      pressedAppearance="static">
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
