/** @jsxImportSource @emotion/react */
import { token } from '@atlaskit/tokens';
import { css } from '@emotion/react';

const resetStyles = css({
  margin: 0,
});

const heroHeadingStyles = css({
  fontSize: 86,
  lineHeight: 1.1,
  color: token('color.text.highEmphasis'),
  fontWeight: 900,
  letterSpacing: '-0.01em',
  '@media screen and (min-width: 800px)': {
    fontSize: 112,
  },
});

const largeHeadingStyles = css({
  fontSize: 64,
  lineHeight: 1.1,
  color: token('color.text.highEmphasis'),
  fontWeight: 900,
  letterSpacing: '-0.01em',
});

const mediumHeadingStyles = css({
  fontSize: 40,
  lineHeight: 1.16,
  color: token('color.text.highEmphasis'),
  fontWeight: 700,
  letterSpacing: '-0.01em',
});

const smallHeadingStyles = css({
  fontSize: 22,
  lineHeight: 1.2,
  color: token('color.text.mediumEmphasis'),
  fontWeight: 1000,
  letterSpacing: '-0.01em',
  textTransform: 'uppercase',
});

const headingStyles = {
  0: heroHeadingStyles,
  1: largeHeadingStyles,
  2: mediumHeadingStyles,
  3: smallHeadingStyles,
};

const headingLevel = {
  0: 'h1',
  1: 'h1',
  2: 'h2',
  3: 'h3',
};

interface HeadingProps {
  as?: 'div' | 'h1' | 'h2' | 'h3';
  level: 0 | 1 | 2 | 3;
  children: JSX.Element | string;
}

function Heading({ level, as, children }: HeadingProps) {
  const styles = headingStyles[level];
  const Level: any = as || headingLevel[level];

  return <Level css={[resetStyles, styles]}>{children}</Level>;
}

export default Heading;
