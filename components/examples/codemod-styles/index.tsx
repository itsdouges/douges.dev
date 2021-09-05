import { useState } from 'react';
import Button from 'design-system/button';
import CodeBlock from 'design-system/code-block';
import Stack from 'design-system/stack';
import Inline from 'design-system/inline';

const before = `import { css } from '@emotion/react';

const styles = css({
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

const after = `import { styles, disabledStyles } from './styles.css';
import cn from 'classnames';

function StyledComponent({ isDisabled }) {
  return <div className={cn([styles, isDisabled && disabledStyles])} />;
}`;

const afterStyles = `import { style } from '@vanilla-extract/css';

export const styles = style({
  outline: 0,
  border: 0,
  backgroundColor: 'blue',
});

export const disabledStyles = style({
  opacity: 0.5,
  backgroundColor: 'gray',
});`;

function CodemodStyles() {
  const [isTransformed, setIsTransformed] = useState(false);

  return (
    <Stack gap={2}>
      <Inline gap={1}>
        <Button isSelected={isTransformed} onClick={() => setIsTransformed((prev) => !prev)}>
          Transform styles
        </Button>
      </Inline>

      <Inline gap={2}>
        <CodeBlock>{isTransformed ? after : before}</CodeBlock>
        {isTransformed && <CodeBlock>{afterStyles}</CodeBlock>}
      </Inline>
    </Stack>
  );
}

export default CodemodStyles;
