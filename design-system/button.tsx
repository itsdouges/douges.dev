/** @jsxImportSource @emotion/react */
import { token } from '@atlaskit/tokens';
import css from 'design-system/css';
import usePressable from 'lib/use-pressable';

const styles = css({
  button: {
    padding: 8,
    margin: 0,
    fontSize: 16,
    border: 0,
    borderRadius: 3,
    fontWeight: 600,
    position: 'relative',
    overflow: 'hidden',
    flexShrink: 0,
    ':focus': {
      outline: 0,
    },
    ':focus-visible': {
      boxShadow: `0 0 0 2px var(--surface, ${token('color.background.default')}), 0 0 0 4px ${token(
        'color.border.focus'
      )}`,
    },
  },
});

const appearanceStyles = css({
  default: {
    color: token('color.text.highEmphasis'),
    backgroundColor: token('color.background.subtleNeutral.resting'),
    ':hover': {
      backgroundColor: token('color.background.subtleNeutral.hover'),
    },
  },
  primary: {
    color: token('color.text.onBold'),
    backgroundColor: token('color.background.boldBrand.resting'),
    ':hover': {
      backgroundColor: token('color.background.boldBrand.hover'),
    },
  },
  selected: {
    color: token('color.text.selected'),
    backgroundColor: token('color.background.selected.resting'),
    ':hover': {
      backgroundColor: token('color.background.selected.hover'),
    },
  },
  subtle: {
    color: token('color.text.highEmphasis'),
    backgroundColor: 'transparent',
    ':hover': {
      backgroundColor: token('color.background.transparentNeutral.hover'),
    },
  },
  disabled: {
    color: token('color.text.disabled'),
    backgroundColor: token('color.background.disabled'),
    cursor: 'not-allowed',
  },
});

const activeStyles = css({
  default: {
    ':active': {
      backgroundColor: token('color.background.subtleNeutral.pressed'),
    },
  },
  primary: {
    ':active': {
      backgroundColor: token('color.background.boldBrand.pressed'),
    },
  },
  subtle: {
    ':active': {
      backgroundColor: token('color.background.transparentNeutral.pressed'),
    },
  },
  selected: {
    ':active': {
      backgroundColor: token('color.background.selected.pressed'),
    },
  },
});

export interface ButtonProps {
  appearance?: 'primary' | 'subtle' | 'default';
  type?: 'submit' | 'button';
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
  isDisabled?: boolean;
  isSelected?: boolean;
}

function Button({
  children,
  isSelected,
  onClick,
  appearance = 'default',
  type = 'button',
  isDisabled,
  ...props
}: ButtonProps) {
  const mappedAppearance = isSelected ? 'selected' : appearance;
  const appearanceStyle = appearanceStyles[mappedAppearance];
  const activeStyle = activeStyles[mappedAppearance];
  const { isActive, buttonProps } = usePressable({ onClick });

  return (
    <button
      {...buttonProps}
      {...props}
      type={type}
      disabled={isDisabled}
      css={[
        styles.button,
        isDisabled ? appearanceStyles.disabled : appearanceStyle,
        !isDisabled && isActive && activeStyle,
      ]}>
      {children}
    </button>
  );
}

export default Button;
