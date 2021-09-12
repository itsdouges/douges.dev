import { useState } from 'react';
import Button from 'design-system/button';
import TimeoutButton from 'design-system/timeout-button';
import CodeBlock from 'design-system/code-block';
import Stack from 'design-system/stack';
import Inline from 'design-system/inline';
import Text from 'design-system/text';

const steps = [
  `import { css } from '@emotion/react';

const styles = css({
  outline: 0,
  border: 0,
  backgroundColor: 'blue',
});

const disabledStyles = css({
  opacity: 0.5,
  backgroundColor: 'gray',
});

function StyledComponent({ isDisabled }) {
  return <div css={[styles, isDisabled && disabledStyles]} />;
}`,
  `import { css } from '@emotion/react';

const styles = css({
  outline: 0,
  border: 0,
  backgroundColor: 'blue',
});

const disabledStyles = css({
  opacity: 0.5,
  backgroundColor: 'gray',
});

function StyledComponent({ isDisabled }) {
  return <div css={[styles, isDisabled && disabledStyles]} />;
}`,
  `import { styles, disabledStyles } from './styles.css';

function StyledComponent({ isDisabled }) {
  return <div css={[styles, isDisabled && disabledStyles]} />;
}`,
  `import cn from 'classnames';
import { styles, disabledStyles } from './styles.css';

function StyledComponent({ isDisabled }) {
  return <div className={cn([styles, isDisabled && disabledStyles])} />;
}`,
];

const extractSteps = [
  ,
  `import { style } from '@vanilla-extract/css';

export const styles = style({
  outline: 0,
  border: 0,
  backgroundColor: 'blue',
});

export const disabledStyles = style({
  opacity: 0.5,
  backgroundColor: 'gray',
});`,
  `import { style } from '@vanilla-extract/css';

export const styles = style({
  outline: 0,
  border: 0,
  backgroundColor: 'blue',
});

export const disabledStyles = style({
  opacity: 0.5,
  backgroundColor: 'gray',
});`,
  `import { style } from '@vanilla-extract/css';

export const styles = style({
outline: 0,
border: 0,
backgroundColor: 'blue',
});

export const disabledStyles = style({
opacity: 0.5,
backgroundColor: 'gray',
});`,
];

const stepDescription = [
  '',
  'Declarations are moved into a css.ts file',
  'Styles are imported and replaced',
  'CSS prop is replaced with class name',
];

function CodemodStyles() {
  const [step, setStep] = useState(0);
  const code = steps[step];
  const extractCode = extractSteps[step];

  return (
    <Stack gap={2}>
      <Inline justify="middle" gap={1}>
        <Button isDisabled={step === 0} onClick={() => setStep((next) => next - 1)}>
          Previous
        </Button>
        <TimeoutButton
          isDisabled={steps[step + 1] === undefined}
          onClick={() => setStep((next) => next + 1)}>
          Next
        </TimeoutButton>
        <Inline marginLeft="auto">
          <Text color="medium" size="small">
            <strong>{stepDescription[step]}</strong>
          </Text>
        </Inline>
      </Inline>

      <Inline gap={1}>
        <CodeBlock>{code}</CodeBlock>
        {extractCode && <CodeBlock>{extractCode}</CodeBlock>}
      </Inline>
    </Stack>
  );
}

export default CodemodStyles;
