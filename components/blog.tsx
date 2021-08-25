/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Heading from 'design-system/heading';
import { token } from '@atlaskit/tokens';
import Stack from 'design-system/stack';

const heroImageStyles = css({
  backgroundColor: token('color.background.subtleNeutral.resting'),
  height: 164,
  margin: '0 -128px',
});

const metaStyles = css({
  color: token('color.text.lowEmphasis'),
});

interface BlogProps {}

function Blog({}: BlogProps) {
  return (
    <article>
      <Stack gap={4}>
        <div css={heroImageStyles} />
        <header>
          <Heading level={1}>Build time code transformation</Heading>
          <div css={metaStyles}>
            <time dateTime="2021-25-08">August 25th, 2021</time> · 9 min read
          </div>
        </header>

        <main></main>
      </Stack>
    </article>
  );
}

export default Blog;
