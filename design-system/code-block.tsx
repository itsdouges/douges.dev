/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import { token } from '@atlaskit/tokens';
import { refractor, RefractorElement, Text } from 'refractor/lib/core';
import jsx from 'refractor/lang/jsx';
import diff from 'refractor/lang/diff';
import csss from 'refractor/lang/css';
import Box from 'design-system/box';
import { ForwardedRef } from 'react';
import { forwardRef } from 'lib/react';

refractor.register(jsx);
refractor.register(diff);
refractor.register(csss);

const codeBlockStyles = css({
  fontSize: 13,
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

const maxHeight = css({
  maxHeight: 500,
});

const elementStyles: Record<string, SerializedStyles> = {
  keyword: keywordStyles,
  selector: functionStyles,
  function: functionStyles,
  property: attrNameStyles,
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
  lang?: 'jsx' | 'diff' | 'auto' | 'css';
  children: string;
  background?: 'body' | 'transparent' | 'neutralSubtle' | 'sunken';
}

type Lang = 'jsx' | 'diff' | 'css' | undefined;

function CodeBlock(
  { children = '', lang = 'jsx', background = 'body' }: CodeBlockProps,
  ref: ForwardedRef<HTMLPreElement>
) {
  const actualLang: Lang =
    lang === 'auto' ? (children.match(/^(jsx|diff|css)/)?.[0] as Lang) || 'jsx' : lang;
  const codeNoLang = lang === 'auto' ? children.replace(/^(jsx|diff|css)\n/, '') : children;
  const root = refractor.highlight(codeNoLang, actualLang);

  return (
    <Box
      ref={ref}
      width="full"
      background={background}
      css={[codeBlockStyles, maxHeight]}
      borderRadius="default"
      as="pre"
      padding="medium">
      <code>{root.children.map(toJSX)}</code>
    </Box>
  );
}

export default forwardRef(CodeBlock);
