import Box from 'design-system/box';
import Text from 'design-system/text';
import Pressable from 'design-system/pressable';
import FocusRing from 'design-system/focus-ring';
import React from 'react';
import Inline from 'design-system/inline';

const colorBackground = {
  green: 'accentGreenBold',
  blue: 'accentBlueBold',
  red: 'accentRedBold',
  purple: 'accentPurpleBold',
  grey: 'neutralBold',
  teal: 'accentTealBold',
  yellow: 'accentOrangeBold',
  greenLight: 'accentGreenSubtle',
  blueLight: 'accentBlueSubtle',
  redLight: 'accentRedSubtle',
  purpleLight: 'accentPurpleSubtle',
  greyLight: 'neutralSubtle',
  tealLight: 'accentTealSubtle',
  yellowLight: 'accentOrangeSubtle',
} as const;

const textAppearanceMap = {
  grey: 'onBold',
} as any;

interface TagProps {
  children: React.ReactNode;
  color?: keyof typeof colorBackground;
  appearance?: 'default' | 'rounded';
  icon?: React.ReactNode;
}

function Tag({ children, icon, color = 'greyLight', appearance = 'default' }: TagProps) {
  const background = colorBackground[color];
  const textColor = textAppearanceMap[color] || 'low';

  return (
    <Box
      background={background}
      paddingLeft={icon ? undefined : 'small'}
      paddingRight="small"
      borderRadius={appearance}>
      <Inline gap="small" blockAlign="middle">
        {icon}
        <Text color={textColor} size="smaller">
          {children}
        </Text>
      </Inline>
    </Box>
  );
}

export function TagLink({ children, icon, color = 'greyLight', appearance = 'default' }: TagProps) {
  const background = colorBackground[color];
  const textColor = textAppearanceMap[color] || 'high';

  return (
    <Pressable pressedAppearance="static">
      {(press) => (
        <FocusRing>
          <Box
            {...press}
            as="a"
            background={background}
            paddingLeft={icon ? undefined : 'small'}
            paddingRight="small"
            borderRadius={appearance}>
            <Inline gap="small" blockAlign="middle">
              {icon}
              <Text decoration="underline" color={textColor} size="smaller">
                {children}
              </Text>
            </Inline>
          </Box>
        </FocusRing>
      )}
    </Pressable>
  );
}

export default Tag;
