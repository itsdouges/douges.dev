/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';

const buttonStyles = css({
  padding: '8px 12px',
  margin: 0,
  fontSize: 20,
  border: 0,
  borderRadius: 3,
  ':focus': {
    outline: 0,
  },
  ':focus-visible': {
    boxShadow: `0 0 0 2px ${token('color.background.default')}, 0 0 0 4px ${token(
      'color.border.focus'
    )}`,
  },
});

const primaryStyles = css({
  color: token('color.text.onBold'),
  backgroundColor: token('color.background.boldBrand.resting'),
  ':hover': {
    backgroundColor: token('color.background.boldBrand.hover'),
  },
  ':active': {
    backgroundColor: token('color.background.boldBrand.pressed'),
  },
});

const subtleStyles = css({
  color: token('color.text.highEmphasis'),
  backgroundColor: 'transparent',
  ':hover': {
    backgroundColor: token('color.background.transparentNeutral.hover'),
  },
  ':active': {
    backgroundColor: token('color.background.transparentNeutral.pressed'),
  },
});

const buttonAppearances = {
  subtle: subtleStyles,
  primary: primaryStyles,
};

interface ButtonProps {
  appearance: 'primary' | 'subtle';
  onClick?: React.MouseEventHandler;
  children?: JSX.Element | string;
}

function Button({ children, onClick, appearance }: ButtonProps) {
  const appearanceStyles = buttonAppearances[appearance];

  return (
    <button type="button" onClick={onClick} css={[buttonStyles, appearanceStyles]}>
      {children}
    </button>
  );
}

export default Button;
