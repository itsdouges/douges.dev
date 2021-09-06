/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const stackStyles = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const textAlignLeft = css({
  textAlign: 'left',
});

const textAlignCenter = css({
  textAlign: 'center',
});

const textAlignRight = css({
  textAlign: 'right',
});

const textAlignMap = {
  left: textAlignCenter,
  center: textAlignCenter,
  right: textAlignRight,
};
interface StackProps {
  gap: number;
  children: React.ReactNode;
  textAlign?: 'center' | 'left' | 'right';
}

function Stack({ children, gap, textAlign }: StackProps) {
  const textAlignStyles = textAlign && textAlignMap[textAlign];

  return (
    <div css={[stackStyles, textAlignStyles]} style={{ gap: gap * 8 }}>
      {children}
    </div>
  );
}

export default Stack;
