/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';

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

  return <Box css={[sizeStyle]} borderRadius="circle" background={background} />;
}

export default ProgressIndicator;
