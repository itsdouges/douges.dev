/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';

const buttonStyles = css({
  padding: 8,
  margin: 0,
  fontSize: 20,
  border: 0,
  backgroundColor: token('color.background.boldBrand.resting'),
  color: token('color.text.onBold'),
  borderRadius: 3,
  ':hover': {
    backgroundColor: token('color.background.boldBrand.hover'),
  },
  ':active': {
    backgroundColor: token('color.background.boldBrand.pressed'),
  },
  ':focus': {
    outline: 0,
  },
  ':focus-visible': {
    boxShadow: `0 0 0 2px ${token('color.background.default')}, 0 0 0 4px ${token(
      'color.border.focus'
    )}`,
  },
});

interface ButtonProps {
  children?: JSX.Element | string;
}

function Button({ children }: ButtonProps) {
  return (
    <button type="button" css={buttonStyles}>
      {children}
    </button>
  );
}

export default Button;
