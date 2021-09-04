/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CSSProperties } from 'react';

const inlineStyles = css({
  display: 'flex',
  flexDirection: 'row',
  '> *': {
    marginRight: 'var(--gap)',
  },
});

const alignRightStyles = css({
  justifyContent: 'right',
});

const alignLeftStyles = css({
  justifyContent: 'left',
});

const alignCenterStyles = css({
  justifyContent: 'center',
});

const alignMap = {
  left: alignLeftStyles,
  right: alignRightStyles,
  center: alignCenterStyles,
};

interface InlineProps {
  gap?: number;
  children: React.ReactNode;
  align?: 'left' | 'right' | 'center';
  marginLeft?: string;
}

function Inline({ children, align, marginLeft, gap = 0 }: InlineProps) {
  const finalGap = gap * 8;
  const alignStyles = align && alignMap[align];

  return (
    <div
      css={[inlineStyles, alignStyles]}
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
