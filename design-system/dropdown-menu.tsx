/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Popup from 'design-system/popup';
import Pressable from 'design-system/pressable';
import Box from 'design-system/box';
import Button from 'design-system/button';
import React, { forwardRef, useState } from 'react';
import FocusRing from 'design-system/focus-ring';
import Text from 'design-system/text';
import Stack from 'design-system/stack';

const styles = css({
  item: {
    position: 'relative',
    flexShrink: 0,
    minHeight: 40,
  },
});

interface MenuItemProps {
  children: React.ReactNode;
  href: string;
  secondary?: React.ReactNode;
}

export const MenuItem = forwardRef<HTMLAnchorElement, any>(
  ({ children, href, secondary }: MenuItemProps, ref) => {
    return (
      <Pressable appearance="static">
        {(press) => (
          <FocusRing>
            <Box
              as="a"
              css={styles.item}
              background="transparent"
              paddingX="medium"
              paddingY="regular"
              ref={ref}
              target="_blank"
              rel="noreferrer"
              href={href}
              {...press}>
              <Text size="small">{children}</Text>
              {secondary && (
                <Text as="div" size="smaller" color="low">
                  {secondary}
                </Text>
              )}
            </Box>
          </FocusRing>
        )}
      </Pressable>
    );
  }
);

MenuItem.displayName = 'MenuItem';

interface DropdownMenuProps {
  children: React.ReactNode;
  trigger: string | ((props: { onClick: () => void; isOpen: boolean }) => React.ReactNode);
}

function DropdownMenu({ children, trigger }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <Popup paddingY="regular" isOpen={isOpen} content={() => children}>
      {(props) =>
        typeof trigger === 'string' ? (
          <Button {...props} appearance="default" isSelected={isOpen} onClick={toggle}>
            {trigger}
          </Button>
        ) : (
          trigger({ isOpen, onClick: toggle })
        )
      }
    </Popup>
  );
}

export default DropdownMenu;
