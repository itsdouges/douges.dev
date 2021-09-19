/** @jsxImportSource @emotion/react */
import { token } from '@atlaskit/tokens';
import { cloneElement } from 'react';
import { ClassNames } from '@emotion/react';
import css from 'design-system/css';

const styles = css({
  focus: {
    ':focus': {
      outline: 0,
    },
    ':focus-visible': {
      outline: `${token('color.border.focus')} solid 2px`,
    },
  },
  outset: {
    ':focus-visible': {
      outlineOffset: 2,
    },
  },
  inset: {
    ':focus-visible': {
      outlineOffset: -2,
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
