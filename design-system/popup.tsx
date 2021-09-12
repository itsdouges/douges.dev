/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { useState, useCallback, useRef, useEffect } from 'react';
import Box from 'design-system/box';
import Portal from 'design-system/portal';

const styles = css({
  popup: {
    display: 'inline-flex',
    position: 'absolute',
  },
});

interface PopupProps {
  children: (props: { ref: React.MutableRefObject<any> }) => React.ReactNode;
  content: () => React.ReactNode;
  isOpen: boolean;
}

interface Position {
  top: number;
  left: number;
  height: number;
}

function Popup({ children, content, isOpen }: PopupProps) {
  const [position, setPosition] = useState<undefined | Position>();
  const targetRef = useRef<any>(null);
  const calculatePosition = useCallback(() => {
    if (isOpen && targetRef.current) {
      const element = targetRef.current as HTMLElement;
      const elementBox = element.getBoundingClientRect();

      setPosition({
        top: element.offsetTop,
        left: element.offsetLeft,
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
          <Box shouldForwardProps appearance="overlay" padding="small">
            <div
              style={{
                top: position.top,
                left: position.left,
                transform: `translateY(calc(${Math.ceil(position.height)}px + 8px))`,
              }}
              css={styles.popup}>
              {content()}
            </div>
          </Box>
        </Portal>
      )}
    </>
  );
}

export default Popup;