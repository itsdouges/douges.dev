/** @jsxImportSource @emotion/react */
import { forwardRef } from 'react';
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

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link({ children, ...props }, ref) {
  return (
    <a {...props} css={linkStyles} ref={ref}>
      {children}
    </a>
  );
});

export default Link;
