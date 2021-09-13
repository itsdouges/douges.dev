/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import FocusRing from 'design-system/focus-ring';
import Pressable from 'design-system/pressable';

const styles = css({
  reset: {
    fontSize: 16,
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

  return (
    <Pressable onClick={onClick}>
      {(press) => (
        <FocusRing>
          <Box
            shouldForwardProps
            borderRadius="default"
            paddingX="large"
            paddingY="medium"
            background={mappedAppearance}>
            <a
              target={shouldOpenNewWindow ? '_blank' : ''}
              rel="noreferrer"
              href={href}
              {...props}
              {...press}
              css={styles.reset}>
              {children}
            </a>
          </Box>
        </FocusRing>
      )}
    </Pressable>
  );
}

export default LinkButton;
