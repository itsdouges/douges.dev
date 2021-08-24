import { useRef, useState, MouseEventHandler } from 'react';

interface UsePressableOut {
  isActive: boolean;
  buttonProps: {
    onMouseOver: MouseEventHandler;
    onMouseOut: MouseEventHandler;
    onMouseDown: MouseEventHandler;
    onMouseUp: MouseEventHandler;
  };
}

function usePressable(): UsePressableOut {
  const [isActive, setIsActive] = useState(false);
  const isPressed = useRef(false);

  const onMouseOver: MouseEventHandler = () => {
    if (isPressed.current && !isActive) {
      setIsActive(true);
    }
  };
  const onMouseOut: MouseEventHandler = () => {
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
  const onMouseUp: MouseEventHandler = () => {
    isPressed.current = false;
    if (isActive) {
      setIsActive(false);
    }
  };

  return {
    isActive,
    buttonProps: {
      onMouseOver,
      onMouseOut,
      onMouseDown,
      onMouseUp,
    },
  };
}

export default usePressable;
