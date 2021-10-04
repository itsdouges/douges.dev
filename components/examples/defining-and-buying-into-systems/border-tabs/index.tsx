/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import ExampleStepper, { Step } from 'components/examples/example-stepper';
import { token } from '@atlaskit/tokens';
import Inline from 'design-system/inline';
import Text from 'design-system/text';

const borderSize = '2px';

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
    transform: 'scale(2.5)',
    transformOrigin: 'left top',
  },
  borderSelectedWorkaround: {
    marginBottom: `-${borderSize}`,
  },
  line: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 32,
    borderBottom: `1px dashed ${token('color.iconBorder.danger')}`,
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
      {isFocused && <div css={styles.line} />}

      <Box css={hasBottomBorder ? styles.border : styles.noBorder}>
        <Inline gap="large">
          <Box
            css={
              isSelected
                ? [styles.borderSelected, hasSelectedWorkaround && styles.borderSelectedWorkaround]
                : styles.noBorderSelected
            }
            paddingBottom="regular">
            <Text weight="bold" size="smaller" color={isSelected ? 'selected' : 'medium'}>
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
        description="We start with some basic tabs"
        code={`css
        .tab-group {

        }

        .tab-selected {

        }
      `}>
        <Tabs />
      </Step>
      <Step
        description="Let's add a bottom border for the tabs"
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
        description="Nice! Now let's mark the first tab as selected"
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
        description="That works!"
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
