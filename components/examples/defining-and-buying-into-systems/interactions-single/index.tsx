/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import ExampleStepper, { Step } from 'components/examples/example-stepper';
import Inline from 'design-system/inline';
import token from 'design-system/token';
import { keyframes } from '@emotion/react';
import { AvatarButton } from 'design-system/avatar';
import { TagLink } from 'design-system/tag';

const intenseClicking = keyframes({
  from: {
    backgroundColor: token('color.background.interaction.pressed'),
  },
  to: {
    backgroundColor: token('color.background.interaction.hovered'),
  },
});

const styles = css({
  intense: {
    '::before': {
      animationName: intenseClicking,
      animationDuration: '1s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'steps(2)',
    },
  },
  overlay: {
    position: 'relative',
    cursor: 'pointer',
    '::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
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
  hovered: {
    '::before': {
      backgroundColor: token('color.background.interaction.hovered'),
    },
  },
  pressed: {
    '::before': {
      backgroundColor: token('color.background.interaction.pressed'),
    },
  },
  interactive: {
    '::before': {
      transition: 'none',
    },
    ':hover': {
      '::before': {
        backgroundColor: token('color.background.interaction.hovered'),
      },
    },
    ':active': {
      '::before': {
        backgroundColor: token('color.background.interaction.pressed'),
      },
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
            css={[styles.overlay, styles.hovered, styles.shift]}
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
            css={[styles.overlay, styles.hovered, styles.unshift]}
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
            css={[styles.overlay, styles.unshift, styles.unfocused, styles.intense]}
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
        description="But we have a problem, the text is underneath the overlay"
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
        description="We enable a stacking context for text appear above it"
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
            css={[styles.overlay, styles.hovered, styles.unshift, styles.focused]}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="brandBold">
            <span css={styles.text}>Button</span>
          </Box>
        </Inline>
      </Step>
      <Step
        description="And we're done, press that button!"
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
            css={[styles.overlay, styles.unshift, styles.unfocused, styles.interactive]}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="brandBold">
            <span css={styles.text}>Button</span>
          </Box>
        </Inline>
      </Step>
      <Step
        shouldDisableTransitions
        description="The great thing is this can work for all use cases, including avatars, images, and more!"
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
        <Inline gap="small" blockAlign="middle" wrap="wrap">
          <Box
            css={[styles.overlay, styles.unshift, styles.unfocused, styles.interactive]}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="brandBold">
            <span css={styles.text}>Button</span>
          </Box>

          <Box
            css={[styles.overlay, styles.unshift, styles.unfocused, styles.interactive]}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="neutralSubtle">
            <span css={styles.text}>Button</span>
          </Box>

          <AvatarButton />

          <TagLink>Tag</TagLink>
        </Inline>
      </Step>
    </ExampleStepper>
  );
}

export default BorderMenu;
