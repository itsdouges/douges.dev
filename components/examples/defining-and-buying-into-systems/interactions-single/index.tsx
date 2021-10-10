/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box, { BoxProps } from 'design-system/box';
import ExampleStepper, { Step } from 'components/examples/example-stepper';
import Inline from 'design-system/inline';
import Text from 'design-system/text';
import Pressable from 'design-system/pressable';

function PressableBox(props: BoxProps<'div'>) {
  return (
    <Pressable pressedAppearance="static">
      {(press) => (
        <Box {...press} {...props}>
          {props.children}
        </Box>
      )}
    </Pressable>
  );
}

function BorderMenu() {
  return (
    <ExampleStepper>
      <Step
        shouldDisableTransitions
        description=""
        code={`diff

        `}>
        <Inline gap="small" wrap="wrap">
          <PressableBox
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="neutralSubtle">
            <Text>Button</Text>
          </PressableBox>
          <PressableBox
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="brandBold">
            <Text>Button</Text>
          </PressableBox>
          <PressableBox
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="successBold">
            <Text>Button</Text>
          </PressableBox>
          <PressableBox
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="dangerBold">
            <Text>Button</Text>
          </PressableBox>
          <PressableBox
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="warningBold">
            <Text>Button</Text>
          </PressableBox>
          <PressableBox
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="discoveryBold">
            <Text>Button</Text>
          </PressableBox>
          <PressableBox
            paddingX="medium"
            paddingY="small"
            borderRadius="default"
            display="inline flex"
            background="transparent">
            <Text>Button</Text>
          </PressableBox>
        </Inline>
        <Inline paddingY="regular" gap="small" wrap="wrap">
          <PressableBox
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="dangerSubtle">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </PressableBox>
          <PressableBox
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="successSubtle">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </PressableBox>
          <PressableBox
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="brandSubtle">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </PressableBox>
          <PressableBox
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="neutralSubtle">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </PressableBox>
          <PressableBox
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="warningSubtle">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </PressableBox>
          <PressableBox
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="discoverySubtle">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </PressableBox>
          <PressableBox
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="dangerBold">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </PressableBox>
          <PressableBox
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="successBold">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </PressableBox>
          <PressableBox
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="brandBold">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </PressableBox>
          <PressableBox
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="neutralBold">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </PressableBox>
          <PressableBox
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="warningBold">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </PressableBox>
          <PressableBox
            paddingX="small"
            borderRadius="default"
            display="inline flex"
            background="discoveryBold">
            <Text size="smallest" weight="bold">
              Lozenge
            </Text>
          </PressableBox>
        </Inline>
        <Inline gap="small" wrap="wrap">
          <PressableBox
            display="inline flex"
            background="neutralSubtle"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </PressableBox>
          <PressableBox
            display="inline flex"
            background="accentBlueSubtle"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </PressableBox>
          <PressableBox
            display="inline flex"
            background="accentGreenSubtle"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </PressableBox>
          <PressableBox
            display="inline flex"
            background="accentMagentaSubtle"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </PressableBox>
          <PressableBox
            display="inline flex"
            background="accentOrangeSubtle"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </PressableBox>
          <PressableBox
            display="inline flex"
            background="accentPurpleSubtle"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </PressableBox>
          <PressableBox
            display="inline flex"
            background="accentRedSubtle"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </PressableBox>
          <PressableBox
            display="inline flex"
            background="accentTealSubtle"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </PressableBox>
          <PressableBox
            display="inline flex"
            background="neutralBold"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </PressableBox>
          <PressableBox
            display="inline flex"
            background="accentBlueBold"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </PressableBox>
          <PressableBox
            display="inline flex"
            background="accentGreenBold"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </PressableBox>
          <PressableBox
            display="inline flex"
            background="accentOrangeBold"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </PressableBox>
          <PressableBox
            display="inline flex"
            background="accentPurpleBold"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </PressableBox>
          <PressableBox
            display="inline flex"
            background="accentRedBold"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </PressableBox>
          <PressableBox
            display="inline flex"
            background="accentTealBold"
            paddingX="small"
            borderRadius="default">
            <Text size="smaller" decoration="underline">
              Tag
            </Text>
          </PressableBox>
        </Inline>
      </Step>
      <Step />
    </ExampleStepper>
  );
}

export default BorderMenu;
