/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import Pressable from 'design-system/pressable';
import FocusRing from 'design-system/focus-ring';

const sizeStyles = css({
  small: {
    width: 4,
    height: 4,
  },
  medium: {
    width: 8,
    height: 8,
  },
  large: {
    width: 12,
    height: 12,
  },
});

const backgroundMap = {
  default: ['neutralSubtle', 'neutralBold'],
  primary: ['brandSubtle', 'brandBold'],
  discovery: ['discoverySubtle', 'discoveryBold'],
  invert: ['inverseNeutralSubtle', 'body'],
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
  const pressableAppearance = appearance === 'invert' ? 'inverse' : 'default';

  return (
    <Pressable appearance={pressableAppearance} pressedAppearance="static">
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
