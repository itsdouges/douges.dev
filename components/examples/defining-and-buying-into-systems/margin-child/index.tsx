/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import ExampleStepper, { Step } from 'components/examples/example-stepper';

const styles = css({
  tag: {
    margin: 4,
  },
  card: {
    width: 100,
    height: 50,
  },
});

function MarginChild() {
  return (
    <ExampleStepper>
      <Step
        description="We begin with a group of tags"
        code={`
      .avatar {

      }
      `}>
        <Box
          css={[styles.card]}
          paddingX="regular"
          display="inline flex"
          borderRadius="rounded"
          shadow="card"
          background="card">
          Tag
        </Box>
        <Box
          css={[]}
          paddingX="regular"
          display="inline flex"
          borderRadius="rounded"
          shadow="card"
          background="card">
          Tag
        </Box>
        <Box
          css={[]}
          paddingX="regular"
          display="inline flex"
          borderRadius="rounded"
          shadow="card"
          background="card">
          Tag
        </Box>
      </Step>
      <Step
        description="Time to slap some margins on them"
        code={`
        .tag {
          margin: 4px;
        }
      `}>
        <Box
          css={styles.tag}
          paddingX="regular"
          display="inline flex"
          borderRadius="rounded"
          shadow="card"
          background="card">
          Tag
        </Box>
        <Box
          css={styles.tag}
          paddingX="regular"
          display="inline flex"
          borderRadius="rounded"
          shadow="card"
          background="card">
          Tag
        </Box>
        <Box
          css={styles.tag}
          paddingX="regular"
          display="inline flex"
          borderRadius="rounded"
          shadow="card"
          background="card">
          Tag
        </Box>
      </Step>
    </ExampleStepper>
  );
}

export default MarginChild;
