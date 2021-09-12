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

function Stack({ children, gap, textAlign }: StackProps) {
  const textAlignStyles = textAlign && styles[textAlign];

  return (
    <div css={[styles.stack, textAlignStyles]} style={{ gap: gap * 8 }}>
      {children}
    </div>
  );
}

export default Stack;
