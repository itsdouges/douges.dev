/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { useState, useContext, createContext, useRef, useEffect } from 'react';
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
    transition: 'all 1s',
    '*': {
      transition: 'all 1s',
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

const Context = createContext<{ isSplash?: boolean; isMuted?: boolean; isListened?: boolean }>({});

interface ExampleStepperProps {
  children: React.ReactNode[];
}

export default function ExampleStepper({ children }: ExampleStepperProps) {
  const [step, setStep] = useState(-1);
  const [isMuted, setIsMuted] = useState(false);
  const [, forceUpdate] = useState(false);
  const steps = children.length;
  const isSplash = step === -1;
  const listened = useRef<Record<number, boolean>>({});

  useEffect(() => {
    listened.current[step] = true;
  }, [step]);

  return (
    <Stack padding="medium" background="sunken" gap="regular">
      <Inline gap="regular">
        <Button onClick={() => setStep((prev) => prev - 1)} isDisabled={step === -1}>
          Previous
        </Button>
        <Button onClick={() => setStep((prev) => prev + 1)} isDisabled={step === steps - 1}>
          {step === -1 ? 'Start' : 'Next'}
        </Button>

        <Inline gap="regular" width="full" inlineAlign="end">
          <Button
            isDisabled={isSplash || !listened.current[step]}
            onClick={() => {
              listened.current[step] = false;
              forceUpdate((prev) => !prev);
            }}>
            Replay
          </Button>
          <Button isSelected={isMuted} onClick={() => setIsMuted((prev) => !prev)}>
            {isMuted ? 'Muted' : 'Mute'}
          </Button>
        </Inline>
      </Inline>

      <Context.Provider
        value={{
          isSplash: isSplash,
          isMuted: isMuted || isSplash,
          isListened: listened.current[step],
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

type Lang = 'jsx' | 'diff' | undefined;

export function Step({ children, code, description, audioSrc }: StepProps) {
  const lang: Lang = code.match(/^(jsx|diff)/)?.[0] as Lang;
  const codeNoLang = lang ? code.replace(/^(jsx|diff)/, '') : code;
  const ctx = useContext(Context);
  const canListenAudio = audioSrc && !ctx.isListened;

  return (
    <>
      {canListenAudio && <Audio src={audioSrc} isMuted={ctx.isMuted} />}
      <Inline gap="regular" blockAlign="stretch">
        <CodeBlock lang={lang}>{dedent`${codeNoLang}`}</CodeBlock>
        <Box
          padding="xlarge"
          css={[styles.transition, styles.noOverflow, styles.noSelect]}
          width="full"
          background="body">
          {children}
        </Box>
      </Inline>
      {!ctx.isSplash && (
        <Inline inlineAlign="center">
          <Text background="neutralBold" align="center" size="small" weight="bolder">
            {description}
          </Text>
        </Inline>
      )}
    </>
  );
}
