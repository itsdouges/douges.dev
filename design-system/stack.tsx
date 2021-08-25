/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const stackStyles = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

interface StackProps {
  gap: number;
  children: JSX.Element | JSX.Element[];
}

function Stack({ children, gap }: StackProps) {
  return (
    <div css={stackStyles} style={{ gap: gap * 8 }}>
      {children}
    </div>
  );
}

export default Stack;
