/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, Fragment } from 'react';
import Textfield from 'design-system/textfield';
import Label from 'design-system/label';
import Button from 'design-system/button';
import { token } from '@atlaskit/tokens';

const inlineGroupStyles = css({
  display: 'flex',
  gap: 8,
  position: 'relative',
});

const completeStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 150ms',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: 3,
  padding: 8,
  fontSize: '1.5em',
  color: token('color.text.onBold'),
  background: token('color.background.boldSuccess.resting'),
});

const hiddenStyles = css({
  opacity: 0,
});

const visibleStyles = css({
  opacity: 1,
});

const sendSignUpRequest = (_: string) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await sendSignUpRequest('email');
        setIsComplete(true);
      }}>
      <Label htmlFor="email" label="Join the mailing list today" />
      <div css={inlineGroupStyles}>
        <Textfield
          isRequired
          isDisabled={isLoading}
          type="email"
          id="email"
          placeholder="douges@beprimed.dev"
        />
        <Button type="submit" isDisabled={isLoading} appearance="primary">
          <Fragment>
            <div css={[completeStyles, isComplete ? visibleStyles : hiddenStyles]}>✓</div>
            Join
          </Fragment>
        </Button>
      </div>
    </form>
  );
}

export default SignUp;