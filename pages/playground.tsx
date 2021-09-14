/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Box from 'design-system/box';
import Text from 'design-system/text';
import Inline from 'design-system/inline';
import Pressable from 'design-system/pressable';

const styles = css({
  display: 'inline-flex',
});

function Lozenge({ children }: React.PropsWithChildren<{}>) {
  return (
    <Pressable pressedAppearance="static">
      {(press) => (
        <Box
          shouldForwardProps
          paddingX="small"
          borderRadius="default"
          background="neutralSubtle"
          css={styles}>
          <button {...press}>
            <Text size="forAnts" weight="bolder" transform="uppercase">
              {children}
            </Text>
          </button>
        </Box>
      )}
    </Pressable>
  );
}

function Playground() {
  return (
    <Inline gap="regular">
      <Lozenge>Hello world</Lozenge>
      <Lozenge>Hello world</Lozenge>
      <Lozenge>Hello world</Lozenge>
      <Lozenge>Hello world</Lozenge>
    </Inline>
  );
}

export default Playground;
