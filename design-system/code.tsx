/** @jsxImportSource @emotion/react */
import Box from 'design-system/box';

interface CodeProps {
  children: string;
}

function Code({ children }: CodeProps) {
  return (
    <Box padding="small" hasBorderRadius shouldForwardProps appearance="subtle-neutral">
      <code>{children}</code>
    </Box>
  );
}

export default Code;
