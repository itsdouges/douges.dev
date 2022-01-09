/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';

const styles = css({
  separator: {
    alignSelf: 'center',
    height: 20,
  },
});

function Separator() {
  return <Box css={styles.separator} paddingLeft="xsmall" border="left" borderColor="neutral" />;
}

export default Separator;
