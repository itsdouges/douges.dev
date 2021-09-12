/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import { token } from '@atlaskit/tokens';
import { refractor, RefractorElement, Text } from 'refractor/lib/core';
import jsx from 'refractor/lang/jsx';
import Box from 'design-system/box';

refractor.register(jsx);

const codeBlockStyles = css({
  borderRadius: 3,
  margin: 0,
  fontSize: 12,
  overflow: 'auto',
  width: '100%',
});

const keywordStyles = css({
  color: token('color.text.danger'),
});

const functionStyles = css({
  color: token('color.text.discovery'),
});

const stringNumberStyles = css({
  color: token('color.text.brand'),
});

const attrNameStyles = css({
  color: token('color.text.success'),
});

const tagStyles = css({
  color: token('color.text.success'),
});

const defaultStyles = css({
  color: token('color.text.highEmphasis'),
});

const elementStyles: Record<string, SerializedStyles> = {
  keyword: keywordStyles,
  function: functionStyles,
  string: stringNumberStyles,
  number: stringNumberStyles,
  'attr-name': attrNameStyles,
  punctuation: defaultStyles,
  tag: stringNumberStyles,
  'class-name': tagStyles,
  script: defaultStyles,
  operator: defaultStyles,
  parameter: defaultStyles,
};

const toJSX = (node: RefractorElement | Text, index: number): React.ReactNode => {
  switch (node.type) {
    case 'element': {
      const Node = node.tagName as any;
      const classNames = (
        Array.isArray(node.properties?.className) ? node.properties?.className || [] : []
      ) as string[];

      return (
        <Node
          key={index}
          data-node={process.env.NODE_ENV === 'development' ? classNames.join(' ') : undefined}
          css={classNames.map((cn) => elementStyles[cn])}>
          {node.children.map(toJSX)}
        </Node>
      );
    }

    default:
    case 'text': {
      return node.value;
    }
  }
};

// This is needed for some weird NextJS SSR transform.
toJSX.displayName = 'CodeBlock';

interface CodeBlockProps {
  children: string;
}

function CodeBlock({ children = '' }: CodeBlockProps) {
  const root = refractor.highlight(children, 'jsx');
  return (
    <Box shouldForwardProps padding="large" appearance="default">
      <pre css={codeBlockStyles}>
        <code>{root.children.map(toJSX)}</code>
      </pre>
    </Box>
  );
}

export default CodeBlock;
