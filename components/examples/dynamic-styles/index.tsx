import TimeoutButton from 'design-system/timeout-button';
import Button from 'design-system/button';
import CodeBlock from 'design-system/code-block';
import Stack from 'design-system/stack';
import Inline from 'design-system/inline';
import { useState } from 'react';

const steps = [
  `const styles = (isDisabled) => {
  return {
    borderRadius: 3,
    backgroundColor: 'lightgrey',
    color: 'black',
    ...isDisabled && {
      backgroundColor: 'gray',
      color: 'lightgrey',
    },
  };
};


function Tag({ isDisabled, children }) {
  return <span css={styles(isDisabled)}>{children}</span>;
}`,
  `const styles = (isDisabled, isBold) => {
  return {
    borderRadius: 3,
    backgroundColor: 'lightgrey',
    color: 'black',
    ...isBold && {
      backgroundColor: 'black',
      color: 'lightgrey',
    },
    ...isDisabled && {
      backgroundColor: 'gray',
      color: 'lightgrey',
    },
  };
};


function Tag({ isDisabled, children, isBold }) {
  return <span css={styles(isDisabled, isBold)}>{children}</span>;
}`,
  `const styles = (isDisabled, isBold) => {
  return {
    borderRadius: 3,
    backgroundColor: 'lightgrey',
    color: 'black',
    ...isBold && {
      backgroundColor: 'black',
      color: 'lightgrey',
    },
    ...isDisabled && {
      backgroundColor: 'gray',
      color: 'lightgrey',
    },
  };
};


function Tag({ isDisabled, children, isBold, appearance }) {
  return <span css={styles(isDisabled, isBold)}>{children}</span>;
}`,
];

function DynamicStyles() {
  const [step, setStep] = useState(0);

  return (
    <Stack gap={2}>
      <Inline>
        <TimeoutButton onClick={() => setStep((prev) => prev + 1)}>Add prop</TimeoutButton>

        <Inline marginLeft="auto">
          <Button isDisabled={step === 0} onClick={() => setStep(0)}>
            ↺ Reset
          </Button>
        </Inline>
      </Inline>

      <CodeBlock>{steps[step]}</CodeBlock>
    </Stack>
  );
}

export default DynamicStyles;
