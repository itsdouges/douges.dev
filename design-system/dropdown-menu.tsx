/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Popup from 'design-system/popup';
import Pressable from 'design-system/pressable';
import Box from 'design-system/box';
import Button from 'design-system/button';
import { useState } from 'react';
import FocusRing from 'design-system/focus-ring';
import Text from 'design-system/text';

const styles = css({
  reset: {
    fontSize: 16,
    position: 'relative',
    overflow: 'hidden',
    flexShrink: 0,
    ':hover,:active': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
  block: {
    display: 'block',
  },
});

interface MenuItemProps {
  children: React.ReactNode;
  href: string;
  secondary?: React.ReactNode;
}

export function MenuItem({ children, href, secondary }: MenuItemProps) {
  return (
    <Pressable pressedAppearance="static">
      {(press) => (
        <FocusRing>
          <Box
            css={styles.block}
            shouldForwardProps
            background="transparent"
            paddingX="large"
            paddingY="medium">
            <a target="_blank" rel="noreferrer" href={href} css={styles.reset} {...press}>
              {children}
              {secondary && (
                <Text as="div" size="tiny" color="low">
                  {secondary}
                </Text>
              )}
            </a>
          </Box>
        </FocusRing>
      )}
    </Pressable>
  );
}

interface DropdownMenuProps {
  children: React.ReactNode;
  trigger: string;
}

function DropdownMenu({ children, trigger }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popup paddingY="medium" isOpen={isOpen} content={() => children}>
      {(props) => (
        <Button
          {...props}
          appearance="transparent"
          isSelected={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}>
          {trigger}
        </Button>
      )}
    </Popup>
  );
}

export default DropdownMenu;
