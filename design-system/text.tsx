/** @jsxImportSource @emotion/react */
import { token } from '@atlaskit/tokens';
import css from 'design-system/css';
import Box, { Background } from 'design-system/box';

const styles = css({
  truncate: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  textAbovePressable: {
    zIndex: 1,
    position: 'relative',
  },
});

const alignStyles = css({
  start: {
    textAlign: 'start',
  },
  center: {
    textAlign: 'center',
  },
  end: {
    textAlign: 'end',
  },
});

const textSizes = css({
  large: {
    fontSize: 22,
  },
  regular: {
    fontSize: 18,
  },
  small: {
    fontSize: 16,
  },
  smaller: {
    fontSize: 14,
  },
  smallest: {
    fontSize: 12,
  },
});

const colorStyles = css({
  low: { color: token('color.text.lowEmphasis') },
  medium: { color: token('color.text.mediumEmphasis') },
  high: { color: token('color.text.highEmphasis') },
  success: { color: token('color.text.success') },
  warning: { color: token('color.text.warning') },
  brand: { color: token('color.text.brand') },
  danger: { color: token('color.text.danger') },
  discovery: { color: token('color.text.discovery') },
  selected: { color: token('color.text.selected') },
  link: { color: token('color.text.link.resting') },
  onBold: { color: token('color.text.onBold') },
  onBoldWarning: { color: token('color.text.onBoldWarning') },
  disabled: { color: token('color.text.disabled') },
  currentColor: { color: 'currentColor' },
});

const weightStyles = css({
  bold: {
    fontWeight: 500,
  },
  bolder: {
    fontWeight: 700,
  },
});

const textTransformStyles = css({
  uppercase: {
    textTransform: 'uppercase',
  },
});

const textDecorationStyles = css({
  underline: {
    textDecoration: 'underline',
  },
});

export type TextColor = keyof typeof colorStyles;
export type TextWeight = keyof typeof weightStyles;
export type TextSize = keyof typeof textSizes;

interface TextProps {
  children: React.ReactNode;
  as?: 'span' | 'div' | 'p';
  color?: keyof typeof colorStyles;
  size?: keyof typeof textSizes;
  weight?: keyof typeof weightStyles;
  transform?: keyof typeof textTransformStyles;
  decoration?: keyof typeof textDecorationStyles;
  shouldTruncate?: boolean;
  align?: keyof typeof alignStyles;
  background?: Background;
}

function Text({
  children,
  as: element = 'span',
  color,
  size = 'regular',
  weight,
  transform,
  decoration,
  align,
  shouldTruncate,
  background,
}: TextProps) {
  const colorStyle = colorStyles[color!];
  const textSize = textSizes[size];
  const weightStyle = weightStyles[weight!];
  const textTransformStyle = textTransformStyles[transform!];
  const textDecorationStyle = textDecorationStyles[decoration!];
  const alignStyle = alignStyles[align!];

  return (
    <Box
      as={element}
      background={background}
      css={[
        alignStyle,
        styles.textAbovePressable,
        textSize,
        shouldTruncate && styles.truncate,
        colorStyle,
        weightStyle,
        textTransformStyle,
        textDecorationStyle,
      ]}>
      {children}
    </Box>
  );
}

export default Text;
