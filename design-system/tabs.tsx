/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { token } from '@atlaskit/tokens';
import Box from 'design-system/box';
import Inline from 'design-system/inline';
import React from 'react';
import Text from 'design-system/text';
import Pressable from 'design-system/pressable';
import FocusRing from 'design-system/focus-ring';

const styles = css({
  tabBorderColor: {
    color: 'transparent',
    ':hover,:active': {
      color: token('color.border.neutral'),
    },
  },
});

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
    <Pressable pressedAppearance="none">
      {(press) => (
        <FocusRing>
          <Box
            href="#"
            as="a"
            borderBottom={isSelected ? 'brand' : 'currentColor'}
            paddingBottom="regular"
            css={!isSelected && styles.tabBorderColor}
            {...press}>
            <Text color={isSelected ? 'selected' : 'medium'} size="smaller" weight="bold">
              {children}
            </Text>
          </Box>
        </FocusRing>
      )}
    </Pressable>
  );
}

export function TabPanel({ children }: TabsProps) {
  return <Box paddingTop="medium">{children}</Box>;
}

function Tabs({ children }: TabsProps) {
  return <Box width="full">{children}</Box>;
}

export default Tabs;
