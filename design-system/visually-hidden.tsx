/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const visuallyHiddenStyles = css({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,
});

interface VisuallyHiddenProps {
  children?: React.ReactNode;
}

function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return <span css={visuallyHiddenStyles}>{children}</span>;
}

export default VisuallyHidden;
