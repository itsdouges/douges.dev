/** @jsxImportSource @emotion/react */
import css from 'design-system/css';

const styles = css({
  stack: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
});

const inlineAlignStyles = css({
  end: {
    alignItems: 'flex-end',
  },
  start: {
    alignItems: 'flex-start',
  },
  center: {
    alignItems: 'center',
  },
  stretch: {
    alignItems: 'stretch',
  },
});

const gapStyles = css({
  small: {
    gap: 4,
  },
  regular: {
    gap: 8,
  },
  medium: {
    gap: 12,
  },
  large: {
    gap: 16,
  },
  xlarge: {
    gap: 24,
  },
  xxlarge: {
    gap: 40,
  },
  xxxlarge: {
    gap: 52,
  },
});

const widthStyles = css({
  full: {
    inlineSize: '100%',
  },
});

type Gap = keyof typeof gapStyles;
type InlineAlign = keyof typeof inlineAlignStyles;
type Width = keyof typeof widthStyles;

interface StackProps {
  children: React.ReactNode;
  gap?: Gap;
  inlineAlign?: InlineAlign;
  width?: Width;
}

function Stack({ children, gap, inlineAlign = 'start', width }: StackProps) {
  const gapStyle = gapStyles[gap!];
  const inlineStyle = inlineAlignStyles[inlineAlign];
  const widthStyle = widthStyles[width!];

  return <div css={[styles.stack, gapStyle, inlineStyle, widthStyle]}>{children}</div>;
}

export default Stack;
