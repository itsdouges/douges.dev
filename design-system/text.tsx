/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';

const textStyles = css({
  fontSize: 18,
  margin: 0,
});

const lowEmphasisStyles = css({
  color: token('color.text.lowEmphasis'),
});

const mediumEmphasisStyles = css({
  color: token('color.text.mediumEmphasis'),
});

const highEmphasisStyles = css({
  color: token('color.text.highEmphasis'),
});

const emphasisColorMap = {
  low: lowEmphasisStyles,
  medium: mediumEmphasisStyles,
  high: highEmphasisStyles,
  inherit: undefined,
};

interface TextProps {
  children: React.ReactNode;
  as?: 'span' | 'div' | 'p';
  emphasis?: 'low' | 'medium' | 'high' | 'inherit';
}

function Text({ children, as: Markup = 'span', emphasis = 'high' }: TextProps) {
  const colorStyles = emphasisColorMap[emphasis];
  return <Markup css={[textStyles, colorStyles]}>{children}</Markup>;
}

export default Text;
