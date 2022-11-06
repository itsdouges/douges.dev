/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Heading from 'design-system/heading';
import Stack from 'design-system/stack';
import { friendlyDate } from 'lib/time';
import Link from 'next/link';
import DSLink from 'design-system/link';
import LinkButton from 'design-system/link-button';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Text from 'design-system/text';
import SelectionActionBar from 'components/selection-action-bar';
import Box from 'design-system/box';
import Inline from 'design-system/inline';
import Tag from 'design-system/tag';

const styles = css({
  heroImage: {
    height: 250,
    position: 'relative',
    width: 'calc(100% + 24px)',
    overflow: 'hidden',
    alignSelf: 'center',
    '@media screen and (min-width: 1000px)': {
      width: 'calc(100% + 64px)',
    },
    '@media screen and (min-width: 1200px)': {
      width: 'calc(100% + 128px)',
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
  tags?: string[];
}

function Blog({ title, publishDate, children, slug, minutesToRead, heroImage, tags }: BlogProps) {
  const { route } = useRouter();
  const link = slug ? `/blog/${slug}` : route;

  return (
    <article>
      <Stack gap="xxxlarge" inlineAlign="stretch">
        <Box css={styles.heroImage} background="neutralSubtle" borderRadius="rounded">
          {heroImage && (
            <Image placeholder="blur" objectFit="cover" layout="fill" src={heroImage} alt="" />
          )}
        </Box>

        <header>
          <Stack gap="regular">
            {tags && (
              <Inline wrap="wrap" gap="small">
                {tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Inline>
            )}

            <Heading level={1}>
              <Link passHref href={link}>
                <DSLink>{title}</DSLink>
              </Link>
            </Heading>

            <Text color="low" size="smaller">
              <time dateTime={publishDate}>{friendlyDate(publishDate)}</time> ·{' '}
              <a href="https://twitter.com/itsdouges">Michael Dougall</a> · {minutesToRead} min read
            </Text>
          </Stack>
        </header>

        <SelectionActionBar
          actions={({ selection }) => [
            <LinkButton
              shouldOpenNewWindow
              key="tweet"
              appearance="subtle"
              href={`https://twitter.com/intent/tweet?text="${window.encodeURIComponent(
                selection
              )}" https://douges.dev${link}`}>
              Tweet
            </LinkButton>,
          ]}>
          {children}
        </SelectionActionBar>
      </Stack>
    </article>
  );
}

export default Blog;
