/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { useState, useContext, useRef, createContext, useEffect } from 'react';
import CodeBlock from 'design-system/code-block';
import Inline from 'design-system/inline';
import Box from 'design-system/box';
import Button from 'design-system/button';
import TimeoutButton from 'design-system/timeout-button';
import Stack from 'design-system/stack';
import dedent from 'dedent';
import Text from 'design-system/text';
import Audio from 'components/audio';

const styles = css({
  disabled: {
    opacity: 0.5,
  },
  transition: {
    transition: 'all 0.8s cubic-bezier(0.8, 0, 0, 0.8)',
    '*': {
      transition: 'all 0.8s cubic-bezier(0.8, 0, 0, 0.8)',
    },
  },
  noOverflow: {
    position: 'relative',
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
  const isComplete = step === steps - 1;
  const isSplash = step === -1;

  return (
    <Stack padding="medium" background="sunken" gap="regular">
      <Inline gap="small">
        <Button onClick={() => setStep((prev) => prev - 1)} isDisabled={step <= 0}>
          Previous
        </Button>
        {isSplash && (
          <Button appearance="primary" onClick={() => setStep((prev) => prev + 1)}>
            Start
          </Button>
        )}
        {!isSplash && (
          <TimeoutButton
            onClick={() => setStep((prev) => prev + 1)}
            isDisabled={step === steps - 1}>
            {isComplete ? 'Complete' : 'Next'}
          </TimeoutButton>
        )}

        <Inline gap="regular" width="full" inlineAlign="end">
          <Button
            isDisabled={isSplash}
            appearance="primary"
            isSelected={!isMuted}
            onClick={() => setIsMuted((prev) => !prev)}>
            {isMuted ? 'Listen' : 'Listening…'}
          </Button>
        </Inline>
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
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.scroll({
        top: 99999,
        behavior: 'smooth',
      });
    }
  }, [code]);

  return (
    <>
      {audioSrc && <Audio src={audioSrc} isMuted={isMuted} />}
      <Inline style={{ opacity: isSplash ? 0.5 : undefined }} gap="regular" blockAlign="stretch">
        <CodeBlock ref={codeRef} lang="auto">{dedent`${code}`}</CodeBlock>
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
            <Text background="neutralBold" size="regular" weight="bold">
              {description}
            </Text>
          </Text>
        </Inline>
      )}
    </>
  );
}
