/** @jsxImportSource @emotion/react */
import { token } from '@atlaskit/tokens';
import css from 'design-system/css';
import usePressable from 'lib/use-pressable';
import Box from 'design-system/box';

const styles = css({
  buttonReset: {
    margin: 0,
    fontSize: 16,
    border: 0,
    fontWeight: 600,
    position: 'relative',
    overflow: 'hidden',
    flexShrink: 0,
    ':focus': {
      outline: 0,
    },
    ':focus-visible': {
      boxShadow: `0 0 0 2px var(--surface, ${token('color.background.default')}), 0 0 0 4px ${token(
        'color.border.focus'
      )}`,
    },
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
    <Box
      shouldForwardProps
      borderRadius="default"
      padding="medium"
      isPressed={isActive}
      isInteractive
      background={isDisabled ? 'disabled' : mappedAppearance}>
      <button
        {...buttonProps}
        {...props}
        type={type}
        disabled={isDisabled}
        css={styles.buttonReset}>
        {children}
      </button>
    </Box>
  );
}

export default Button;
