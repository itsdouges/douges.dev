/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Text from 'design-system/text';

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
      <label htmlFor={htmlFor}>
        <Text isSmall color="medium">
          <strong>{label}</strong>
        </Text>
      </label>
    </div>
  );
}

export default Label;
