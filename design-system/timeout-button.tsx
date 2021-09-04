/** @jsxImportSource @emotion/react */
import { useState, MouseEventHandler } from 'react';
import { token } from '@atlaskit/tokens';
import { css } from '@emotion/react';
import Button, { ButtonProps } from './button';

const TIMEOUT = 500;

const timeoutStyles = css({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: token('color.background.subtleNeutral.resting'),
  transition: `transform ${TIMEOUT}ms`,
  transform: 'translateX(-100%)',
});

function IconButton({ children, ...props }: ButtonProps) {
  const [isTimeout, setIsTimeout] = useState(false);

  const onClick: MouseEventHandler = (e) => {
    props.onClick?.(e);
    setIsTimeout(true);
    setTimeout(() => {
      setIsTimeout(false);
    }, TIMEOUT);
  };

  return (
    <Button {...props} isDisabled={isTimeout || props.isDisabled} onClick={onClick}>
      <span
        css={timeoutStyles}
        style={{
          transition: isTimeout ? undefined : 'none',
          opacity: isTimeout ? 1 : 0,
          transform: isTimeout ? 'none' : undefined,
        }}
      />
      {children}
    </Button>
  );
}

export default IconButton;
