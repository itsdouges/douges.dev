import { useState } from 'react';
import Button from 'design-system/button';
import CodeBlock from 'design-system/code-block';
import Stack from 'design-system/stack';
import Inline from 'design-system/inline';

const before = `const styles = (isDisabled) => {
  return {
    outline: 0,
    border: 0,
    backgroundColor: 'blue',
    ...isDisabled && {
      opacity: 0.5,
      backgroundColor: 'gray',
    },
  };
};


function StyledComponent({ isDisabled }) {
  return <div css={styles(isDisabled)} />;
}`;

const after = `const styles = css({
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
}`;

function ConstrainStyles() {
  const [isTransformed, setIsTransformed] = useState(false);

  return (
    <Stack gap={2}>
      <Inline align="right">
        <Button isSelected={isTransformed} onClick={() => setIsTransformed((prev) => !prev)}>
          Transform styles
        </Button>
      </Inline>

      <CodeBlock>{isTransformed ? after : before}</CodeBlock>
    </Stack>
  );
}

export default ConstrainStyles;
