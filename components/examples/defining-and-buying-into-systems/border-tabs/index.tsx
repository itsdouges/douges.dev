/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import ExampleStepper, { Step } from 'components/examples/example-stepper';
import { token } from '@atlaskit/tokens';
import Inline from 'design-system/inline';
import Text from 'design-system/text';

const styles = css({
  noBorder: {
    borderBottom: `0 solid ${token('color.border.neutral')}`,
  },
  border: {
    borderBottom: `4px solid ${token('color.border.neutral')}`,
  },
  noBorderSelected: {
    borderBottom: `0 solid ${token('color.text.selected')}`,
  },
  borderSelected: {
    borderBottom: `4px solid ${token('color.text.selected')}`,
  },
  unfocused: {
    transform: 'none',
    transformOrigin: 'left 20%',
  },
  focused: {
    transform: 'scale(1.5)',
    transformOrigin: 'left 20%',
  },
  line: {
    position: 'absolute',
    top: 16,
    left: 0,
    right: 0,
    borderTop: `1px dashed ${token('color.iconBorder.danger')}`,
  },
});

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
        <Box css={styles.unfocused}>
          <Box css={styles.noBorder}>
            <Inline gap="large">
              <Box paddingY="regular">
                <Text weight="bold" color="medium">
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

          <Box>
            <Box background="neutralSubtle" padding="xlarge">
              <Text color="low" weight="bolder">
                Content
              </Text>
            </Box>
          </Box>
        </Box>
      </Step>
      <Step
        description="Nice! Now let's mark a tab as selected"
        code={`diff
        .tab-group {
        +  borderBottom: 4px solid gray;
        }

        .tab-selected {

        }
      `}>
        <Box css={styles.unfocused}>
          <Box css={styles.border}>
            <Inline gap="large">
              <Box css={styles.noBorderSelected} paddingY="regular">
                <Text weight="bold" color="medium">
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

          <Box paddingTop="medium">
            <Box background="neutralSubtle" padding="xlarge">
              <Text color="low" weight="bolder">
                Content
              </Text>
            </Box>
          </Box>
        </Box>
      </Step>
      <Step
        description="That's looking pretty selected"
        code={`diff
        .tab-group {
          borderBottom: 4px solid gray;
        }

        .tab-selected {
        +  borderBottom: 4px solid blue;
        }
      `}>
        <Box css={styles.unfocused}>
          <Box css={styles.border}>
            <Inline gap="large">
              <Box css={styles.borderSelected} paddingY="regular">
                <Text weight="bold" color="selected">
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

          <Box paddingTop="medium">
            <Box background="neutralSubtle" padding="xlarge">
              <Text color="low" weight="bolder">
                Content
              </Text>
            </Box>
          </Box>
        </Box>
      </Step>
      <Step
        description="Ah... But the borders don't overlap..."
        code={`diff
        .tab-group {
          borderBottom: 4px solid gray;
        }

        .tab-selected {
        +  borderBottom: 4px solid blue;
        }
      `}>
        <Box css={styles.focused}>
          <Box css={styles.border}>
            <Inline gap="large">
              <Box css={styles.borderSelected} paddingY="regular">
                <Text weight="bold" color="selected">
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

          <Box paddingTop="medium">
            <Box background="neutralSubtle" padding="xlarge">
              <Text color="low" weight="bolder">
                Content
              </Text>
            </Box>
          </Box>
        </Box>
      </Step>
    </ExampleStepper>
  );
}

export default BorderMenu;
