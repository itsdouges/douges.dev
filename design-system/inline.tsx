/** @jsxImportSource @emotion/react */
import { Children } from 'react';
import css from 'design-system/css';
import { token } from '@atlaskit/tokens';

const styles = css({
  inline: {
    display: 'flex',
    flexDirection: 'row',
  },
  separator: {
    height: '70%',
    alignSelf: 'center',
    borderRight: `1px solid ${token('color.border.neutral')}`,
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

const alignStyles = css({
  right: {
    justifyContent: 'right',
  },
  left: {
    justifyContent: 'left',
  },
  center: {
    justifyContent: 'center',
  },
});

const justifyStyles = css({
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
  align?: keyof typeof alignStyles;
  justify?: keyof typeof justifyStyles;
  marginLeft?: string;
  hasSeparator?: boolean;
  as?: 'div' | 'nav';
}

function Inline({
  children,
  align,
  hasSeparator,
  marginLeft,
  justify = 'top',
  as: Component = 'div',
  gap = 'none',
}: InlineProps) {
  const gapStyle = gapStyles[gap];
  const alignStyle = align && alignStyles[align];
  const justifyStyle = justify && justifyStyles[justify];

  return (
    <Component
      css={[styles.inline, alignStyle, justifyStyle, gapStyle]}
      style={{
        marginLeft,
      }}>
      {Children.map(children, (child, index) => {
        if (index + 1 < Children.count(children)) {
          return [child, hasSeparator && <span key={`s-${index}`} css={styles.separator} />];
        }

        return child;
      })}
    </Component>
  );
}

export default Inline;
