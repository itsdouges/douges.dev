/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';

const cardStyles = css({
  backgroundColor: token('color.background.card'),
  boxShadow: token('shadow.card'),
  padding: 20,
  borderRadius: 3,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

const cardHeadingStyles = css({
  color: token('color.text.mediumEmphasis'),
  fontSize: 28,
  margin: 0,
});

const cardDescriptionStyles = css({
  color: token('color.text.lowEmphasis'),
  fontSize: 18,
});

const cardImageStyles = css({
  backgroundColor: token('color.background.subtleNeutral.resting'),
  borderRadius: 3,
  marginTop: -20,
  marginLeft: -20,
  marginRight: -20,
  height: 168,
});

interface CardProps {
  image?: string;
  title: string;
  secondary: string;
}

function Card({ title, secondary }: CardProps) {
  return (
    <div css={cardStyles}>
      <div css={cardImageStyles} />
      <h2 css={cardHeadingStyles}>{title}</h2>
      <span css={cardDescriptionStyles}>{secondary}</span>
    </div>
  );
}

export default Card;
