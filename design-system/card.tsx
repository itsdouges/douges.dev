/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';
import Heading from 'design-system/heading';
import Image from 'next/image';
import Text from 'design-system/text';

const cardStyles = css({
  backgroundColor: token('color.background.card'),
  boxShadow: token('shadow.card'),
  padding: 20,
  borderRadius: 3,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  height: '100%',
  ':hover': {
    backgroundColor: token('color.background.overlay'),
    boxShadow: token('shadow.overlay'),
  },
});

const cardImageStyles = css({
  backgroundColor: token('color.background.subtleNeutral.resting'),
  borderTopLeftRadius: 3,
  borderTopRightRadius: 3,
  marginTop: -20,
  marginLeft: -20,
  marginRight: -20,
  height: 168,
  position: 'relative',
  overflow: 'hidden',
});

interface CardProps {
  heroImage?: StaticImageData;
  title: string;
  secondary: string;
  tags?: string[];
}

function Card({ title, tags = [], secondary, heroImage }: CardProps) {
  return (
    <div css={cardStyles}>
      <div css={cardImageStyles}>
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
    </div>
  );
}

export default Card;
