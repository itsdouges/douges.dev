import Box from 'design-system/box';
import FocusRing from 'design-system/focus-ring';
import Pressable from 'design-system/pressable';
import Text from 'design-system/text';
import { appearanceBgMap } from 'design-system/button';

export interface LinkButtonProps {
  appearance?: keyof typeof appearanceBgMap;
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
  isSelected?: boolean;
  href: string;
  shouldOpenNewWindow?: boolean;
}

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
            {...props}
            {...press}>
            <Text size="small" weight="bold">
              {children}
            </Text>
          </Box>
        </FocusRing>
      )}
    </Pressable>
  );
}

export default LinkButton;
