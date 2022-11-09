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
import Tooltip from 'design-system/tooltip';

const styles = css({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 18,
    'p,ul,ol': { margin: 0 },
    h2: { marginTop: 40 },
    h3: { marginTop: 32 },
  },
  hr: {
    border: 0,
    borderTop: `4px solid ${token('color.border.neutral')}`,
    width: '100%',
  },
  blockquote: {
    textAlign: 'center',
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
  Tooltip,
  Box,
  a({ children, ...props }) {
    return (
      <a {...props} target="_blank">
        {children}
      </a>
    );
  },
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
        background="neutralSubtle"
        padding="large"
        borderRadius="rounded"
        {...props}
        css={styles.blockquote}>
        <Text color="low" align="center" size="small">
          {children}
        </Text>
      </Box>
    );
  },
  hr(props) {
    return <hr {...props} css={styles.hr} />;
  },
  h1({ children, ...props }) {
    return (
      <Heading {...props} level={2}>
        <Anchor title={children}>{children}</Anchor>
      </Heading>
    );
  },
  h2({ children, ...props }) {
    return (
      <Heading {...props} level={3}>
        <Anchor title={children}>{children}</Anchor>
      </Heading>
    );
  },
  h3({ children, ...props }) {
    return (
      <Heading {...props} level={4}>
        <Anchor title={children}>{children}</Anchor>
      </Heading>
    );
  },
  li({ children }) {
    return (
      <li>
        <Text>{children}</Text>
      </li>
    );
  },
  pre({ children }) {
    return children;
  },
  code({ className, children }) {
    return (
      <Box background="sunken" padding="medium">
        <CodeBlock lang={className.split('-')[1]}>{children}</CodeBlock>
      </Box>
    );
  },
  inlineCode(props) {
    return <Code {...props} />;
  },
  p({ children }) {
    return <Text as="p">{children}</Text>;
  },
};

export default components;
