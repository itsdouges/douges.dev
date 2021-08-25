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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsLoading(true);
      }}>
      <Label htmlFor="email" label="Join the mailing list today" />
      <div css={inlineGroupStyles}>
        <Textfield
          isRequired
          isDisabled={isLoading}
          type="email"
          id="email"
          placeholder="you@beprimed.dev"
        />
        <Button type="submit" isDisabled={isLoading} appearance="primary">
          Join
        </Button>
      </div>
    </form>
  );
}

export default SignUp;
