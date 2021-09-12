/** @jsxImportSource @emotion/react */
import Box from 'design-system/box';

interface CodeProps {
  children: string;
}

function Code({ children }: CodeProps) {
  return (
    <Box padding="small" borderRadius="default" shouldForwardProps background="neutralSubtle">
      <code>{children}</code>
    </Box>
  );
}

export default Code;
