/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import { memo } from 'react';
import { token } from '@atlaskit/tokens';
import { refractor, RefractorElement, Text } from 'refractor/lib/core.js';
import jsx from 'refractor/lang/jsx.js';

refractor.register(jsx);

interface CodeBlockProps {
  children: string;
}

const codeBlockStyles = css({
  borderRadius: 3,
  backgroundColor: token('color.background.subtleNeutral.resting'),
  padding: '16px',
  margin: 0,
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

const toJSX = (node: RefractorElement | Text): React.ReactNode => {
  switch (node.type) {
    case 'element': {
      const Node = node.tagName as any;
      const classNames = (
        Array.isArray(node.properties?.className) ? node.properties?.className || [] : []
      ) as string[];

      return (
        <Node
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

function CodeBlock({ children }: CodeBlockProps) {
  const root = refractor.highlight(children, 'jsx');
  return (
    <pre css={codeBlockStyles}>
      <code>{root.children.map(toJSX)}</code>
    </pre>
  );
}

export default memo(CodeBlock);
