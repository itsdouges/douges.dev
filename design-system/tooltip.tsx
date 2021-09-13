import Popup from 'design-system/popup';
import Text from 'design-system/text';
import { MouseEventHandler, useState } from 'react';

interface TooltipProps {
  content: React.ReactNode;
  children: (props: {
    ref: React.Ref<any>;
    onMouseEnter: MouseEventHandler;
    onMouseOut: MouseEventHandler;
  }) => React.ReactNode;
}

function Tooltip({ children, content }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const onMouseEnter: MouseEventHandler = () => setIsOpen(true);
  const onMouseOut: MouseEventHandler = () => setIsOpen(false);

  return (
    <Popup
      paddingY="small"
      paddingX="medium"
      background="neutralBold"
      isOpen={isOpen}
      content={() => <Text size="tiny">{content}</Text>}>
      {({ ref }) => children({ ref, onMouseEnter, onMouseOut })}
    </Popup>
  );
}

export default Tooltip;
