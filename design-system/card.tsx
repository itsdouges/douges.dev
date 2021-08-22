/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';

const cardStyles = css({
  backgroundColor: token('color.background.card'),
  boxShadow: token('shadow.card'),
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

const cardHeadingStyles = css({
  fontSize: '2rem',
});

const cardDescriptionStyles = css({
  color: token('color.text.mediumEmphasis'),
  fontSize: '1.5rem',
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
