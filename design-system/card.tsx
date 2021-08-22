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
  gap: 10,
});

const cardHeadingStyles = css({
  color: token('color.text.mediumEmphasis'),
  fontSize: 28,
});

const cardDescriptionStyles = css({
  color: token('color.text.lowEmphasis'),
  fontSize: 18,
});

interface CardProps {
  image?: string;
  title: string;
  secondary: string;
}

function Card({ title, secondary }: CardProps) {
  return (
    <div css={cardStyles}>
      <h2 css={cardHeadingStyles}>{title}</h2>
      <span css={cardDescriptionStyles}>{secondary}</span>
    </div>
  );
}

export default Card;
