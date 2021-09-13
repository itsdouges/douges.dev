import Box from 'design-system/box';
import Text from 'design-system/text';

interface TagProps {
  children: React.ReactNode;
}

function Tag({ children }: TagProps) {
  return (
    <Box background="neutralSubtle" paddingX="small" borderRadius="round">
      <Text color="low" size="tiny">
        {children}
      </Text>
    </Box>
  );
}

export default Tag;
