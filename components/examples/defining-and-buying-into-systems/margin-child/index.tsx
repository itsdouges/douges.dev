/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import ExampleStepper, { Step } from 'components/examples/example-stepper';

const styles = css({
  tag: {
    margin: 4,
  },
});

function MarginChild() {
  return (
    <ExampleStepper>
      <Step
        description="hmm"
        code={`
      .tag {

      }
      `}>
        <Box
          css={[]}
          paddingX="regular"
          display="inline flex"
          borderRadius="rounded"
          background="neutralSubtle">
          Tag
        </Box>
        <Box
          css={[]}
          paddingX="regular"
          display="inline flex"
          borderRadius="rounded"
          background="neutralSubtle">
          Tag
        </Box>
        <Box
          css={[]}
          paddingX="regular"
          display="inline flex"
          borderRadius="rounded"
          background="neutralSubtle">
          Tag
        </Box>
      </Step>
      <Step
        description="hmm"
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
          background="neutralSubtle">
          Tag
        </Box>
        <Box
          css={styles.tag}
          paddingX="regular"
          display="inline flex"
          borderRadius="rounded"
          background="neutralSubtle">
          Tag
        </Box>
        <Box
          css={styles.tag}
          paddingX="regular"
          display="inline flex"
          borderRadius="rounded"
          background="neutralSubtle">
          Tag
        </Box>
      </Step>
    </ExampleStepper>
  );
}

export default MarginChild;
