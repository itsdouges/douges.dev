/** @jsxImportSource @emotion/react */
import Box from 'design-system/box';
import Text from 'design-system/text';

interface CodeProps {
  children: string;
}

function Code({ children }: CodeProps) {
  return (
    <Box as="code" padding="small" borderRadius="default" background="neutralSubtle">
      <Text size="small">{children}</Text>
    </Box>
  );
}

export default Code;
