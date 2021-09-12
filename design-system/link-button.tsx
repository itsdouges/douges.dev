/** @jsxImportSource @emotion/react */
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
    ':hover,:active': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
});

export interface LinkButtonProps {
  appearance?: 'brandBold' | 'transparent' | 'neutralSubtle';
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
  isSelected?: boolean;
  href: string;
  shouldOpenNewWindow?: boolean;
}

function LinkButton({
  children,
  isSelected,
  onClick,
  appearance = 'neutralSubtle',
  href,
  shouldOpenNewWindow,
  ...props
}: LinkButtonProps) {
  const mappedAppearance = isSelected ? 'selected' : appearance;
  const { isActive, buttonProps } = usePressable({ onClick });

  return (
    <FocusRing>
      <Box
        shouldForwardProps
        borderRadius="default"
        padding="medium"
        isPressed={isActive}
        isInteractive
        background={mappedAppearance}>
        <a
          target={shouldOpenNewWindow ? '__blank' : ''}
          href={href}
          {...buttonProps}
          {...props}
          css={styles.reset}>
          {children}
        </a>
      </Box>
    </FocusRing>
  );
}

export default LinkButton;
