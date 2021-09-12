/** @jsxImportSource @emotion/react */
import css from 'design-system/css';

const styles = css({
  hidden: {
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1,
  },
});

interface VisuallyHiddenProps {
  children?: React.ReactNode;
}

function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return <span css={styles.hidden}>{children}</span>;
}

export default VisuallyHidden;
