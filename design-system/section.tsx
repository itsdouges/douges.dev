/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';

const sectionStyles = css({
  margin: '0 auto',
  maxWidth: 900,
  padding: 16,
  width: '100%',
});

const separatedSectionStyles = css({
  paddingTop: '128px',
  paddingBottom: '128px',
});

const sunkenStyles = css({
  backgroundColor: token('color.background.sunken'),
});

interface SectionProps {
  isSeparated?: boolean;
  isSunken?: boolean;
  children?: React.ReactNode;
}

function Section({ children, isSeparated, isSunken }: SectionProps) {
  if (isSunken) {
    return (
      <div css={sunkenStyles}>
        <div css={[sectionStyles, isSeparated && separatedSectionStyles]}>{children}</div>
      </div>
    );
  }

  return <div css={[sectionStyles, isSeparated && separatedSectionStyles]}>{children}</div>;
}

export default Section;
