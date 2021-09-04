/** @jsxImportSource @emotion/react */
import type { MDXProviderComponents } from '@mdx-js/react';
import { css } from '@emotion/react';
import Heading from 'design-system/heading';
import CodeBlock from 'design-system/code-block';
import Code from 'design-system/code';
import { token } from '@atlaskit/tokens';

const wrapperStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
  fontSize: 18,
  'p,ul,ol': { margin: 0 },
  h2: { marginTop: 50 },
  h3: { marginTop: 30 },
});

const hrStyles = css({
  border: 0,
  borderTop: `4px solid ${token('color.border.neutral')}`,
  width: '100%',
});

const components: MDXProviderComponents = {
  wrapper({ children }) {
    return <div css={wrapperStyles}>{children}</div>;
  },
  hr(props) {
    return <hr {...props} css={hrStyles} />;
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
    return props.children;
  },
  code(props) {
    return <CodeBlock {...props} />;
  },
  inlineCode(props) {
    return <Code {...props} />;
  },
};

export default components;
