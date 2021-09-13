/** @jsxImportSource @emotion/react */
import Popup from 'design-system/popup';
import { useEffect, useState, useRef } from 'react';
import Inline from 'design-system/inline';

interface SelectionActionBarProps {
  children: React.ReactNode;
  actions: (props: { selection: string }) => React.ReactNode[];
}

function SelectionActionBar({ children, actions }: SelectionActionBarProps) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const selectedText = useRef('');
  const [anchorRef, setAnchorRef] = useState<Node | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const onMouseUp = () => {
    if (anchorRef) {
      setIsHighlighted(true);
    }
  };

  useEffect(() => {
    document.addEventListener('selectionchange', () => {
      const selection = document.getSelection();
      const selectionText = selection?.toString();

      if (
        selection &&
        selectionText &&
        selection.focusNode &&
        containerRef.current?.contains(selection.focusNode)
      ) {
        selectedText.current = selectionText;
        setAnchorRef(selection.focusNode.parentElement);
      } else if (!selectionText?.trim()) {
        setAnchorRef(null);
        setIsHighlighted(false);
        selectedText.current = '';
      }
    });
  }, []);

  return (
    <div onMouseUp={onMouseUp} ref={containerRef}>
      {children}
      <Popup
        padding="small"
        isOpen={isHighlighted}
        content={() => (
          <Inline hasSeparator>{actions({ selection: selectedText.current.trim() })}</Inline>
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
