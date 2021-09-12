/** @jsxImportSource @emotion/react */
import { token } from '@atlaskit/tokens';
import css from 'design-system/css';
import usePressable from 'lib/use-pressable';
import Box from 'design-system/box';
import FocusRing from 'design-system/focus-ring';

const styles = css({
  reset: {
    margin: 0,
    fontSize: 16,
    border: 0,
    fontWeight: 600,
    position: 'relative',
    overflow: 'hidden',
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

function Button({
  children,
  isSelected,
  onClick,
  appearance = 'neutralSubtle',
  type = 'button',
  isDisabled,
  ...props
}: ButtonProps) {
  const mappedAppearance = isSelected ? 'selected' : appearance;
  const { isActive, buttonProps } = usePressable({ onClick });

  return (
    <FocusRing>
      <Box
        shouldForwardProps
        borderRadius="default"
        paddingX="large"
        paddingY="medium"
        isPressed={isActive}
        isInteractive
        background={isDisabled ? 'disabled' : mappedAppearance}>
        <button {...buttonProps} {...props} type={type} disabled={isDisabled} css={styles.reset}>
          {children}
        </button>
      </Box>
    </FocusRing>
  );
}

export default Button;
