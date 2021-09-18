import Box from 'design-system/box';
import Text from 'design-system/text';
import Inline from 'design-system/inline';
import Pressable from 'design-system/pressable';
import Tooltip from 'design-system/tooltip';

function Lozenge({ children }: React.PropsWithChildren<{}>) {
  return (
    <Pressable pressedAppearance="static">
      {(press) => (
        <Box
          as="button"
          paddingX="small"
          borderRadius="default"
          background="discoveryBold"
          display="inline flex"
          {...press}>
          <Text size="smallest" weight="bolder" transform="uppercase">
            {children}
          </Text>
        </Box>
      )}
    </Pressable>
  );
}

function Playground() {
  return (
    <Inline gap="regular">
      <Tooltip content="Hello">
        <Lozenge>Hello world</Lozenge>
      </Tooltip>
      <Lozenge>Hello world</Lozenge>
      <Lozenge>Hello world</Lozenge>
      <Lozenge>Hello world</Lozenge>
    </Inline>
  );
}

export default Playground;
