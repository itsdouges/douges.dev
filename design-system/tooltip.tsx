import Popup from 'design-system/popup';
import Text from 'design-system/text';
import { MouseEventHandler, useState, useRef } from 'react';
import useEvent from 'lib/use-event';
import mergeRefs from 'lib/merge-refs';

interface TooltipProps {
  content: React.ReactNode;
  children: (props: { ref: React.Ref<any> }) => React.ReactNode;
}

function Tooltip({ children, content }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const refOne = useEvent('mouseenter', () => setIsOpen(true));
  const refTwo = useEvent('mouseout', () => setIsOpen(false));

  return (
    <Popup
      paddingY="small"
      paddingX="regular"
      background="neutralBold"
      isOpen={isOpen}
      content={() => <Text size="tiny">{content}</Text>}>
      {({ ref }) => children({ ref: mergeRefs(refOne, refTwo, ref) })}
    </Popup>
  );
}

export default Tooltip;
