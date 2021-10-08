/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import ExampleStepper, { Step } from 'components/examples/example-stepper';
import { token } from '@atlaskit/tokens';
import Inline from 'design-system/inline';
import Text from 'design-system/text';

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
        <Inline gap="small" wrap="wrap">
          <Box paddingX="medium" paddingY="small" borderRadius="default" display="inline flex">
            Default
          </Box>
        </Inline>
      </Step>
      <Step
        description="First giving it a background color"
        code={`diff
          .button-default {
          +  background-color: lightgray;
          }
        `}>
        <Inline gap="small" wrap="wrap">
          <Box
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="neutralSubtle">
            Default
          </Box>
        </Inline>
      </Step>
      <Step
        description="And then let's make it interactive [button press intensifies]"
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
        </Inline>
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
            background="brandBold"
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex">
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
        </Inline>
      </Step>
      <Step
        description="And don't forget the rest of the button crew!"
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
         .button-danger {
           background-color: red;
           :hover {
             background-color: firebrick;
           }
           :active {
             background-color: darkred;
           }
         }
         .button-warning {
           background-color: yellow;
           :hover {
             background-color: khaki;
           }
           :active {
             background-color: darkkhaki;
           }
         }
         .button-discovery {
           background-color: mediumorchid;
           :hover {
             background-color: mediumpurple;
           }
           :active {
             background-color: blueviolet;
           }
         }
         .button-subtle {
           background-color: transparent;
           :hover {
             background-color: lightgray;
           }
           :active {
             background-color: slategray;
           }
         }

        +.despair {
        +  mood: "(ﾟ´Д｀ﾟ)ﾟ";
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
          <Box
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="dangerSubtle">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </Box>
          <Box
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="successSubtle">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </Box>
          <Box
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="brandSubtle">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </Box>
          <Box
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="neutralSubtle">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </Box>
          <Box
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="warningSubtle">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </Box>
          <Box
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="discoverySubtle">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </Box>
          <Box
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="dangerBold">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </Box>
          <Box
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="successBold">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </Box>
          <Box paddingX="small" borderRadius="default" display="inline flex" background="brandBold">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </Box>
          <Box
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="neutralBold">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </Box>
          <Box
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="warningBold">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </Box>
          <Box
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="discoveryBold">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </Box>
          <Box
            display="inline flex"
            background="neutralSubtle"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </Box>
          <Box
            display="inline flex"
            background="accentBlueSubtle"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </Box>
          <Box
            display="inline flex"
            background="accentGreenSubtle"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </Box>
          <Box
            display="inline flex"
            background="accentMagentaSubtle"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </Box>
          <Box
            display="inline flex"
            background="accentOrangeSubtle"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </Box>
          <Box
            display="inline flex"
            background="accentPurpleSubtle"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </Box>
          <Box
            display="inline flex"
            background="accentRedSubtle"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </Box>
          <Box
            display="inline flex"
            background="accentTealSubtle"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </Box>
          <Box
            display="inline flex"
            background="neutralBold"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </Box>
          <Box
            display="inline flex"
            background="accentBlueBold"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </Box>
          <Box
            display="inline flex"
            background="accentGreenBold"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </Box>
          <Box
            display="inline flex"
            background="accentOrangeBold"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </Box>
          <Box
            display="inline flex"
            background="accentPurpleBold"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </Box>
          <Box
            display="inline flex"
            background="accentRedBold"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </Box>
          <Box
            display="inline flex"
            background="accentTealBold"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </Box>
        </Inline>
      </Step>
    </ExampleStepper>
  );
}

export default BorderMenu;
