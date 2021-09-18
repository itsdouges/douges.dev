/** @jsxImportSource @emotion/react */
import { token } from '@atlaskit/tokens';
import css from 'design-system/css';

const styles = css({
  truncate: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
});

const textStyles = css({
  regular: {
    fontSize: 18,
    margin: 0,
  },
  small: {
    fontSize: 16,
    margin: 0,
  },
  smaller: {
    fontSize: 14,
    margin: 0,
  },
  smallest: {
    fontSize: 11,
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

const weightStyles = css({
  bold: {
    fontWeight: 500,
  },
  bolder: {
    fontWeight: 700,
  },
  regular: {},
});

const textTransformStyles = css({
  none: {},
  uppercase: {
    textTransform: 'uppercase',
  },
});

interface TextProps {
  children: React.ReactNode;
  as?: 'span' | 'div' | 'p';
  color?: keyof typeof colorStyles;
  size?: keyof typeof textStyles;
  weight?: keyof typeof weightStyles;
  transform?: keyof typeof textTransformStyles;
  shouldTruncate?: boolean;
}

function Text({
  children,
  as: Markup = 'span',
  color = 'inherit',
  size = 'regular',
  weight = 'regular',
  transform = 'none',
  shouldTruncate,
}: TextProps) {
  const colorStyle = colorStyles[color];
  const textStyle = textStyles[size];
  const weightStyle = weightStyles[weight];
  const textTransformStyle = textTransformStyles[transform];

  return (
    <Markup
      css={[
        textStyle,
        shouldTruncate && styles.truncate,
        colorStyle,
        weightStyle,
        textTransformStyle,
      ]}>
      {children}
    </Markup>
  );
}

export default Text;
