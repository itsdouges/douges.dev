import TimeoutButton from 'design-system/timeout-button';
import Button from 'design-system/button';
import CodeBlock from 'design-system/code-block';
import Stack from 'design-system/stack';
import Inline from 'design-system/inline';
import { useState } from 'react';
import { steps } from '../dynamic-styles';

const constrainedSteps = [
  `const styles = css({
  borderRadius: 3,
  color: 'black',
  backgroundColor: 'lightgrey',
});

function Lozenge({ children }) {
  return <span css={styles}>{children}</span>;
}`,
  `const styles = css({
  borderRadius: 3,
});

const disabledStyles = css({
  color: 'lightgrey',
  backgroundColor: 'gray',
});

const enabledStyles = css({
  color: 'black',
  backgroundColor: 'lightgrey',
});

function Lozenge({ children, isDisabled }) {
  return <span css={[styles, isDisabled ? disabledStyles : enabledStyles]}>{children}</span>;
}`,
  `const styles = css({
  borderRadius: 3,
});

const disabledStyles = css({
  color: 'lightgrey',
  backgroundColor: 'gray',
});

const subtleStyles = css({
  color: 'black',
  backgroundColor: 'lightgrey',
});

const boldStyles = css({
  color: 'lightgrey',
  backgroundColor: 'black',
});

function Lozenge({ children, isDisabled, isBold }) {
  const appearanceStyles = isBold ? boldStyles : subtleStyles;
  return (
    <span
      css={[
        styles,
        isDisabled ? disabledStyles : appearanceStyles,
      ]}
    >
      {children}
    </span>
  );
}`,
  `const styles = css({
  borderRadius: 3,
});

const disabledStyles = css({
  color: 'lightgrey',
  backgroundColor: 'gray',
});

const subtleStyles = {
  default: css({
    color: 'black',
    backgroundColor: 'lightgrey',
  }),
  primary: css({
    color: 'blue',
    backgroundColor: 'white',
  }),
};

const boldStyles = {
  default: css({
    color: 'lightgrey',
    backgroundColor: 'black',
  }),
  primary: css({
    color: 'white',
    backgroundColor: 'blue',
  }),
};

function Lozenge({ children, isDisabled, isBold, appearance }) {
  const appearanceStyles = isBold ? boldStyles[appearance] : subtleStyles[appearance];
  return (
    <span
      css={[
        styles,
        isDisabled ? disabledStyles : appearanceStyles,
      ]}
    >
      {children}
    </span>
  );
}`,
];

function ConstrainStyles() {
  const [step, setStep] = useState(0);
  const [isConstrained, setIsContstrained] = useState(false);

  return (
    <Stack gap="regular">
      <Inline gap="regular">
        <Button isDisabled={step === 0} onClick={() => setStep((prev) => prev - 1)}>
          Remove prop
        </Button>
        <TimeoutButton
          isDisabled={steps[step + 1] === undefined}
          onClick={() => setStep((prev) => prev + 1)}>
          Add prop
        </TimeoutButton>

        <Inline marginLeft="auto">
          <Button isSelected={isConstrained} onClick={() => setIsContstrained((prev) => !prev)}>
            Constrain styles
          </Button>
        </Inline>
      </Inline>

      <CodeBlock>{isConstrained ? constrainedSteps[step] : steps[step]}</CodeBlock>
    </Stack>
  );
}

export default ConstrainStyles;
