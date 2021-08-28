/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Heading from 'design-system/heading';
import { token } from '@atlaskit/tokens';
import Stack from 'design-system/stack';
import { friendlyDate } from 'lib/time';
import Link from 'next/link';
import A from 'design-system/link';
import { useRouter } from 'next/router';

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
  marginBottom: 20,
});

export interface BlogProps {
  title: string;
  publishDate: string;
  minutesToRead: number;
  slug: string;
  children: JSX.Element;
}

function Blog({ title, publishDate, children, slug, minutesToRead }: BlogProps) {
  const { route } = useRouter();

  return (
    <article>
      <Stack gap={4}>
        <div css={heroImageStyles} />

        <header>
          <Heading level={1}>
            <Link passHref href={slug ? `/blog/${slug}` : route}>
              <A>{title}</A>
            </Link>
          </Heading>
          <div css={metaStyles}>
            <a href="https://twitter.com/itsdouges">Michael Dougall</a> ·{' '}
            <time title={publishDate} dateTime={publishDate}>
              {friendlyDate(publishDate)}
            </time>{' '}
            · {minutesToRead} min read
          </div>
        </header>

        {children}
      </Stack>
    </article>
  );
}

export default Blog;
