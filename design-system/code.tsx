/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';

interface CodeProps {
  children: string;
}

const codeStyles = css({
  backgroundColor: token('color.background.subtleNeutral.resting'),
  padding: '4px 6px',
  borderRadius: 3,
});

function Code({ children }: CodeProps) {
  return <code css={codeStyles}>{children}</code>;
}

export default Code;
