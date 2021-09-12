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
      outlineOffset: 2,
    },
  },
});

interface FocusRingProps {
  children: JSX.Element;
}

function FocusRing({ children }: FocusRingProps) {
  return (
    <ClassNames>
      {({ css: cn }) => cloneElement(children, { className: cn(styles.focus) })}
    </ClassNames>
  );
}

export default FocusRing;
