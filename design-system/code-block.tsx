/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import { token } from '@atlaskit/tokens';
import { refractor, RefractorElement, Text } from 'refractor/lib/core';
import jsx from 'refractor/lang/jsx';
import diff from 'refractor/lang/diff';
import Box from 'design-system/box';

refractor.register(jsx);
refractor.register(diff);

const codeBlockStyles = css({
  fontSize: 12,
  overflow: 'auto',
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

const insertedStyles = css({
  backgroundColor: token('color.background.subtleSuccess.hover'),
  color: token('color.text.success'),
});

const deletedStyles = css({
  backgroundColor: token('color.background.subtleDanger.hover'),
  color: token('color.text.danger'),
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
  'inserted-sign': insertedStyles,
  'deleted-sign': deletedStyles,
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
  lang?: 'jsx' | 'diff';
  children: string;
}

function CodeBlock({ children = '', lang = 'jsx' }: CodeBlockProps) {
  const root = refractor.highlight(children, lang);
  return (
    <Box
      width="full"
      background="sunken"
      css={codeBlockStyles}
      borderRadius="default"
      as="pre"
      padding="medium">
      <code>{root.children.map(toJSX)}</code>
    </Box>
  );
}

export default CodeBlock;
