/** @jsxImportSource @emotion/react */
import type { MDXProviderComponents } from '@mdx-js/react';
import { css } from '@emotion/react';
import Heading from 'design-system/heading';

const paragraphStyles = css({
  fontSize: 18,
});

const components: MDXProviderComponents = {
  p(props) {
    return <p css={paragraphStyles} {...props} />;
  },
  h1() {
    return <div>DO_NOT_USE_H1</div>;
  },
  h2(props) {
    return <Heading {...props} level={2} css={{ marginTop: 70, marginBottom: 20 }} />;
  },
  h3(props) {
    return <Heading {...props} level={3} css={{ marginTop: 50, marginBottom: 15 }} />;
  },
};

export default components;
