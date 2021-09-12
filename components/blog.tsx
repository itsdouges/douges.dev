/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Heading from 'design-system/heading';
import { token } from '@atlaskit/tokens';
import Stack from 'design-system/stack';
import { friendlyDate } from 'lib/time';
import Link from 'next/link';
import DSLink from 'design-system/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Text from 'design-system/text';
import SelectionActionBar from 'components/selection-action-bar';

const heroImageStyles = css({
  backgroundColor: token('color.background.subtleNeutral.resting'),
  height: 250,
  position: 'relative',
  margin: '0 -16px',
  borderRadius: 3,
  '@media screen and (min-width: 1000px)': {
    margin: '0 -64px',
  },
  '@media screen and (min-width: 1200px)': {
    margin: '0 -128px',
  },
});

export interface BlogProps {
  title: string;
  publishDate: string;
  minutesToRead: number;
  slug: string;
  children: React.ReactNode;
  heroImage?: StaticImageData;
}

function Blog({ title, publishDate, children, slug, minutesToRead, heroImage }: BlogProps) {
  const { route } = useRouter();

  return (
    <article>
      <Stack gap={6}>
        <div css={heroImageStyles}>
          {heroImage && (
            <Image placeholder="blur" objectFit="cover" layout="fill" src={heroImage} alt="" />
          )}
        </div>

        <header>
          <Heading level={1}>
            <Link passHref href={slug ? `/blog/${slug}` : route}>
              <DSLink>{title}</DSLink>
            </Link>
          </Heading>

          <Text color="low" size="tiny">
            <time title={publishDate} dateTime={publishDate}>
              {friendlyDate(publishDate)}
            </time>{' '}
            ·{' '}
            <a
              data-splitbee-event="External Link"
              data-splitbee-event-type="twitter"
              href="https://twitter.com/itsdouges">
              Michael Dougall
            </a>{' '}
            · {minutesToRead} min read
          </Text>
        </header>

        <SelectionActionBar>{children}</SelectionActionBar>
      </Stack>
    </article>
  );
}

export default Blog;
