import { useRef, useState, MouseEventHandler } from 'react';

export interface UsePressable {
  isPressed: boolean;
  buttonProps: {
    onMouseOver: MouseEventHandler;
    onMouseLeave: MouseEventHandler;
    onMouseDown: MouseEventHandler;
    onMouseUp: MouseEventHandler;
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

  const onMouseUp: MouseEventHandler = () => {
    if (isActive) {
      setIsActive(false);
    }
  };

  const onMouseLeave: MouseEventHandler = () => {
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
    isPressed: isActive,
    buttonProps: {
      onMouseOver,
      onMouseLeave,
      onMouseDown,
      onClick,
      onMouseUp,
    },
  };
}

export default usePressable;
