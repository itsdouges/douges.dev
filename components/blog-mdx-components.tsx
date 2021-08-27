/** @jsxImportSource @emotion/react */
import type { MDXProviderComponents } from '@mdx-js/react';
import { css } from '@emotion/react';
import Heading from 'design-system/heading';
import CodeBlock from 'design-system/code-block';
import Code from 'design-system/code';

const paragraphStyles = css({
  fontSize: 18,
  margin: 0,
});

const wrapperStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
  h1: { marginTop: 70 },
  h2: { marginTop: 50 },
});

const components: MDXProviderComponents = {
  wrapper({ children }) {
    return <div css={wrapperStyles}>{children}</div>;
  },
  p(props) {
    return <p css={paragraphStyles} {...props} />;
  },
  h1() {
    return <div>DO_NOT_USE_H1</div>;
  },
  h2(props) {
    return <Heading {...props} level={2} />;
  },
  h3(props) {
    return <Heading {...props} level={3} />;
  },
  pre(props) {
    return <CodeBlock {...props} />;
  },
  code({ children }) {
    return children;
  },
  inlineCode(props) {
    return <Code {...props} />;
  },
};

export default components;
