/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useRef, useEffect } from 'react';
import { token } from '@atlaskit/tokens';
import Portal from 'design-system/portal';

const popupStyles = css({
  backgroundColor: token('color.background.overlay'),
  boxShadow: token('shadow.overlay'),
  borderRadius: 3,
  display: 'inline-flex',
  padding: 4,
  position: 'absolute',
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

  useEffect(() => {
    requestAnimationFrame(() => {
      if (isOpen && targetRef.current) {
        const element = targetRef.current as HTMLElement;
        const elementBox = element.getBoundingClientRect();

        setPosition({
          top: element.offsetTop,
          left: element.offsetLeft,
          height: elementBox.height,
        });
      }
    });
  }, [isOpen]);

  return (
    <>
      {children({ ref: targetRef })}
      {isOpen && position && (
        <Portal>
          <div
            style={{
              top: position.top,
              left: position.left,
              transform: `translateY(calc(${Math.ceil(position.height)}px + 8px))`,
            }}
            css={popupStyles}>
            {content()}
          </div>
        </Portal>
      )}
    </>
  );
}

export default Popup;
