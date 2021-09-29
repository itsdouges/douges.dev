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
    ':focus-visible': {
      outline: `2px solid ${token('color.border.focus')}`,
    },
    '@supports not selector(*:focus-visible)': {
      ':focus': {
        outline: `2px solid ${token('color.border.focus')}`,
      },
    },
  },
  within: {
    ':focus-within': {
      outline: `2px solid ${token('color.border.focus')}`,
    },
  },
});

const appearanceStyles = css({
  outset: {
    ':focus-visible,:focus-within': {
      outlineOffset: 2,
    },
    '@supports not selector(*:focus-visible)': {
      ':focus,:focus-within': {
        outlineOffset: 2,
      },
    },
  },
  inset: {
    ':focus-visible,:focus-within': {
      outlineOffset: -2,
    },
    '@supports not selector(*:focus-visible)': {
      ':focus,:focus-within': {
        outlineOffset: -2,
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
