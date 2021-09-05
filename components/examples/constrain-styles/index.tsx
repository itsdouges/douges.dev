import TimeoutButton from 'design-system/timeout-button';
import Button from 'design-system/button';
import CodeBlock from 'design-system/code-block';
import Stack from 'design-system/stack';
import Inline from 'design-system/inline';
import { useState } from 'react';

const steps = [
  `const styles = {
  borderRadius: 3,
  backgroundColor: 'lightgrey',
  color: 'black',
};

function Tag({ children }) {
  return <span css={styles}>{children}</span>;
}`,
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
  `const styles = (isDisabled, isBold, appearance) => {
  return {
    borderRadius: 3,
    ...appearance === 'default' && {
      ...isBold ? {
        backgroundColor: 'black',
        color: 'lightgrey',
      } : {
        backgroundColor: 'lightgrey',
        color: 'black',
      },
    },
    ...appearance === 'primary' && {
      ...isBold ? {
        backgroundColor: 'blue',
        color: 'white',
      } : {
        backgroundColor: 'white',
        color: 'blue',
      },
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

const constrainedSteps = [
  `const styles = css({
  borderRadius: 3,
  backgroundColor: 'lightgrey',
  color: 'black',
});

function Tag({ children }) {
  return <span css={styles}>{children}</span>;
}`,
  `const styles = css({
  borderRadius: 3,
});

const disabledStyles = css({
  backgroundColor: 'gray',
  color: 'lightgrey',
});

const enabledStyles = css({
  backgroundColor: 'lightgrey',
  color: 'black',
});

function Tag({ isDisabled, children }) {
  return <span css={[styles, isDisabled ? disabledStyles : enabledStyles]}>{children}</span>;
}`,
  `const styles = css({
  borderRadius: 3,
});

const disabledStyles = css({
  backgroundColor: 'gray',
  color: 'lightgrey',
});

const subtleStyles = css({
  backgroundColor: 'lightgrey',
  color: 'black',
});

const boldStyles = css({
  backgroundColor: 'black',
  color: 'lightgrey',
});

function Tag({ isDisabled, children, isBold }) {
  return (
    <span
      css={[
        styles,
        isBold ? boldStyles : subtleStyles,
        isDisabled && disabledStyles,
      ]}
    >
      {children}
    </span>
  );
}`,
  `const styles = (isDisabled, isBold, appearance) => {
  return {
    borderRadius: 3,
    ...appearance === 'default' && {
      ...isBold ? {
        backgroundColor: 'black',
        color: 'lightgrey',
      } : {
        backgroundColor: 'lightgrey',
        color: 'black',
      },
    },
    ...appearance === 'primary' && {
      ...isBold ? {
        backgroundColor: 'blue',
        color: 'white',
      } : {
        backgroundColor: 'white',
        color: 'blue',
      },
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

function ConstrainStyles() {
  const [step, setStep] = useState(0);
  const [isConstrained, setIsContstrained] = useState(false);

  return (
    <Stack gap={2}>
      <Inline gap={1}>
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
