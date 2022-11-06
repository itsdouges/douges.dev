/** @jsxImportSource @emotion/react */
import { token } from '@atlaskit/tokens';
import css from 'design-system/css';

const styles = css({
  default: {
    margin: 0,
    wordBreak: 'break-word',
    fontFamily: `'Merriweather', 'serif'`,
    hyphens: 'auto',
    letterSpacing: '-0.01em',
    '@media screen and (min-width: 500px)': {
      wordBreak: 'inherit',
      hyphens: 'none',
    },
  },
  0: {
    fontSize: 86,
    lineHeight: 1.1,
    color: token('color.text.highEmphasis'),
    fontStyle: 'italic',
    '@media screen and (min-width: 800px)': {
      fontSize: 112,
    },
  },
  1: {
    fontSize: 64,
    lineHeight: 1.1,
    color: token('color.text.highEmphasis'),
  },
  2: {
    fontSize: 40,
    lineHeight: 1.16,
    color: token('color.text.mediumEmphasis'),
  },
  3: {
    fontSize: 22,
    lineHeight: 1.2,
    color: token('color.text.mediumEmphasis'),
  },
});

const headingLevel = {
  0: 'h1',
  1: 'h1',
  2: 'h2',
  3: 'h3',
} as const;

interface HeadingProps {
  as?: 'div' | 'h1' | 'h2' | 'h3';
  level: 0 | 1 | 2 | 3;
  children: JSX.Element | string;
}

function Heading({ level, as: Level = headingLevel[level], children }: HeadingProps) {
  const headingStyle = styles[level];

  return <Level css={[styles.default, headingStyle]}>{children}</Level>;
}

export default Heading;
