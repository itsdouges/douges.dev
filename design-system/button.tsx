/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';
import usePressable from 'lib/use-pressable';

const buttonStyles = css({
  padding: 8,
  margin: 0,
  fontSize: 20,
  border: 0,
  borderRadius: 3,
  fontWeight: 600,
  position: 'relative',
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
});

const primaryActiveStyles = css({
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
});

const subtleActiveStyles = css({
  ':active': {
    backgroundColor: token('color.background.transparentNeutral.pressed'),
  },
});

const disabledStyles = css({
  color: token('color.text.disabled'),
  backgroundColor: token('color.background.disabled'),
  cursor: 'not-allowed',
});

const buttonAppearances = {
  subtle: subtleStyles,
  primary: primaryStyles,
};

const buttonActiveAppearances = {
  subtle: subtleActiveStyles,
  primary: primaryActiveStyles,
};

interface ButtonProps {
  appearance: 'primary' | 'subtle';
  type?: 'submit' | 'button';
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
  isDisabled?: boolean;
}

function Button({ children, onClick, appearance, type = 'button', isDisabled }: ButtonProps) {
  const appearanceStyles = buttonAppearances[appearance];
  const activeAppearanceStyles = buttonActiveAppearances[appearance];
  const { isActive, buttonProps } = usePressable({ onClick });

  return (
    <button
      {...buttonProps}
      type={type}
      disabled={isDisabled}
      css={[
        buttonStyles,
        isDisabled ? disabledStyles : appearanceStyles,
        !isDisabled && isActive && activeAppearanceStyles,
      ]}>
      {children}
    </button>
  );
}

export default Button;
