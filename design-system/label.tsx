/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';

const labelStyles = css({
  color: token('color.text.mediumEmphasis'),
  fontSize: 20,
  display: 'inline',
  fontWeight: 500,
});

const containerStyles = css({
  paddingBottom: 8,
});

interface LabelProps {
  label: string;
  htmlFor: string;
}

function Label({ label, htmlFor }: LabelProps) {
  return (
    <div css={containerStyles}>
      <label htmlFor={htmlFor} css={labelStyles}>
        {label}
      </label>
    </div>
  );
}

export default Label;
