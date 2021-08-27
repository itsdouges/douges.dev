import { useRef, useState, MouseEventHandler } from 'react';

interface UsePressable {
  isActive: boolean;
  buttonProps: {
    onMouseOver: MouseEventHandler;
    onMouseOut: MouseEventHandler;
    onMouseDown: MouseEventHandler;
    onClick: MouseEventHandler;
  };
}

interface UsePressableOpts {
  onClick?: MouseEventHandler;
}

function usePressable(opts: UsePressableOpts): UsePressable {
  const [isActive, setIsActive] = useState(false);
  const isPressed = useRef(false);

  const onMouseOver: MouseEventHandler = () => {
    if (isPressed.current && !isActive) {
      setIsActive(true);
    }
  };

  const onMouseOut: MouseEventHandler = () => {
    isPressed.current = false;
    if (isActive) {
      setIsActive(false);
    }
  };

  const onMouseDown: MouseEventHandler = () => {
    isPressed.current = true;
    if (!isActive) {
      setIsActive(true);
    }
  };

  const onClick: MouseEventHandler = (e) => {
    if (!isPressed.current) {
      e.stopPropagation();
      e.preventDefault();
      return;
    }

    opts.onClick?.(e);
  };

  return {
    isActive,
    buttonProps: {
      onMouseOver,
      onMouseOut,
      onMouseDown,
      onClick,
    },
  };
}

export default usePressable;
