/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box, { useBoxBackground } from 'design-system/box';
import Pressable from 'design-system/pressable';
import FocusRing from 'design-system/focus-ring';

const sizeStyles = css({
  medium: {
    width: 8,
    height: 8,
  },
});

const backgroundMap = {
  default: ['inverse', 'neutralBold'],
  primary: ['inverse', 'brandBold'],
  discovery: ['inverse', 'discoveryBold'],
  invert: ['inverse', 'body'],
} as const;

interface ProgressIndicatorProps {
  size?: keyof typeof sizeStyles;
  isSelected?: boolean;
  appearance?: keyof typeof backgroundMap;
}

function ProgressIndicator({
  size = 'medium',
  isSelected,
  appearance = 'default',
}: ProgressIndicatorProps) {
  const sizeStyle = sizeStyles[size];
  const backgroundIndex = isSelected ? 1 : 0;
  const background = backgroundMap[appearance][backgroundIndex];

  return (
    <Pressable pressedAppearance="static">
      {(press) => (
        <FocusRing>
          <Box
            as="button"
            {...press}
            css={[sizeStyle]}
            borderRadius="circle"
            background={background}
          />
        </FocusRing>
      )}
    </Pressable>
  );
}

export default ProgressIndicator;
