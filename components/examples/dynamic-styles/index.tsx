import TimeoutButton from 'design-system/timeout-button';
import Button from 'design-system/button';
import CodeBlock from 'design-system/code-block';
import Stack from 'design-system/stack';
import Inline from 'design-system/inline';
import { useState } from 'react';

export const steps = [
  `const styles = {
  borderRadius: 3,
  color: 'black',
  backgroundColor: 'lightgrey',
};

function Lozenge({ children }) {
  return <span css={styles}>{children}</span>;
}`,
  `const styles = (isDisabled) => {
  return {
    borderRadius: 3,
    color: 'black',
    backgroundColor: 'lightgrey',
    ...isDisabled && {
      color: 'lightgrey',
      backgroundColor: 'gray',
    },
  };
};

function Lozenge({ children, isDisabled }) {
  return <span css={styles(isDisabled)}>{children}</span>;
}`,
  `const styles = (isDisabled, isBold) => {
  return {
    borderRadius: 3,
    color: 'black',
    backgroundColor: 'lightgrey',
    ...isBold && {
      color: 'lightgrey',
      backgroundColor: 'black',
    },
    ...isDisabled && {
      color: 'lightgrey',
      backgroundColor: 'gray',
    },
  };
};

function Lozenge({ children, isDisabled, isBold }) {
  return <span css={styles(isDisabled, isBold)}>{children}</span>;
}`,
  `const styles = (isDisabled, isBold, appearance) => {
  return {
    borderRadius: 3,
    ...appearance === 'default' && {
      ...isBold ? {
        color: 'lightgrey',
        backgroundColor: 'black',
      } : {
        color: 'black',
        backgroundColor: 'lightgrey',
      },
    },
    ...appearance === 'primary' && {
      ...isBold ? {
        color: 'white',
        backgroundColor: 'blue',
      } : {
        color: 'blue',
        backgroundColor: 'white',
      },
    },
    ...isDisabled && {
      color: 'lightgrey',
      backgroundColor: 'gray',
    },
  };
};

function Lozenge({ children, isDisabled, isBold, appearance }) {
  return <span css={styles(isDisabled, isBold)}>{children}</span>;
}`,
];

function DynamicStyles() {
  const [step, setStep] = useState(0);

  return (
    <Stack gap={2}>
      <Inline gap={1}>
        <Button
          data-splitbee-event="Remove Prop"
          data-splitbee-event-type="Dynamic Example"
          isDisabled={step === 0}
          onClick={() => setStep((prev) => prev - 1)}>
          Remove prop
        </Button>
        <TimeoutButton
          data-splitbee-event="Add Prop"
          data-splitbee-event-type="Remove Example"
          data-splitbee-event-finish={steps[step + 2] === undefined ? true : undefined}
          isDisabled={steps[step + 1] === undefined}
          onClick={() => setStep((prev) => prev + 1)}>
          Add prop
        </TimeoutButton>
      </Inline>

      <CodeBlock>{steps[step]}</CodeBlock>
    </Stack>
  );
}

export default DynamicStyles;
