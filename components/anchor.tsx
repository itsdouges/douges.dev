import Box from 'design-system/box';

interface AnchorProps {
  children: React.ReactNode;
  title: string;
}

function Anchor({ children, title }: AnchorProps) {
  return (
    <Box as="a" id={title.replace(/ /, '-').toLowerCase()}>
      {children}
    </Box>
  );
}

export default Anchor;
