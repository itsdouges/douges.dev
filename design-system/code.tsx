/** @jsxImportSource @emotion/react */
import Box from 'design-system/box';

interface CodeProps {
  children: string;
}

function Code({ children }: CodeProps) {
  return (
    <Box as="code" padding="small" borderRadius="default" background="neutralSubtle">
      {children}
    </Box>
  );
}

export default Code;
