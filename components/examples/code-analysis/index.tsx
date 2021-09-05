import Button from 'design-system/timeout-button';
import CodeBlock from 'design-system/code-block';
import Stack from 'design-system/stack';
import Inline from 'design-system/inline';

function CodeAnalysis() {
  return (
    <Stack gap={2}>
      <Inline gap={1}>
        <Button>Add permutation</Button>

        <Inline marginLeft="auto" align="right">
          <Button>Constrain styles</Button>
        </Inline>
      </Inline>

      <CodeBlock>
        {`const styles = (isDisabled) => {
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
}`}
      </CodeBlock>
    </Stack>
  );
}

export default CodeAnalysis;
