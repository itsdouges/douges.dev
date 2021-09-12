/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';

const styles = css({
  section: {
    margin: '0 auto',
    maxWidth: 900,
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
      <Box background="sunken">
        <Box padding="large" css={[styles.section, isSeparated && styles.separated]}>
          {children}
        </Box>
      </Box>
    );
  }

  return (
    <Box padding="large" css={[styles.section, isSeparated && styles.separated]}>
      {children}
    </Box>
  );
}

export default Section;
