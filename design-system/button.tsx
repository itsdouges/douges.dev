/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Pressable from 'design-system/pressable';
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

  return (
    <Pressable isDisabled={isDisabled} onClick={onClick}>
      {(pressable) => (
        <FocusRing>
          <Box
            shouldForwardProps
            borderRadius="default"
            paddingX="large"
            paddingY="medium"
            isInteractive
            background={isDisabled ? 'disabled' : mappedAppearance}>
            <button {...props} {...pressable} type={type} disabled={isDisabled} css={styles.reset}>
              {children}
            </button>
          </Box>
        </FocusRing>
      )}
    </Pressable>
  );
}

export default Button;
