/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { useState } from 'react';
import CodeBlock from 'design-system/code-block';
import Inline from 'design-system/inline';
import Box from 'design-system/box';
import Button from 'design-system/button';
import Stack from 'design-system/stack';
import dedent from 'dedent';
import Text from 'design-system/text';
import Container from './container';

const styles = css({
  transition: {
    transition: 'all 0.5s',
    '*': {
      transition: 'all 0.5s',
    },
  },
  noOverflow: {
    overflow: 'hidden',
  },
});

interface ExampleStepperProps {
  children: React.ReactNode[];
}

export default function ExampleStepper({ children }: ExampleStepperProps) {
  const [step, setStep] = useState(0);
  const steps = children.length;

  return (
    <Container>
      <Stack gap="regular">
        <Inline gap="regular">
          <Button onClick={() => setStep((prev) => prev - 1)} isDisabled={step === 0}>
            Back
          </Button>
          <Button onClick={() => setStep((prev) => prev + 1)} isDisabled={step === steps - 1}>
            Play
          </Button>

          <Inline gap="regular" width="full" inlineAlign="end">
            <Button>Mute</Button>
          </Inline>
        </Inline>

        {children.find((_, index) => index === step)}
      </Stack>
    </Container>
  );
}

interface StepProps {
  code: string;
  children: React.ReactNode;
  description?: string;
}

type Lang = 'jsx' | 'diff' | undefined;

export function Step({ children, code, description }: StepProps) {
  const lang: Lang = code.match(/^(jsx|diff)/)?.[0] as Lang;
  const codeNoLang = lang ? code.replace(/^(jsx|diff)/, '') : code;

  return (
    <>
      <Inline gap="regular" blockAlign="stretch">
        <CodeBlock lang={lang}>{dedent`${codeNoLang}`}</CodeBlock>
        <Box
          padding="xlarge"
          css={[styles.transition, styles.noOverflow]}
          width="full"
          background="body">
          {children}
        </Box>
      </Inline>
      <Inline inlineAlign="center">
        <Text align="center" size="small" weight="bolder">
          {description}
        </Text>
      </Inline>
    </>
  );
}
