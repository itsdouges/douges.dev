/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';

const textStyles = css({
  fontSize: 18,
  margin: 0,
});

const lowColorStyles = css({
  color: token('color.text.lowEmphasis'),
});

const mediumColorStyles = css({
  color: token('color.text.mediumEmphasis'),
});

const colorMap = {
  low: lowColorStyles,
  medium: mediumColorStyles,
  inherit: undefined,
};

interface TextProps {
  children: React.ReactNode;
  as?: 'span' | 'div' | 'p';
  color?: 'low' | 'medium' | 'inherit';
}

function Text({ children, as: Markup = 'span', color = 'inherit' }: TextProps) {
  const colorStyles = colorMap[color];
  return <Markup css={[textStyles, colorStyles]}>{children}</Markup>;
}

export default Text;
