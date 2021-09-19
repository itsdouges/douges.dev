/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import FocusRing from 'design-system/focus-ring';
import Pressable from 'design-system/pressable';
import Text, { TextColor } from 'design-system/text';
import { appearanceBgMap } from 'design-system/button';

const styles = css({
  link: {
    lineHeight: 1,
  },
});

type Appearance = keyof typeof appearanceBgMap;

export interface LinkButtonProps {
  appearance?: Appearance;
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
  isSelected?: boolean;
  href: string;
  shouldOpenNewWindow?: boolean;
}

const textAppearanceMap: Record<Appearance, TextColor> = {
  default: 'high',
  primary: 'onBold',
  subtle: 'high',
  warning: 'onBoldWarning',
  danger: 'onBold',
  selected: 'selected',
};

function LinkButton({
  children,
  isSelected,
  onClick,
  appearance = 'default',
  href,
  shouldOpenNewWindow,
  ...props
}: LinkButtonProps) {
  const mappedAppearance = isSelected ? 'selected' : appearance;
  const background = appearanceBgMap[mappedAppearance];
  const color = textAppearanceMap[mappedAppearance];

  return (
    <Pressable onClick={onClick} appearance="static">
      {(press) => (
        <FocusRing>
          <Box
            as="a"
            borderRadius="default"
            paddingX="medium"
            paddingY="regular"
            background={background}
            target={shouldOpenNewWindow ? '_blank' : ''}
            rel="noreferrer"
            href={href}
            css={styles.link}
            {...props}
            {...press}>
            <Text color={color} size="small" weight="bold">
              {children}
            </Text>
          </Box>
        </FocusRing>
      )}
    </Pressable>
  );
}

export default LinkButton;
