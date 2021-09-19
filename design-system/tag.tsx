/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import Text from 'design-system/text';
import Pressable from 'design-system/pressable';
import FocusRing from 'design-system/focus-ring';
import React from 'react';
import Inline from 'design-system/inline';

const styles = css({
  iconPaddingHack: {
    paddingLeft: 2,
  },
});

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

  return (
    <Box
      // Hack not great goes against BOX
      css={icon && styles.iconPaddingHack}
      background={background}
      paddingLeft={icon ? undefined : 'small'}
      paddingRight="small"
      borderRadius={appearance}>
      <Inline gap="small" blockAlign="middle">
        {icon}
        <Text size="smaller">{children}</Text>
      </Inline>
    </Box>
  );
}

export function TagLink({ children, color = 'greyLight', appearance = 'default' }: TagProps) {
  const background = colorBackground[color];
  const textColor = textAppearanceMap[color] || 'high';

  return (
    <Pressable appearance="static">
      {(press) => (
        <FocusRing>
          <Box
            {...press}
            as="a"
            href="#"
            background={background}
            paddingX="small"
            borderRadius={appearance}>
            <Text decoration="underline" color={textColor} size="smaller">
              {children}
            </Text>
          </Box>
        </FocusRing>
      )}
    </Pressable>
  );
}

export default Tag;
