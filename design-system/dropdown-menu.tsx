/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Popup from 'design-system/popup';
import Pressable from 'design-system/pressable';
import Box from 'design-system/box';
import Button from 'design-system/button';
import { forwardRef, useState } from 'react';
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
              <Stack gap="small">
                <Text size="small">{children}</Text>
                {secondary && (
                  <Text as="div" size="smaller" color="low">
                    {secondary}
                  </Text>
                )}
              </Stack>
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
          appearance="subtle"
          isSelected={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}>
          {trigger}
        </Button>
      )}
    </Popup>
  );
}

export default DropdownMenu;
