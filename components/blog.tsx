/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Heading from 'design-system/heading';
import Stack from 'design-system/stack';
import { friendlyDate } from 'lib/time';
import Link from 'next/link';
import DSLink from 'design-system/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Text from 'design-system/text';
import SelectionActionBar from 'components/selection-action-bar';
import Box from 'design-system/box';

const styles = css({
  heroImage: {
    height: 250,
    position: 'relative',
    margin: '0 -16px',
    '@media screen and (min-width: 1000px)': {
      margin: '0 -64px',
    },
    '@media screen and (min-width: 1200px)': {
      margin: '0 -128px',
    },
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
        <Box shouldForwardProps appearance="subtle-neutral" hasBorderRadius>
          <div css={styles.heroImage}>
            {heroImage && (
              <Image placeholder="blur" objectFit="cover" layout="fill" src={heroImage} alt="" />
            )}
          </div>
        </Box>

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
