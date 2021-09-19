import Box, { Size } from 'design-system/box';
import Pressable from 'design-system/pressable';
import Text from 'design-system/text';
import FocusRing from 'design-system/focus-ring';

const appearanceBorderRadius = {
  square: 'default',
  circle: 'circle',
} as const;

const avatarIcons = {
  square: (
    <Box display="block flow" as="svg" viewBox="0 0 24 24" role="presentation">
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M6 12h8v-2H6v2zM4 8.99C4 8.445 4.456 8 5.002 8h9.996C15.55 8 16 8.451 16 8.99V14H4V8.99z"
          fillRule="nonzero"
        />
        <path d="M6 7.005C6 5.898 6.898 5 7.998 5h2.004C11.106 5 12 5.894 12 7.005V10H6V7.005zm4 0V7H7.999c.005 0 .002.003.002.005V8h2v-.995z" />
        <path
          d="M4.5 17h13.994l1.002-3H4.14l.36 3zm-2.495-4.012A.862.862 0 012.883 12h18.393c.55 0 .857.417.681.944l-1.707 5.112c-.174.521-.758.944-1.315.944H3.725a1.149 1.149 0 01-1.118-.988l-.602-5.024z"
          fillRule="nonzero"
        />
      </g>
    </Box>
  ),
  circle: (
    <Box display="block flow" as="svg" viewBox="0 0 24 24" role="presentation">
      <g fill="currentColor" fillRule="evenodd">
        <path d="M6 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z" />
        <circle cx="12" cy="7" r="4" />
      </g>
    </Box>
  ),
};

interface AvatarProps {
  size?: Size;
  appearance?: 'square' | 'circle';
  borderColor?: 'default' | 'none';
}

export default function Avatar({
  size = 'medium',
  borderColor = 'default',
  appearance = 'circle',
}: AvatarProps) {
  const borderRadius = appearanceBorderRadius[appearance];
  const icon = avatarIcons[appearance];

  return (
    <Box borderRadius={borderRadius} background="neutralBold" size={size} border={borderColor}>
      {icon}
    </Box>
  );
}

export function AvatarButton({
  size = 'medium',
  borderColor = 'default',
  appearance = 'circle',
}: AvatarProps) {
  const borderRadius = appearanceBorderRadius[appearance];
  const icon = avatarIcons[appearance];

  return (
    <Pressable appearance="push">
      {(press) => (
        <FocusRing appearance="inset">
          <Box
            {...press}
            as="button"
            borderRadius={borderRadius}
            background="neutralBold"
            size={size}
            border={borderColor}>
            {icon}
          </Box>
        </FocusRing>
      )}
    </Pressable>
  );
}

export function AvatarLink({
  size = 'medium',
  borderColor = 'default',
  appearance = 'circle',
}: AvatarProps) {
  const borderRadius = appearanceBorderRadius[appearance];
  const icon = avatarIcons[appearance];

  return (
    <Pressable appearance="push">
      {(press) => (
        <FocusRing appearance="inset">
          <Box
            {...press}
            as="a"
            href="#"
            borderRadius={borderRadius}
            background="neutralBold"
            size={size}
            border={borderColor}>
            <Text color="onBold">{icon}</Text>
          </Box>
        </FocusRing>
      )}
    </Pressable>
  );
}
