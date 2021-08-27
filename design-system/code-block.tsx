/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';

interface CodeBlockProps {
  children: string;
}

const codeBlockStyles = css({
  borderRadius: 3,
  backgroundColor: token('color.background.subtleNeutral.resting'),
  padding: '16px',
  margin: 0,
});

function CodeBlock({ children }: CodeBlockProps) {
  return (
    <pre css={codeBlockStyles}>
      <code>{children}</code>
    </pre>
  );
}

export default CodeBlock;
