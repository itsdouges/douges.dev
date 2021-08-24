/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import Textfield from 'design-system/textfield';
import Label from 'design-system/label';
import Button from 'design-system/button';

const inlineGroupStyles = css({
  display: 'flex',
  gap: 8,
});

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <form>
      <Label htmlFor="email" label="Join the waitlist today" />
      <div css={inlineGroupStyles}>
        <Textfield isDisabled={isLoading} id="email" placeholder="you@beprimed.dev" />
        <Button onClick={() => setIsLoading(true)} appearance="primary">
          {isLoading ? '...' : 'Join'}
        </Button>
      </div>
    </form>
  );
}

export default SignUp;
