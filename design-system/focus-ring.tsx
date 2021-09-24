/** @jsxImportSource @emotion/react */
import { token } from '@atlaskit/tokens';
import { cloneElement } from 'react';
import { ClassNames } from '@emotion/react';
import css from 'design-system/css';

const styles = css({
  focus: {
    position: 'relative',
    ':focus': {
      outline: 0,
    },
    ':focus-visible::after': {
      outline: 0,
      position: 'absolute',
      boxShadow: `0 0 0 2px ${token('color.border.focus')}`,
      content: '""',
    },
  },
  outset: {
    ':focus-visible::after': {
      inset: -2,
    },
  },
  inset: {
    ':focus-visible::after': {
      inset: 2,
    },
  },
});

interface FocusRingProps {
  children: JSX.Element;
  appearance?: 'outset' | 'inset';
}

function FocusRing({ children, appearance = 'outset' }: FocusRingProps) {
  const offset = styles[appearance];

  return (
    <ClassNames>
      {({ css: cn }) =>
        cloneElement(children, { className: cn(styles.focus, offset, children.props.className) })
      }
    </ClassNames>
  );
}

export default FocusRing;
