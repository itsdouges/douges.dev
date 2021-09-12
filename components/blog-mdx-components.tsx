/** @jsxImportSource @emotion/react */
import type { MDXProviderComponents } from '@mdx-js/react';
import css from 'design-system/css';
import Heading from 'design-system/heading';
import CodeBlock from 'design-system/code-block';
import Code from 'design-system/code';
import { token } from '@atlaskit/tokens';
import AvatarExample from 'components/examples/avatar-ssr';
import DynamicStyles from 'components/examples/dynamic-styles';
import ConstrainStyles from 'components/examples/constrain-styles';
import CodemodStyles from 'components/examples/codemod-styles';
import CodeAnalysis from 'components/examples/code-analysis';
import ExampleContainer from 'components/examples/container';

const styles = css({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    fontSize: 18,
    'p,ul,ol': { margin: 0 },
    h2: { marginTop: 50 },
    h3: { marginTop: 30 },
  },
  hr: {
    border: 0,
    borderTop: `4px solid ${token('color.border.neutral')}`,
    width: '100%',
  },
});

const components: MDXProviderComponents = {
  ExampleContainer,
  AvatarExample,
  DynamicStyles,
  ConstrainStyles,
  CodemodStyles,
  CodeAnalysis,
  wrapper({ children }) {
    return <div css={styles.wrapper}>{children}</div>;
  },
  hr(props) {
    return <hr {...props} css={styles.hr} />;
  },
  h1(props) {
    return <Heading {...props} level={2} />;
  },
  h2(props) {
    return <Heading {...props} level={3} />;
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
