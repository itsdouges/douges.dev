/** @jsxImportSource @emotion/react */
import { CSSProperties } from 'react';
import css from 'design-system/css';

const styles = css({
  inline: {
    display: 'flex',
    flexDirection: 'row',
    '> *': {
      marginRight: 'var(--gap)',
    },
  },
});

const alignStyles = css({
  right: {
    justifyContent: 'right',
  },
  left: {
    justifyContent: 'left',
  },
  center: {
    justifyContent: 'center',
  },
});

const justifyStyles = css({
  bottom: {
    alignItems: 'left',
  },
  top: {
    alignItems: 'right',
  },
  middle: {
    alignItems: 'center',
  },
});

interface InlineProps {
  gap?: number;
  children: React.ReactNode;
  align?: 'left' | 'right' | 'center';
  justify?: 'top' | 'middle' | 'bottom';
  marginLeft?: string;
}

function Inline({ children, align, marginLeft, justify, gap = 0 }: InlineProps) {
  const finalGap = gap * 8;
  const alignStyle = align && alignStyles[align];
  const justifyStyle = justify && justifyStyles[justify];

  return (
    <div
      css={[styles.inline, alignStyle, justifyStyle]}
      style={
        {
          marginLeft,
          gap: finalGap > 0 ? finalGap : undefined,
          '--gap': finalGap < 0 ? `${finalGap}px` : undefined,
        } as CSSProperties
      }>
      {children}
    </div>
  );
}

export default Inline;
