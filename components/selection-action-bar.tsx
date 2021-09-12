import Popup from 'design-system/popup';
import { useEffect, useState, useRef } from 'react';
import Button from 'design-system/button';
import Inline from 'design-system/inline';

interface SelectionActionBarProps {
  children: React.ReactNode;
}

function SelectionActionBar({ children }: SelectionActionBarProps) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [anchorRef, setAnchorRef] = useState<Node | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const onMouseUp = () => {
    if (anchorRef) {
      setIsHighlighted(true);
    }
  };

  useEffect(() => {
    document.addEventListener('selectionchange', (e) => {
      const selection = document.getSelection();
      const selectionText = selection?.toString();

      if (
        selection &&
        selectionText &&
        selection.focusNode &&
        containerRef.current?.contains(selection.focusNode)
      ) {
        setAnchorRef(selection.focusNode.parentElement);
      } else if (!selectionText?.trim()) {
        setAnchorRef(null);
        setIsHighlighted(false);
      }
    });
  }, []);

  return (
    <div onMouseUp={onMouseUp} ref={containerRef}>
      {children}
      <Popup
        isOpen={isHighlighted}
        content={() => (
          <>
            <Button appearance="subtle">Tweet</Button>
            <Button appearance="subtle">Share</Button>
          </>
        )}>
        {({ ref }) => {
          ref.current = anchorRef;
          return null;
        }}
      </Popup>
    </div>
  );
}

export default SelectionActionBar;
