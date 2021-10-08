/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import ExampleStepper, { Step } from 'components/examples/example-stepper';
import Inline from 'design-system/inline';
import Text from 'design-system/text';
import { token } from '@atlaskit/tokens';

const styles = css({
  unfocused: {
    transform: 'none',
    transformOrigin: 'left 20%',
  },
  focused: {
    transform: 'scale(1.9)',
    transformOrigin: 'left 20%',
  },
  hline: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 31,
    borderBottom: `1px dashed ${token('color.iconBorder.danger')}`,
  },
  vline: {
    position: 'absolute',
    top: 0,
    left: 16,
    bottom: 0,
    borderLeft: `1px dashed ${token('color.iconBorder.danger')}`,
  },
});

interface TabsProps {
  isFocused?: boolean;
  isTabSelected?: boolean;
  hasBottomBorder?: boolean;
  hasMenuItemPadding?: boolean;
  isItemSelected?: boolean;
}

function Tabs({
  isFocused,
  isItemSelected,
  isTabSelected,
  hasBottomBorder,
  hasMenuItemPadding,
}: TabsProps) {
  return (
    <Box css={isFocused ? styles.focused : styles.unfocused}>
      {isFocused && <div css={styles.vline} />}
      {isFocused && <div css={styles.hline} />}

      <Box border="bottom" borderColor={hasBottomBorder ? 'neutral' : undefined}>
        <Inline gap="large">
          <Box
            border="bottom"
            borderColor={isTabSelected ? 'brand' : 'transparent'}
            paddingBottom="regular">
            <Text weight="bold" size="smaller" color={isTabSelected ? 'selected' : 'medium'}>
              Favourites
            </Text>
          </Box>
          <Box paddingBottom="regular">
            <Text weight="bold" size="smaller" color="medium">
              Latest
            </Text>
          </Box>
          <Box paddingBottom="regular">
            <Text weight="bold" size="smaller" color="medium">
              All items
            </Text>
          </Box>
        </Inline>
      </Box>

      <Box paddingTop={hasBottomBorder ? 'medium' : undefined}>
        <Box background="neutralSubtle" paddingY="regular">
          <Box
            css={styles.hack}
            border="left"
            borderColor={isItemSelected ? 'brand' : undefined}
            background={isItemSelected ? 'selected' : undefined}
            paddingY={hasMenuItemPadding ? 'regular' : undefined}
            paddingX={hasMenuItemPadding ? 'large' : undefined}>
            Profile
          </Box>
          <Box
            paddingY={hasMenuItemPadding ? 'regular' : undefined}
            paddingX={hasMenuItemPadding ? 'large' : undefined}>
            Settings
          </Box>
          <Box
            paddingY={hasMenuItemPadding ? 'regular' : undefined}
            paddingX={hasMenuItemPadding ? 'large' : undefined}>
            Help
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function BorderShadow() {
  return (
    <ExampleStepper>
      <Step
        description="We start with a basic implement of tabs with a menu list"
        code={`css
        .menu-item {

        }

        .tab-group {

        }

        .menu-item-selected {

        }

        .tab-selected {

        }
      `}>
        <Tabs />
      </Step>
      <Step
        description="Let's give the menu items some padding"
        code={`diff
        .menu-item {
        +  padding: 8px 16px;
        }

        .tab-group {

        }

        .menu-item-selected {

        }

        .tab-selected {

        }
      `}>
        <Tabs hasMenuItemPadding />
      </Step>
      <Step
        description="Now let's add a bottom border to the tabs list"
        code={`diff
        .menu-item {
          padding: 8px 16px;
        }

        .tab-group {
        +  boxShadow: inset 0 -2px 0 0 gray;
        }

        .menu-item-selected {

        }

        .tab-selected {

        }
      `}>
        <Tabs hasBottomBorder hasMenuItemPadding />
      </Step>
      <Step
        description="Now let's select the first menu item"
        code={`diff
        .menu-item {
          padding: 8px 16px;
        }

        .tab-group {
          boxShadow: inset 0 -2px 0 0 gray;
        }

        .menu-item-selected {
        +  boxShadow: inset 2px 0 0 0 blue;
        }

        .tab-selected {

        }
      `}>
        <Tabs isItemSelected hasBottomBorder hasMenuItemPadding />
      </Step>
      <Step
        description="As well as the first tab"
        code={`diff
        .menu-item {
          padding: 8px 16px;
        }

        .tab-group {
          boxShadow: inset 0 -2px 0 0 gray;
        }

        .menu-item-selected {
          boxShadow: inset 2px 0 0 0 blue;
        }

        .tab-selected {
        +  boxShadow: inset 0 -2px 0 0 blue;
        }
      `}>
        <Tabs isItemSelected isTabSelected hasBottomBorder hasMenuItemPadding />
      </Step>
      <Step
        description="Both are aligned perfectly without needing to use workarounds"
        code={`css
        .menu-item {
          padding: 8px 16px;
        }

        .tab-group {
          boxShadow: inset 0 -2px 0 0 gray;
        }

        .menu-item-selected {
          boxShadow: inset 2px 0 0 0 blue;
        }

        .tab-selected {
          boxShadow: inset 0 -2px 0 0 blue;
        }
      `}>
        <Tabs isFocused isItemSelected isTabSelected hasBottomBorder hasMenuItemPadding />
      </Step>
    </ExampleStepper>
  );
}

export default BorderShadow;
