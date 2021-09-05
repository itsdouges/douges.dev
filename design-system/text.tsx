/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const textStyles = css({
  fontSize: 18,
  margin: 0,
});

interface TextProps {
  children: React.ReactNode;
  as?: 'span' | 'div' | 'p';
}

function Text({ children, as: Markup = 'span' }: TextProps) {
  return <Markup css={textStyles}>{children}</Markup>;
}

export default Text;
