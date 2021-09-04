/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Section from 'design-system/section';

const containerStyles = css({
  margin: '0 -16px',
});

interface ExampleContainerProps {
  children: React.ReactNode;
}

function ExampleContainer({ children }: ExampleContainerProps) {
  return (
    <div css={containerStyles}>
      <Section isSunken>{children}</Section>
    </div>
  );
}

export default ExampleContainer;
