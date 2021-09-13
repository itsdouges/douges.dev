/** @jsxImportSource @emotion/react */
import { CSSProperties, Children } from 'react';
import css from 'design-system/css';
import { token } from '@atlaskit/tokens';

const styles = css({
  inline: {
    display: 'flex',
    flexDirection: 'row',
    '> *': {
      marginRight: 'var(--gap)',
    },
  },
  separator: {
    height: '70%',
    alignSelf: 'center',
    borderRight: `1px solid ${token('color.border.neutral')}`,
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
    alignItems: 'left',
  },
  top: {
    alignItems: 'right',
  },
  middle: {
    alignItems: 'center',
  },
});

interface InlineProps {
  gap?: number;
  children: React.ReactNode;
  align?: 'left' | 'right' | 'center';
  justify?: 'top' | 'middle' | 'bottom';
  marginLeft?: string;
  hasSeparator?: boolean;
  as?: 'div' | 'nav';
}

function Inline({
  children,
  align,
  as: Component = 'div',
  hasSeparator,
  marginLeft,
  justify,
  gap = 0,
}: InlineProps) {
  const finalGap = gap * 8;
  const alignStyle = align && alignStyles[align];
  const justifyStyle = justify && justifyStyles[justify];

  return (
    <Component
      css={[styles.inline, alignStyle, justifyStyle]}
      style={
        {
          marginLeft,
          gap: finalGap > 0 ? finalGap : undefined,
          '--gap': finalGap < 0 ? `${finalGap}px` : undefined,
        } as CSSProperties
      }>
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
