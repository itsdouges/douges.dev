import Box from 'design-system/box';
import Inline from 'design-system/inline';
import React from 'react';
import Text from 'design-system/text';
import Pressable from 'design-system/pressable';
import FocusRing from 'design-system/focus-ring';

interface TabsProps {
  children: React.ReactNode;
}

export function TabList({ children }: TabsProps) {
  return (
    <Box borderBottom="neutral">
      <Inline gap="large">{children}</Inline>
    </Box>
  );
}

interface TabProps {
  children: React.ReactNode;
  isSelected?: boolean;
}

export function Tab({ children, isSelected }: TabProps) {
  return (
    <Pressable appearance="none">
      {(press) => (
        <FocusRing>
          <Box
            href="#"
            as="a"
            borderBottom={isSelected ? 'brand' : 'neutral'}
            paddingY="small"
            {...press}>
            <Text color={isSelected ? 'selected' : 'low'} size="smaller" weight="bold">
              {children}
            </Text>
          </Box>
        </FocusRing>
      )}
    </Pressable>
  );
}

export function TabPanel({ children }: TabsProps) {
  return <Box paddingY="medium">{children}</Box>;
}

function Tabs({ children }: TabsProps) {
  return <Box width="full">{children}</Box>;
}

export default Tabs;
