/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Popup from 'design-system/popup';
import Text from 'design-system/text';
import { useState } from 'react';

const styles = css({
  container: {
    display: 'contents',
  },
});

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
}

function Tooltip({ children, content }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const onMouseEnter = () => setIsOpen(true);
  const onMouseOut = () => setIsOpen(false);

  return (
    <Popup
      paddingY="small"
      paddingX="regular"
      background="neutralBold"
      isOpen={isOpen}
      content={() => <Text size="smaller">{content}</Text>}>
      {({ ref }) => (
        <div
          ref={(foundRef) => {
            if (foundRef) {
              ref.current = foundRef.firstChild;
            } else {
              ref.current = null;
            }
          }}
          onMouseEnter={onMouseEnter}
          onMouseOut={onMouseOut}
          css={styles.container}>
          {children}
        </div>
      )}
    </Popup>
  );
}

export default Tooltip;
