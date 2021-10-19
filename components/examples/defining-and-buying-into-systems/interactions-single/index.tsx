/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import ExampleStepper, { Step } from 'components/examples/example-stepper';
import Inline from 'design-system/inline';
import Text from 'design-system/text';
import token from 'design-system/token';

const styles = css({
  overlay: {
    position: 'relative',
    '::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      backgroundColor: token('color.background.interaction.hovered'),
    },
  },
  text: {
    zIndex: 1,
  },
  unfocused: {
    transform: 'none',
    transformOrigin: 'left top',
  },
  focused: {
    transform: 'scale(2)',
    transformOrigin: 'left top',
  },
  hidden: {
    '::before': {
      opacity: 0,
    },
  },
  shift: {
    '::before': {
      transform: 'translateX(calc(100% + 4px))',
    },
  },
  unshift: {
    '::before': {
      transform: 'none',
    },
  },
  pressed: {
    '::before': {
      backgroundColor: token('color.background.interaction.pressed'),
    },
  },
});

function BorderMenu() {
  return (
    <ExampleStepper>
      <Step
        description="We start with a call to action button"
        code={`
          .button-brand {
            background-color: blue;
          }
        `}>
        <Inline gap="small" wrap="wrap">
          <Box
            css={[styles.overlay, styles.shift, styles.hidden]}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="brandBold">
            <span>Button</span>
          </Box>
        </Inline>
      </Step>
      <Step
        description="We create a before pseudo element to be used for interaction states"
        code={`
        .button-brand {
          background-color: blue;
        }

        .pressable {
          ::before {
            content: '""',
            background-color: rgba(0, 0, 0, 0.15);
          }
        }
        `}>
        <Inline gap="small" wrap="wrap">
          <Box
            css={[styles.overlay, styles.shift]}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="brandBold">
            <span>Button</span>
          </Box>
        </Inline>
      </Step>
      <Step
        description="We then overlay it on top of the interactive element"
        code={`
        .button-brand {
          background-color: blue;
        }

        .pressable {
          position: relative;
          ::before {
            content: '""',
            background-color: rgba(0, 0, 0, 0.15);
            position: 'absolute',
            inset: 0,
          }
        }
        `}>
        <Inline gap="small" wrap="wrap">
          <Box
            css={[styles.overlay, styles.unshift]}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="brandBold">
            <span>Button</span>
          </Box>
        </Inline>
      </Step>
      <Step
        description="When pressing we make the background color more opaque"
        code={`diff
        .button-brand {
          background-color: blue;
        }

        .pressable {
          position: relative;
          ::before {
            content: '""',
            background-color: rgba(0, 0, 0, 0.30);
            position: 'absolute',
            inset: 0,
          }
        }
        `}>
        <Inline gap="small" wrap="wrap">
          <Box
            css={[styles.overlay, styles.unshift, styles.pressed, styles.unfocused]}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="brandBold">
            <span>Button</span>
          </Box>
        </Inline>
      </Step>
      <Step
        description="But we have a problem, the text is being washed out!"
        code={`diff
        .button-brand {
          background-color: blue;
        }

        .pressable {
          position: relative;
          ::before {
            content: '""',
            background-color: rgba(0, 0, 0, 0.30);
            position: 'absolute',
            inset: 0,
          }
        }
        `}>
        <Inline gap="small" wrap="wrap">
          <Box
            css={[styles.overlay, styles.unshift, styles.pressed, styles.focused]}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="brandBold">
            <span>Button</span>
          </Box>
        </Inline>
      </Step>
      <Step
        description="We enable a stacking context for text to have it appear above the overlay"
        code={`diff
        .button-brand {
          background-color: blue;
        }

        .pressable {
          position: relative;
          ::before {
            content: '""',
            background-color: rgba(0, 0, 0, 0.30);
            position: 'absolute',
            inset: 0,
          }
        }

        .text {
          isolation: isolate;
        }
        `}>
        <Inline gap="small" wrap="wrap">
          <Box
            css={[styles.overlay, styles.unshift, styles.pressed, styles.focused]}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="brandBold">
            <span css={styles.text}>Button</span>
          </Box>
        </Inline>
      </Step>
    </ExampleStepper>
  );
}

export default BorderMenu;
