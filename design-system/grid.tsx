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
interface GridProps {
  gap: number;
  columns: 2 | 3;
  children: React.ReactNode;
}

function Grid({ columns, children, gap = 0 }: GridProps) {
  const columnStyles = styles[columns];

  return (
    <div style={{ gap: gap !== 0 ? gap * 8 : undefined }} css={[styles.grid, columnStyles]}>
      {children}
    </div>
  );
}

export default Grid;
