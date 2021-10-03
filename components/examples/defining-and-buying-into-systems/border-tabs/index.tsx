/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import ExampleStepper, { Step } from 'components/examples/example-stepper';
import { token } from '@atlaskit/tokens';
import Inline from 'design-system/inline';
import Text from 'design-system/text';

const borderSize = '3px';

const styles = css({
  noBorder: {
    borderBottom: `0 solid ${token('color.border.neutral')}`,
  },
  border: {
    borderBottom: `${borderSize} solid ${token('color.border.neutral')}`,
  },
  noBorderSelected: {
    borderBottom: `0 solid ${token('color.text.selected')}`,
  },
  borderSelected: {
    borderBottom: `${borderSize} solid ${token('color.text.selected')}`,
  },
  unfocused: {
    transform: 'none',
    transformOrigin: 'left top',
  },
  focused: {
    transform: 'scale(2)',
    transformOrigin: 'left top',
  },
  borderSelectedWorkaround: {
    marginBottom: `-${borderSize}`,
  },
});

interface TabsProps {
  isFocused?: boolean;
  isSelected?: boolean;
  hasBottomBorder?: boolean;
  hasSelectedWorkaround?: boolean;
}

function Tabs({ isFocused, isSelected, hasBottomBorder, hasSelectedWorkaround }: TabsProps) {
  return (
    <Box css={isFocused ? styles.focused : styles.unfocused}>
      <Box css={hasBottomBorder ? styles.border : styles.noBorder}>
        <Inline gap="large">
          <Box
            css={
              isSelected
                ? [styles.borderSelected, hasSelectedWorkaround && styles.borderSelectedWorkaround]
                : styles.noBorderSelected
            }
            paddingY="regular">
            <Text weight="bold" color={isSelected ? 'selected' : 'medium'}>
              Favourites
            </Text>
          </Box>
          <Box paddingY="regular">
            <Text weight="bold" color="medium">
              Latest
            </Text>
          </Box>
          <Box paddingY="regular">
            <Text weight="bold" color="medium">
              All items
            </Text>
          </Box>
        </Inline>
      </Box>

      <Box paddingTop={hasBottomBorder ? 'medium' : undefined}>
        <Box background="neutralSubtle" padding="xlarge">
          <Text color="low" weight="bolder">
            Content
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function BorderMenu() {
  return (
    <ExampleStepper>
      <Step
        description="Let's add a bottom border for the tabs"
        code={`css
        .tab-group {

        }

        .tab-selected {

        }
      `}>
        <Tabs />
      </Step>
      <Step
        description="Nice! Now let's mark a tab as selected"
        code={`diff
        .tab-group {
        +  borderBottom: ${borderSize} solid gray;
        }

        .tab-selected {

        }
      `}>
        <Tabs hasBottomBorder />
      </Step>
      <Step
        description="That's looking pretty selected"
        code={`diff
        .tab-group {
          borderBottom: ${borderSize} solid gray;
        }

        .tab-selected {
        +  borderBottom: ${borderSize} solid blue;
        }
      `}>
        <Tabs hasBottomBorder isSelected />
      </Step>
      <Step
        description="Ah... But the borders don't overlap..."
        code={`diff
        .tab-group {
          borderBottom: ${borderSize} solid gray;
        }

        .tab-selected {
        +  borderBottom: ${borderSize} solid blue;
        }
      `}>
        <Tabs hasBottomBorder isSelected isFocused />
      </Step>
      <Step
        description="We can work around it by offsetting margin"
        code={`diff
        .tab-group {
          borderBottom: ${borderSize} solid gray;
        }

        .tab-selected {
          borderBottom: ${borderSize} solid blue;
        +  margin-bottom: -${borderSize};
        }
      `}>
        <Tabs hasBottomBorder isSelected isFocused hasSelectedWorkaround />
      </Step>
      <Step
        description="Perfection?"
        code={`css
        .tab-group {
          borderBottom: ${borderSize} solid gray;
        }

        .tab-selected {
          borderBottom: ${borderSize} solid blue;
          margin-bottom: -${borderSize};
        }
      `}>
        <Tabs hasBottomBorder isSelected hasSelectedWorkaround />
      </Step>
    </ExampleStepper>
  );
}

export default BorderMenu;
