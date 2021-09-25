/** @jsxImportSource @emotion/react */
import { token } from '@atlaskit/tokens';
import { cloneElement } from 'react';
import { ClassNames } from '@emotion/react';
import css from 'design-system/css';

const focusStyles = css({
  base: {
    position: 'relative',
    ':focus': {
      outline: 0,
    },
  },
  on: {
    ':focus-visible::after': {
      outline: 0,
      position: 'absolute',
      boxShadow: `0 0 0 2px ${token('color.border.focus')}`,
      content: '""',
    },
    '@supports not selector(*:focus-visible)': {
      ':focus::after': {
        outline: 0,
        position: 'absolute',
        boxShadow: `0 0 0 2px ${token('color.border.focus')}`,
        content: '""',
      },
    },
  },
  within: {
    ':focus-within::after': {
      outline: 0,
      position: 'absolute',
      boxShadow: `0 0 0 2px ${token('color.border.focus')}`,
      content: '""',
    },
  },
});

const appearanceStyles = css({
  outset: {
    ':focus-visible::after,:focus-within::after': {
      inset: -2,
    },
    '@supports not selector(*:focus-visible)': {
      ':focus::after,:focus-within::after': {
        inset: -2,
      },
    },
  },
  inset: {
    ':focus-visible::after,:focus-within::after': {
      inset: 2,
    },
    '@supports not selector(*:focus-visible)': {
      ':focus::after,:focus-within::after': {
        inset: 2,
      },
    },
  },
});

interface FocusRingProps {
  children: JSX.Element;
  appearance?: 'outset' | 'inset';
  focus?: 'on' | 'within';
}

function FocusRing({ children, appearance = 'outset', focus = 'on' }: FocusRingProps) {
  const offset = appearanceStyles[appearance];
  const focusStyle = focusStyles[focus];

  return (
    <ClassNames>
      {({ css: cn }) =>
        cloneElement(children, {
          className: cn(focusStyles.base, focusStyle, offset, children.props.className),
        })
      }
    </ClassNames>
  );
}

export default FocusRing;
