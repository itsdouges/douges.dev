/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';

const inputStyles = css({
  border: `2px solid ${token('color.border.neutral')}`,
  fontSize: '2rem',
  borderRadius: 3,
  padding: 8,
  color: token('color.text.highEmphasis'),
  background: token('color.background.subtleNeutral.resting'),
  '::placeholder': {
    color: token('color.text.mediumEmphasis'),
  },
  ':hover': {
    background: 'transparent',
  },
  ':focus': {
    outline: 'none',
    backgroundColor: 'transparent',
    borderColor: token('color.border.focus'),
  },
});

interface TextfieldProps {
  id?: string;
  placeholder?: string;
}

function Textfield({ id, placeholder }: TextfieldProps) {
  return <input id={id} css={inputStyles} placeholder={placeholder} />;
}

export default Textfield;
