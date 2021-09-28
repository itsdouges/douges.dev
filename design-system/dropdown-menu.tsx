/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Popup from 'design-system/popup';
import Pressable from 'design-system/pressable';
import Box from 'design-system/box';
import Button from 'design-system/button';
import React, { forwardRef, useState } from 'react';
import FocusRing from 'design-system/focus-ring';
import Text from 'design-system/text';

const styles = css({
  item: {
    position: 'relative',
    flexShrink: 0,
    minHeight: 40,
    justifyContent: 'center',
  },
});

interface MenuItemProps {
  children: React.ReactNode;
  href?: string;
  secondary?: React.ReactNode;
  isSelected?: boolean;
}

export const MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>(
  ({ children, href, secondary, isSelected }: MenuItemProps, ref) => {
    return (
      <Pressable pressedAppearance="static">
        {(press) => (
          <FocusRing appearance="inset">
            <Box
              as="a"
              css={styles.item}
              background={isSelected ? 'selected' : 'transparent'}
              paddingX="medium"
              paddingY="regular"
              display="block flex"
              border="left"
              borderColor={isSelected ? 'brand' : undefined}
              ref={ref}
              target="_blank"
              rel="noreferrer"
              href={href}
              {...press}>
              <Text size="smaller" color={isSelected ? 'selected' : 'high'}>
                {children}
              </Text>
              {secondary && (
                <Text as="div" size="smallest" color="low">
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
  trigger:
    | string
    | ((props: { ref: any; onClick: () => void; isSelected: boolean }) => React.ReactNode);
}

function DropdownMenu({ children, trigger }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <Popup paddingY="regular" isOpen={isOpen} content={() => children}>
      {({ ref }) =>
        typeof trigger === 'string' ? (
          <Button ref={ref} appearance="default" isSelected={isOpen} onClick={toggle}>
            {trigger}
          </Button>
        ) : (
          trigger({ isSelected: isOpen, onClick: toggle, ref })
        )
      }
    </Popup>
  );
}

export default DropdownMenu;
