/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';

const textStyles = css({
  fontSize: 18,
  margin: 0,
});

const isSmallStyles = css({
  fontSize: 16,
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

const success = css({
  color: token('color.text.success'),
});

const warning = css({
  color: token('color.text.warning'),
});

const danger = css({
  color: token('color.text.danger'),
});

const emphasisColorMap = {
  low: lowEmphasisStyles,
  medium: mediumEmphasisStyles,
  high: highEmphasisStyles,
  inherit: undefined,
  success,
  warning,
  danger,
};

interface TextProps {
  children: React.ReactNode;
  as?: 'span' | 'div' | 'p';
  color?: 'low' | 'medium' | 'high' | 'inherit' | 'warning' | 'success' | 'danger';
  isSmall?: boolean;
}

function Text({ children, as: Markup = 'span', color = 'high', isSmall }: TextProps) {
  const colorStyles = emphasisColorMap[color];
  return <Markup css={[textStyles, colorStyles, isSmall && isSmallStyles]}>{children}</Markup>;
}

export default Text;
