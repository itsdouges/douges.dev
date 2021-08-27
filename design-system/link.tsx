/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';

const linkStyles = css({
  ':hover': {
    textDecoration: 'none',
  },
  ':focus': {
    outlineColor: 'transparent',
  },
  ':focus-visible': {
    outlineColor: token('color.border.focus'),
  },
});

interface LinkProps {
  children: JSX.Element | string;
}

function Link({ children, ...props }: LinkProps) {
  return (
    <a {...props} css={linkStyles}>
      {children}
    </a>
  );
}

export default Link;
