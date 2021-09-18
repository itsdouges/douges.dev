/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { useState, useCallback, useRef, useEffect } from 'react';
import Box, { PaddingProps } from 'design-system/box';
import Portal from 'design-system/portal';

const styles = css({
  popup: {
    position: 'absolute',
  },
});

interface PopupProps extends PaddingProps {
  children: (props: { ref: React.MutableRefObject<any> }) => React.ReactNode;
  content: () => React.ReactNode;
  isOpen: boolean;
  background?: 'neutralBold' | 'overlay';
}

interface Position {
  top: number;
  left: number;
  height: number;
}

function Popup({ children, content, background = 'overlay', isOpen, ...props }: PopupProps) {
  const [position, setPosition] = useState<undefined | Position>();
  const targetRef = useRef<any>(null);
  const calculatePosition = useCallback(() => {
    if (isOpen && targetRef.current) {
      const element = targetRef.current as HTMLElement;
      const elementBox = element.getBoundingClientRect();

      setPosition({
        top: element.offsetTop,
        left: element.offsetLeft + elementBox.width / 2,
        height: elementBox.height,
      });
    }
  }, [isOpen]);

  useEffect(() => {
    requestAnimationFrame(() => {
      calculatePosition();
    });
  }, [calculatePosition]);

  return (
    <>
      {children({ ref: targetRef })}
      {isOpen && position && (
        <Portal>
          <Box
            {...props}
            shadow="overlay"
            display="block flex"
            borderRadius="default"
            css={styles.popup}
            background={background}
            style={{
              top: position.top,
              left: position.left,
              transform: `translate3d(-50%, calc(${Math.ceil(position.height)}px + 8px), 0)`,
            }}>
            {content()}
          </Box>
        </Portal>
      )}
    </>
  );
}

export default Popup;
