/** @jsxImportSource @emotion/react */
import css from 'design-system/css';

const styles = css({
  inline: {
    display: 'flex',
    flexDirection: 'row',
  },
});

const gapStyles = css({
  none: {},
  '-small': {
    '> *': { marginInlineEnd: -4 },
  },
  '-regular': {
    '> *': { marginInlineEnd: -8 },
  },
  '-medium': {
    '> *': { marginInlineEnd: -12 },
  },
  '-large': {
    '> *': { marginInlineEnd: -16 },
  },
  '-xlarge': {
    '> *': { marginInlineEnd: -24 },
  },
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
});

const inlineAlignStyles = css({
  end: {
    justifyContent: 'flex-end',
  },
  start: {
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
  },
  stretch: {
    justifyContent: 'stretch',
  },
});

const blockAlignStyles = css({
  bottom: {
    alignItems: 'flex-end',
  },
  top: {
    alignItems: 'flex-start',
  },
  middle: {
    alignItems: 'center',
  },
  stretch: {
    alignItems: 'stretch',
  },
});

interface InlineProps {
  children: React.ReactNode;
  gap?: keyof typeof gapStyles;
  inlineAlign?: keyof typeof inlineAlignStyles;
  blockAlign?: keyof typeof blockAlignStyles;
  marginLeft?: string;
  as?: 'div' | 'nav';
}

function Inline({
  children,
  marginLeft,
  inlineAlign = 'start',
  blockAlign = 'top',
  as: Component = 'div',
  gap = 'none',
}: InlineProps) {
  const gapStyle = gapStyles[gap];
  const alignStyle = inlineAlignStyles[inlineAlign];
  const justifyStyle = blockAlignStyles[blockAlign];

  return (
    <Component
      css={[styles.inline, alignStyle, justifyStyle, gapStyle]}
      style={{
        marginLeft,
      }}>
      {children}
    </Component>
  );
}

export default Inline;
