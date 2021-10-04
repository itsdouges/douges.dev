/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import ExampleStepper, { Step } from 'components/examples/example-stepper';
import { token } from '@atlaskit/tokens';
import Inline from 'design-system/inline';

const styles = css({
  default: {
    transition: 'none',
    ':hover': {
      backgroundColor: token('color.background.subtleNeutral.hover'),
    },
    ':active': {
      backgroundColor: token('color.background.subtleNeutral.pressed'),
    },
  },
  brand: {
    transition: 'none',
    ':hover': {
      backgroundColor: token('color.background.boldBrand.hover'),
    },
    ':active': {
      backgroundColor: token('color.background.boldBrand.pressed'),
    },
  },
  success: {
    transition: 'none',
    ':hover': {
      backgroundColor: token('color.background.boldSuccess.hover'),
    },
    ':active': {
      backgroundColor: token('color.background.boldSuccess.pressed'),
    },
  },
  danger: {
    transition: 'none',
    ':hover': {
      backgroundColor: token('color.background.boldDanger.hover'),
    },
    ':active': {
      backgroundColor: token('color.background.boldDanger.pressed'),
    },
  },
  warning: {
    transition: 'none',
    ':hover': {
      backgroundColor: token('color.background.boldWarning.hover'),
    },
    ':active': {
      backgroundColor: token('color.background.boldWarning.pressed'),
    },
  },
  discovery: {
    transition: 'none',
    ':hover': {
      backgroundColor: token('color.background.boldDiscovery.hover'),
    },
    ':active': {
      backgroundColor: token('color.background.boldDiscovery.pressed'),
    },
  },
  transparent: {
    transition: 'none',
    ':hover': {
      backgroundColor: token('color.background.transparentNeutral.hover'),
    },
    ':active': {
      backgroundColor: token('color.background.transparentNeutral.pressed'),
    },
  },
});

function BorderMenu() {
  return (
    <ExampleStepper>
      <Step
        description="Let's start with our default button"
        code={`css
          .button-default {

          }
        `}>
        <Box paddingX="medium" paddingY="small" borderRadius="default" display="inline flex">
          Default
        </Box>
      </Step>
      <Step
        description="First giving it a background color"
        code={`diff
          .button-default {
          +  background-color: lightgray;
          }
        `}>
        <Box
          paddingX="medium"
          paddingY="small"
          borderRadius="default"
          display="inline flex"
          background="neutralSubtle">
          Default
        </Box>
      </Step>
      <Step
        description="And then let's make it interactive [press the button]"
        code={`diff
          .button-default {
            background-color: lightgray;
          +  :hover {
          +    background-color: slategray;
          +  }
          +  :active {
          +    background-color: darkslategray;
          +  }
          }
        `}>
        <Box
          css={styles.default}
          paddingX="medium"
          paddingY="small"
          borderRadius="default"
          display="inline flex"
          background="neutralSubtle">
          Default
        </Box>
      </Step>
      <Step
        description="And then let's add a call to action button"
        code={`diff
          .button-default {
            background-color: lightgray;
            :hover {
              background-color: slategray;
            }
            :active {
              background-color: darkslategray;
            }
          }
          +.button-brand {
          +  background-color: blue;
          +  :hover {
          +    background-color: mediumblue;
          +  }
          +  :active {
          +    background-color: darkblue;
          +  }
          +}
        `}>
        <Inline gap="small">
          <Box
            css={styles.default}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="neutralSubtle">
            Default
          </Box>
          <Box
            css={styles.brand}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="brandBold">
            Call to action
          </Box>
        </Inline>
      </Step>
      <Step
        description="And another button for success"
        code={`diff
          .button-default {
            background-color: lightgray;
            :hover {
              background-color: slategray;
            }
            :active {
              background-color: darkslategray;
            }
          }
          .button-brand {
            background-color: blue;
            :hover {
              background-color: mediumblue;
            }
            :active {
              background-color: darkblue;
            }
          }
          +.button-success {
          +  background-color: forestgreen;
          +  :hover {
          +    background-color: green;
          +  }
          +  :active {
          +    background-color: darkgreen;
          +  }
          +}
        `}>
        <Inline gap="small">
          <Box
            css={styles.default}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="neutralSubtle">
            Default
          </Box>
          <Box
            css={styles.brand}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="brandBold">
            Call to action
          </Box>
          <Box
            css={styles.success}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="successBold">
            Success
          </Box>
        </Inline>
      </Step>
      <Step
        description="[cries in interaction states]"
        code={`diff
          .button-default {
            background-color: lightgray;
            :hover {
              background-color: slategray;
            }
            :active {
              background-color: darkslategray;
            }
          }
          .button-brand {
            background-color: blue;
            :hover {
              background-color: mediumblue;
            }
            :active {
              background-color: darkblue;
            }
          }
          .button-success {
            background-color: forestgreen;
            :hover {
              background-color: green;
            }
            :active {
              background-color: darkgreen;
            }
          }
          +.button-danger {
          +  background-color: red;
          +  :hover {
          +    background-color: firebrick;
          +  }
          +  :active {
          +    background-color: darkred;
          +  }
          +}
          +.button-warning {
          +  background-color: yellow;
          +  :hover {
          +    background-color: khaki;
          +  }
          +  :active {
          +    background-color: darkkhaki;
          +  }
          +}
          +.button-discovery {
          +  background-color: mediumorchid;
          +  :hover {
          +    background-color: mediumpurple;
          +  }
          +  :active {
          +    background-color: blueviolet;
          +  }
          +}
          +.button-subtle {
          +  background-color: transparent;
          +  :hover {
          +    background-color: lightgray;
          +  }
          +  :active {
          +    background-color: slategray;
          +  }
          +}
        `}>
        <Inline gap="small" wrap="wrap">
          <Box
            css={styles.default}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="neutralSubtle">
            Default
          </Box>
          <Box
            css={styles.brand}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="brandBold">
            Call to action
          </Box>
          <Box
            css={styles.success}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="successBold">
            Success
          </Box>
          <Box
            css={styles.danger}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="dangerBold">
            Danger
          </Box>
          <Box
            css={styles.warning}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="warningBold">
            Warning
          </Box>
          <Box
            css={styles.discovery}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="discoveryBold">
            Discovery
          </Box>
          <Box
            css={styles.transparent}
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="transparent">
            Subtle
          </Box>
        </Inline>
      </Step>
    </ExampleStepper>
  );
}

export default BorderMenu;
