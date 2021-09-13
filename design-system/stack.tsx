/** @jsxImportSource @emotion/react */
import css from 'design-system/css';

const styles = css({
  stack: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
});

const alignStyles = css({
  none: {},
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
});

const gapStyles = css({
  none: {},
  small: {
    gap: 4,
  },
  regular: {
    gap: 8,
  },
  medium: {
    gap: 12,
  },
  large: {
    gap: 16,
  },
  xlarge: {
    gap: 24,
  },
});

interface StackProps {
  children: React.ReactNode;
  gap?: keyof typeof gapStyles;
  textAlign?: 'center' | 'left' | 'right' | 'none';
}

function Stack({ children, gap = 'none', textAlign = 'none' }: StackProps) {
  const alignStyle = alignStyles[textAlign];
  const gapStyle = gapStyles[gap];

  return <div css={[styles.stack, alignStyle, gapStyle]}>{children}</div>;
}

export default Stack;
