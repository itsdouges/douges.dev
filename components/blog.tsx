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
import Button from 'design-system/button';
import Tooltip from 'design-system/tooltip';

const styles = css({
  heroImage: {
    height: 250,
    position: 'relative',
    margin: '0 -12px',
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
  const link = slug ? `/blog/${slug}` : route;

  return (
    <article>
      <Stack gap={6}>
        <Box shouldForwardProps background="neutralSubtle" borderRadius="default">
          <div css={styles.heroImage}>
            {heroImage && (
              <Image placeholder="blur" objectFit="cover" layout="fill" src={heroImage} alt="" />
            )}
          </div>
        </Box>

        <header>
          <Heading level={1}>
            <Link passHref href={link}>
              <DSLink>{title}</DSLink>
            </Link>
          </Heading>

          <Text color="low" size="tiny">
            <Tooltip content={publishDate}>
              {(tt) => (
                <time {...tt} dateTime={publishDate}>
                  {friendlyDate(publishDate)}
                </time>
              )}
            </Tooltip>{' '}
            · <a href="https://twitter.com/itsdouges">Michael Dougall</a> · {minutesToRead} min read
          </Text>
        </header>

        <SelectionActionBar
          actions={({ selection }) => [
            <LinkButton
              shouldOpenNewWindow
              key="tweet"
              appearance="transparent"
              href={`https://twitter.com/intent/tweet?text="${window.encodeURIComponent(
                selection
              )}" https://douges.dev${link}`}>
              Tweet
            </LinkButton>,
            <Button key="comment" appearance="transparent">
              Comment
            </Button>,
          ]}>
          {children}
        </SelectionActionBar>
      </Stack>
    </article>
  );
}

export default Blog;
