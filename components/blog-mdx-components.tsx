/** @jsxImportSource @emotion/react */
import type { MDXProviderComponents } from '@mdx-js/react';
import css from 'design-system/css';
import Heading from 'design-system/heading';
import CodeBlock from 'design-system/code-block';
import Code from 'design-system/code';
import Text from 'design-system/text';
import { token } from '@atlaskit/tokens';
import Box from 'design-system/box';
import AvatarExample from 'components/examples/taming-the-beast-that-is-css-in-js/avatar-ssr';
import DynamicStyles from 'components/examples/taming-the-beast-that-is-css-in-js/dynamic-styles';
import ConstrainStyles from 'components/examples/taming-the-beast-that-is-css-in-js/constrain-styles';
import CodemodStyles from 'components/examples/taming-the-beast-that-is-css-in-js/codemod-styles';
import CodeAnalysis from 'components/examples/taming-the-beast-that-is-css-in-js/code-analysis';
import ExampleContainer from 'components/examples/container';
import Stack from 'design-system/stack';
import Anchor from 'components/anchor';

const styles = css({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 18,
    'p,ul,ol': { margin: 0 },
    h2: { marginTop: 40 },
    h3: { marginTop: 32 },
  },
  code: {
    verticalAlign: 'top',
  },
  hr: {
    border: 0,
    borderTop: `4px solid ${token('color.border.neutral')}`,
    width: '100%',
  },
  blockquote: {
    ':before': {
      content: '""',
    },
    ':after': {
      content: '""',
    },
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
    return (
      <div css={styles.wrapper}>
        <Stack gap="xlarge" inlineAlign="stretch">
          {children}
        </Stack>
      </div>
    );
  },
  blockquote({ children, ...props }) {
    return (
      <Box
        as="blockquote"
        border="left"
        background="neutralSubtle"
        borderColor="brand"
        paddingLeft="xlarge"
        paddingRight="regular"
        paddingY="xlarge"
        {...props}
        css={styles.blockquote}>
        <i>
          <Text color="medium" weight="bolder" size="large">
            {children}
          </Text>
        </i>
      </Box>
    );
  },
  hr(props) {
    return <hr {...props} css={styles.hr} />;
  },
  h1(props) {
    return (
      <Anchor title={props.children}>
        <Heading {...props} level={2} />
      </Anchor>
    );
  },
  h2(props) {
    return (
      <Anchor title={props.children}>
        <Heading {...props} level={3} />
      </Anchor>
    );
  },
  h3(props) {
    return (
      <Anchor title={props.children}>
        <Heading {...props} level={3} />
      </Anchor>
    );
  },
  pre(props) {
    return props.children;
  },
  code(props) {
    return <CodeBlock css={styles.code} {...props} />;
  },
  inlineCode(props) {
    return <Code {...props} />;
  },
};

export default components;
