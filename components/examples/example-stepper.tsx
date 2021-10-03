/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { useState, useContext, createContext } from 'react';
import CodeBlock from 'design-system/code-block';
import Inline from 'design-system/inline';
import Box from 'design-system/box';
import Button from 'design-system/button';
import Stack from 'design-system/stack';
import dedent from 'dedent';
import Text from 'design-system/text';
import Audio from 'components/audio';

const styles = css({
  transition: {
    transition: 'all 0.8s cubic-bezier(0.8, 0, 0, 0.8)',
    '*': {
      transition: 'all 0.8s cubic-bezier(0.8, 0, 0, 0.8)',
    },
  },
  noOverflow: {
    overflow: 'hidden',
  },
  noSelect: {
    userSelect: 'none',
    '*': {
      userSelect: 'none',
    },
  },
});

const Context = createContext<{ isSplash?: boolean; isMuted?: boolean }>({});

interface ExampleStepperProps {
  children: React.ReactNode[];
}

export default function ExampleStepper({ children }: ExampleStepperProps) {
  const [step, setStep] = useState(-1);
  const [isMuted, setIsMuted] = useState(true);
  const steps = children.length;
  const isSplash = step === -1;

  return (
    <Stack padding="medium" background="sunken" gap="regular">
      <Inline gap="small">
        <Button onClick={() => setStep((prev) => prev - 1)} isDisabled={step === -1}>
          Previous
        </Button>
        <Button
          appearance={isSplash ? 'primary' : undefined}
          onClick={() => setStep((prev) => prev + 1)}
          isDisabled={step === steps - 1}>
          {isSplash ? 'Start' : 'Next'}
        </Button>

        {isSplash || (
          <Inline gap="regular" width="full" inlineAlign="end">
            <Button
              appearance="primary"
              isSelected={!isMuted}
              onClick={() => setIsMuted((prev) => !prev)}>
              {isMuted ? 'Listen' : 'Listening…'}
            </Button>
          </Inline>
        )}
      </Inline>

      <Context.Provider
        value={{
          isSplash: isSplash,
          isMuted: isMuted || isSplash,
        }}>
        {isSplash ? children[0] : children.find((_, index) => index === step)}
      </Context.Provider>
    </Stack>
  );
}

interface StepProps {
  code: string;
  children: React.ReactNode;
  description?: string;
  audioSrc?: string;
  isAudioMuted?: boolean;
}

export function Step({ children, code, description, audioSrc }: StepProps) {
  const { isMuted, isSplash } = useContext(Context);

  return (
    <>
      {audioSrc && <Audio src={audioSrc} isMuted={isMuted} />}
      <Inline gap="regular" blockAlign="stretch">
        <CodeBlock lang="auto">{dedent`${code}`}</CodeBlock>
        <Box
          padding="xlarge"
          css={[styles.transition, styles.noOverflow, styles.noSelect]}
          width="full"
          background="body">
          {children}
        </Box>
      </Inline>
      {!isSplash && (
        <Inline gap="small" blockAlign="middle" inlineAlign="center">
          <Text align="center">
            <Text background="neutralBold" size="small" weight="bold">
              {description}
            </Text>
          </Text>
        </Inline>
      )}
    </>
  );
}
