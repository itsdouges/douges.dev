/** @jsxImportSource @emotion/react */
import { token } from '@atlaskit/tokens';
import css from 'design-system/css';

const textStyles = css({
  regular: {
    fontSize: 18,
    margin: 0,
  },
  small: {
    fontSize: 16,
    margin: 0,
  },
  tiny: {
    fontSize: 14,
    margin: 0,
  },
});

const colorStyles = css({
  low: { color: token('color.text.lowEmphasis') },
  medium: { color: token('color.text.mediumEmphasis') },
  high: { color: token('color.text.highEmphasis') },
  success: { color: token('color.text.success') },
  warning: { color: token('color.text.warning') },
  danger: { color: token('color.text.danger') },
  inherit: {},
});

interface TextProps {
  children: React.ReactNode;
  as?: 'span' | 'div' | 'p';
  color?: 'low' | 'medium' | 'high' | 'inherit' | 'warning' | 'success' | 'danger';
  size?: 'tiny' | 'small' | 'regular';
}

function Text({ children, as: Markup = 'span', color = 'inherit', size = 'regular' }: TextProps) {
  const colorStyle = colorStyles[color];
  const textStyle = textStyles[size];

  return <Markup css={[textStyle, colorStyle]}>{children}</Markup>;
}

export default Text;
