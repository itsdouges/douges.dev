import { token } from '@atlaskit/tokens';
import { Sandpack as SP, SandpackProps } from '@codesandbox/sandpack-react';
import Box from 'design-system/box';

export function Sandpack(props: SandpackProps) {
  return (
    <Box background="sunken" padding="medium">
      <SP
        {...props}
        template="react"
        options={{
          ...props.options,
          showLineNumbers: true,
        }}
        theme={{
          syntax: {
            comment: token('color.text.success'),
            definition: token('color.text.discovery'),
            keyword: token('color.text.danger'),
            plain: token('color.text.highEmphasis'),
            property: token('color.text.highEmphasis'),
            punctuation: token('color.text.highEmphasis'),
            string: token('color.text.brand'),
            static: token('color.text.brand'),
            tag: token('color.text.brand'),
          },
          colors: {
            surface1: token('color.background.default'),
            surface2: token('color.background.default'),
            surface3: token('color.background.default'),
            base: token('color.background.default'),
            clickable: token('color.text.mediumEmphasis'),
            hover: token('color.text.mediumEmphasis'),
            accent: token('color.text.selected'),
            disabled: token('color.text.disabled'),
            error: token('color.text.danger'),
            errorSurface: token('color.background.subtleDanger.resting'),
            warning: token('color.text.warning'),
            warningSurface: token('color.background.subtleWarning.resting'),
          },
        }}
      />
    </Box>
  );
}
