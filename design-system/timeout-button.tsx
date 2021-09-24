/** @jsxImportSource @emotion/react */
import { useState, MouseEventHandler } from 'react';
import Button, { ButtonProps } from './button';

const TIMEOUT = 300;

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
      {children}
    </Button>
  );
}

export default IconButton;
