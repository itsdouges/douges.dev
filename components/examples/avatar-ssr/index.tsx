/** @jsxImportSource @emotion/react */
import { Fragment, useState } from 'react';
import Button from 'design-system/button';
import CodeBlock from 'design-system/code-block';
import Avatar from './avatar';
import Inline from 'design-system/inline';

const url = (index: number) => `https://i.pravatar.cc/150?u=${index + 1}`;

const generateStyle = (index: number) => {
  return `.class {
    
  }`;
};

function AvatarExample() {
  const [count, setCount] = useState(1);
  const [constrainStyles, setConstrainStyles] = useState(false);
  const arr = Array(count).fill(undefined);
  const styleButtonText = constrainStyles ? 'Constrained' : 'Constrain styles';

  return (
    <Fragment>
      <Inline gap={1} align="left">
        <Button
          isDisabled={count === 1}
          appearance="subtle"
          onClick={() => setCount((prev) => prev - 1)}>
          Remove avatar
        </Button>
        <Button
          isDisabled={count >= 7}
          appearance="subtle"
          onClick={() => setCount((prev) => prev + 1)}>
          Add avatar
        </Button>
        <Inline marginLeft="auto" align="right">
          <Button isSelected={constrainStyles} onClick={() => setConstrainStyles((prev) => !prev)}>
            {styleButtonText}
          </Button>
        </Inline>
      </Inline>

      <Inline gap={-1}>
        {arr.map((_, index) => (
          <Avatar url={url(index)} key={index} />
        ))}
      </Inline>

      <CodeBlock>{arr.map((_, index) => `<Avatar url="${url(index)}" />`).join('\n')}</CodeBlock>

      <CodeBlock>{`<style>
  ${arr.map((_, index) => generateStyle(index)).join('\n\n  ')}
</style>`}</CodeBlock>
    </Fragment>
  );
}

export default AvatarExample;
