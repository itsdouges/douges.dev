import Box from 'design-system/box';

interface AnchorProps {
  children: React.ReactNode;
  title: string;
}

function Anchor({ children, title }: AnchorProps) {
  const id = title.replace(/ /, '-').toLowerCase();
  return (
    <Box href={`#${id}`} as="a" id={id}>
      {children}
    </Box>
  );
}

export default Anchor;
