/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { useState, cloneElement } from 'react';
import CodeBlock from 'design-system/code-block';
import Inline from 'design-system/inline';
import Box from 'design-system/box';
import Button from 'design-system/button';
import Stack from 'design-system/stack';
import dedent from 'dedent';
import Text from 'design-system/text';
import Container from 'components/examples/container';
import Audio from 'components/audio';

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
  const [step, setStep] = useState(-1);
  const [isMuted, setIsMuted] = useState(false);
  const steps = children.length;

  return (
    <Container>
      <Stack gap="regular">
        <Inline gap="regular">
          <Button onClick={() => setStep((prev) => prev - 1)} isDisabled={step === -1}>
            Back
          </Button>
          <Button onClick={() => setStep((prev) => prev + 1)} isDisabled={step === steps - 1}>
            Play
          </Button>

          <Inline gap="regular" width="full" inlineAlign="end">
            <Button isSelected={isMuted} onClick={() => setIsMuted((prev) => !prev)}>
              Mute
            </Button>
          </Inline>
        </Inline>

        {step === -1
          ? cloneElement(children[0] as JSX.Element, { description: null, audioSrc: null })
          : cloneElement(children.find((_, index) => index === step) as JSX.Element, {
              isAudioMuted: isMuted,
            })}
      </Stack>
    </Container>
  );
}

interface StepProps {
  code: string;
  children: React.ReactNode;
  description?: string;
  audioSrc?: string;
  isAudioMuted?: boolean;
}

type Lang = 'jsx' | 'diff' | undefined;

export function Step({ children, code, description, audioSrc, isAudioMuted }: StepProps) {
  const lang: Lang = code.match(/^(jsx|diff)/)?.[0] as Lang;
  const codeNoLang = lang ? code.replace(/^(jsx|diff)/, '') : code;

  return (
    <>
      {audioSrc && <Audio src={audioSrc} isMuted={isAudioMuted} />}
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
        <Text background="neutralBold" align="center" size="small" weight="bolder">
          {description}
        </Text>
      </Inline>
    </>
  );
}
