import Box, { SemanticNames } from 'design-system/box';
import Text from 'design-system/text';
import React from 'react';

interface LozengeProps {
  appearance?: keyof SemanticNames;
  children?: React.ReactNode;
}

const appearanceBgMap: SemanticNames = {
  default: 'neutralSubtle',
  success: 'successSubtle',
  removed: 'dangerSubtle',
  inprogress: 'brandSubtle',
  new: 'discoverySubtle',
  moved: 'warningSubtle',
  defaultBold: 'neutralBold',
  successBold: 'successBold',
  removedBold: 'dangerBold',
  inprogressBold: 'brandBold',
  newBold: 'discoveryBold',
  movedBold: 'warningBold',
};

function Lozenge({ children, appearance = 'default' }: LozengeProps) {
  const background = appearanceBgMap[appearance];

  return (
    <Box
      as="div"
      paddingX="small"
      borderRadius="default"
      background={background}
      display="inline flex">
      <Text size="smallest" weight="bolder" transform="uppercase">
        {children}
      </Text>
    </Box>
  );
}

export default Lozenge;
