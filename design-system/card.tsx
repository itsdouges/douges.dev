/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { token } from '@atlaskit/tokens';
import Heading from 'design-system/heading';
import Image from 'next/image';
import Text from 'design-system/text';
import Box from 'design-system/box';
import Stack from 'design-system/stack';

const styles = css({
  cardImage: {
    backgroundColor: token('color.background.subtleNeutral.resting'),
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    marginTop: -16,
    marginLeft: -16,
    marginRight: -16,
    height: 168,
    position: 'relative',
    overflow: 'hidden',
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
    <Box padding="large" appearance="card" isHoverable hasBorderRadius>
      <Stack gap={2}>
        <div css={styles.cardImage}>
          {heroImage && (
            <Image placeholder="blur" objectFit="cover" layout="fill" src={heroImage} alt="" />
          )}
        </div>
        <Heading level={3}>{title}</Heading>
        <Text color="medium" size="small">
          {secondary}
        </Text>
        {tags.map((tag, index) => (
          <Text color="low" size="tiny" key={index}>
            {tag}
          </Text>
        ))}
      </Stack>
    </Box>
  );
}

export default Card;
