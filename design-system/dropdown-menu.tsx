/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Popup from 'design-system/popup';
import Pressable from 'design-system/pressable';
import Box from 'design-system/box';
import Button from 'design-system/button';
import { forwardRef, useState } from 'react';
import FocusRing from 'design-system/focus-ring';
import Text from 'design-system/text';

const styles = css({
  reset: {
    fontSize: 16,
    position: 'relative',
    flexShrink: 0,
  },
  block: {
    display: 'block',
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
      <Pressable pressedAppearance="static">
        {(press) => (
          <FocusRing>
            <Box
              as="a"
              css={[styles.block, styles.reset]}
              background="transparent"
              paddingX="medium"
              paddingY="regular"
              ref={ref}
              target="_blank"
              rel="noreferrer"
              href={href}
              {...press}>
              {children}
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
  trigger: string;
}

function DropdownMenu({ children, trigger }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popup paddingY="regular" isOpen={isOpen} content={() => children}>
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
