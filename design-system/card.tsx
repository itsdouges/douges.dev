/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { token } from '@atlaskit/tokens';
import Heading from 'design-system/heading';
import Image from 'next/image';
import Text from 'design-system/text';
import Box from 'design-system/box';
import Stack from 'design-system/stack';
import Tag from 'design-system/tag';
import Inline from 'design-system/inline';

const styles = css({
  cardImage: {
    backgroundColor: token('color.background.subtleNeutral.resting'),
    height: 88,
    position: 'relative',
    width: '100%',
  },
});

interface CardProps {
  heroImage?: StaticImageData;
  title: string;
  secondary: string;
  tags?: string[];
}

function Card({ title, tags = [], secondary, heroImage }: CardProps) {
  return (
    <Box padding="medium" shadow="card" background="card" borderRadius="default">
      <Stack gap="medium">
        <div css={styles.cardImage}>
          {heroImage && (
            <Image placeholder="blur" objectFit="cover" layout="fill" src={heroImage} alt="" />
          )}
        </div>
        <Heading level={3}>{title}</Heading>
        <Text color="medium" size="small">
          {secondary}
        </Text>
        <Inline gap="small">
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Inline>
      </Stack>
    </Box>
  );
}

export default Card;
