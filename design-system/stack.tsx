/** @jsxImportSource @emotion/react */
import css from 'design-system/css';

const styles = css({
  stack: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
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

interface StackProps {
  gap: number;
  children: React.ReactNode;
  textAlign?: 'center' | 'left' | 'right';
}

function Stack({ children, gap = 0, textAlign }: StackProps) {
  const textAlignStyles = textAlign && styles[textAlign];

  return (
    <div css={[styles.stack, textAlignStyles]} style={{ gap: gap !== 0 ? gap * 8 : undefined }}>
      {children}
    </div>
  );
}

export default Stack;
