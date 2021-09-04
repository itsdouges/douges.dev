/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Surface from 'design-system/surface';

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

interface SectionProps {
  isSeparated?: boolean;
  isSunken?: boolean;
  children?: React.ReactNode;
}

function Section({ children, isSeparated, isSunken }: SectionProps) {
  if (isSunken) {
    return (
      <Surface appearance="sunken">
        <div css={[sectionStyles, isSeparated && separatedSectionStyles]}>{children}</div>
      </Surface>
    );
  }

  return <div css={[sectionStyles, isSeparated && separatedSectionStyles]}>{children}</div>;
}

export default Section;
