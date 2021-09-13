/** @jsxImportSource @emotion/react */
import css from 'design-system/css';

const styles = css({
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
  },
  2: {
    '@media screen and (min-width: 650px)': {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  3: {
    '@media screen and (min-width: 650px)': {
      gridTemplateColumns: '1fr 1fr',
    },
    '@media screen and (min-width: 800px)': {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
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

interface GridProps {
  gap: keyof typeof gapStyles;
  columns: 2 | 3;
  children: React.ReactNode;
}

function Grid({ columns, children, gap = 'none' }: GridProps) {
  const columnStyles = styles[columns];
  const gapStyle = gapStyles[gap];

  return <div css={[styles.grid, columnStyles, gapStyle]}>{children}</div>;
}

export default Grid;
