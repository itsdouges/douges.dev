import Box, { Background } from 'design-system/box';
import Text from 'design-system/text';

type Appearance = 'default' | 'added' | 'primary' | 'primaryInverted' | 'important' | 'removed';

const appearanceBackground: Record<Appearance, Background> = {
  added: 'successSubtle',
  default: 'neutralSubtle',
  important: 'dangerBold',
  primary: 'brandBold',
  removed: 'dangerSubtle',
  primaryInverted: 'body',
};

interface BadgeProps {
  children: React.ReactNode;
  appearance?: Appearance;
}

function Badge({ children, appearance = 'default' }: BadgeProps) {
  const background = appearanceBackground[appearance];

  return (
    <Box display="inline flex" paddingX="small" borderRadius="rounded" background={background}>
      <Text size="smallest" color={appearance === 'primaryInverted' ? 'brand' : undefined}>
        {children}
      </Text>
    </Box>
  );
}

export default Badge;
