/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const gridListStyles = css({
  display: 'grid',
  gridTemplateColumns: '1fr',
});

const twoColumnStyles = css({
  '@media screen and (min-width: 650px)': {
    gridTemplateColumns: '1fr 1fr',
  },
});

const threeColumnStyles = css({
  '@media screen and (min-width: 650px)': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@media screen and (min-width: 800px)': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
});

const columnsMap = {
  2: twoColumnStyles,
  3: threeColumnStyles,
};

interface GridProps {
  gap: number;
  columns: 2 | 3;
  children: React.ReactNode;
}

function Grid({ columns, children, gap }: GridProps) {
  const columnStyles = columnsMap[columns];

  return (
    <div style={{ gap: gap * 8 }} css={[gridListStyles, columnStyles]}>
      {children}
    </div>
  );
}

export default Grid;
