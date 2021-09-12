/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';

const styles = css({
  section: {
    margin: '0 auto',
    maxWidth: 900,
    padding: 16,
    width: '100%',
  },
  separated: {
    paddingTop: '128px',
    paddingBottom: '128px',
  },
});

interface SectionProps {
  isSeparated?: boolean;
  isSunken?: boolean;
  children?: React.ReactNode;
}

function Section({ children, isSeparated, isSunken }: SectionProps) {
  if (isSunken) {
    return (
      <Box appearance="sunken">
        <div css={[styles.section, isSeparated && styles.separated]}>{children}</div>
      </Box>
    );
  }

  return <div css={[styles.section, isSeparated && styles.separated]}>{children}</div>;
}

export default Section;
