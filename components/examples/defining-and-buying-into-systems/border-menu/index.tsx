/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import ExampleStepper, { Step } from 'components/examples/example-stepper';
import { token } from '@atlaskit/tokens';

const styles = css({
  noBorder: {
    borderLeft: `0 solid ${token('color.text.selected')}`,
  },
  borderLeft: {
    borderLeft: `5px solid ${token('color.text.selected')}`,
  },
  offsetBorder: {
    paddingInlineStart: 11,
  },
  unfocused: {
    transform: 'none',
    transformOrigin: 'left center',
  },
  focused: {
    transform: 'scale(2)',
    transformOrigin: 'left center',
  },
  line: {
    position: 'absolute',
    top: 0,
    left: 16,
    bottom: 0,
    borderLeft: `1px dashed ${token('color.iconBorder.danger')}`,
  },
});

interface MenuGroupProps {
  children: React.ReactNode;
  isFocused?: boolean;
}

function MenuGroup({ children, isFocused }: MenuGroupProps) {
  return (
    <Box
      css={isFocused ? styles.focused : styles.unfocused}
      borderRadius="default"
      background="overlay"
      shadow="overlay"
      paddingY="small">
      {children}
    </Box>
  );
}

function BorderMenu() {
  return (
    <ExampleStepper>
      <Step
        audioSrc={audioOne}
        description="First, let's add some padding to these menu items."
        code={`
        .menu-item {
        }

        .menu-item-selected {
        }
      `}>
        <MenuGroup>
          <Box>Item one</Box>
          <Box css={styles.noBorder}>Item two</Box>
          <Box>Item three</Box>
        </MenuGroup>
      </Step>
      <Step
        description="Nice! Now let's make one appear selected with a left border."
        code={`diff
        .menu-item {
        +  padding: 8px 16px;
        }

        .menu-item-selected {
        }
      `}>
        <MenuGroup>
          <Box paddingY="regular" paddingX="large">
            Item one
          </Box>
          <Box css={styles.noBorder} paddingY="regular" paddingX="large">
            Item two
          </Box>
          <Box paddingY="regular" paddingX="large">
            Item three
          </Box>
        </MenuGroup>
      </Step>
      <Step
        description="Too easy! That was pretty simple."
        code={`diff
        .menu-item {
          padding: 8px 16px;
        }

        .menu-item-selected {
        +  border-left: 5px solid blue;
        }
      `}>
        <MenuGroup>
          <Box paddingY="regular" paddingX="large">
            Item one
          </Box>
          <Box css={styles.borderLeft} background="selected" paddingY="regular" paddingX="large">
            Item two
          </Box>
          <Box paddingY="regular" paddingX="large">
            Item three
          </Box>
        </MenuGroup>
      </Step>
      <Step
        description="Ah! But now the items aren't aligned..."
        code={`diff
        .menu-item {
          padding: 8px 16px;
        }

        .menu-item-selected {
        +  border-left: 5px solid blue;
        }
      `}>
        <MenuGroup isFocused>
          <div css={styles.line} />

          <Box paddingY="regular" paddingX="large">
            Item one
          </Box>
          <Box css={styles.borderLeft} background="selected" paddingY="regular" paddingX="large">
            Item two
          </Box>
          <Box paddingY="regular" paddingX="large">
            Item three
          </Box>
        </MenuGroup>
      </Step>
      <Step
        description="Let's work around it by changing the left padding...?"
        code={`diff
        .menu-item {
          padding: 8px 16px;
        }

        .menu-item-selected {
          border-left: 5px solid blue;
        +  padding-left: 11px;
        }
      `}>
        <MenuGroup isFocused>
          <div css={styles.line} />

          <Box paddingY="regular" paddingX="large">
            Item one
          </Box>
          <Box
            css={[styles.borderLeft, styles.offsetBorder]}
            background="selected"
            paddingY="regular"
            paddingX="large">
            Item two
          </Box>
          <Box paddingY="regular" paddingX="large">
            Item three
          </Box>
        </MenuGroup>
      </Step>
    </ExampleStepper>
  );
}

export default BorderMenu;
