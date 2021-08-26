/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Heading from 'design-system/heading';
import { token } from '@atlaskit/tokens';
import Stack from 'design-system/stack';

const heroImageStyles = css({
  backgroundColor: token('color.background.subtleNeutral.resting'),
  height: 164,
  '@media screen and (min-width: 1000px)': {
    margin: '0 -64px',
  },
  '@media screen and (min-width: 1200px)': {
    margin: '0 -128px',
  },
});

const metaStyles = css({
  color: token('color.text.mediumEmphasis'),
});

export interface BlogProps {
  title: string;
  publishDate: string;
  humanPublishDate: string;
  minutesToRead: number;
  children?: JSX.Element | JSX.Element[];
}

function Blog({ title, publishDate, children, humanPublishDate, minutesToRead }: BlogProps) {
  return (
    <article>
      <Stack gap={4}>
        <div css={heroImageStyles} />
        <header>
          <Heading level={1}>{title}</Heading>
          <div css={metaStyles}>
            <time dateTime={publishDate}>{humanPublishDate}</time> · {minutesToRead} min read
          </div>
        </header>

        <main>{children}</main>
      </Stack>
    </article>
  );
}

export default Blog;
