/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import ExampleStepper, { Step } from 'components/examples/example-stepper';

const styles = css({
  card: {
    padding: 4,
    width: 100,
    fontSize: 12,
  },
  flex: {
    display: 'flex',
  },
});

function Children() {
  return (
    <>
      <Box
        css={[styles.card]}
        paddingX="regular"
        display="inline flex"
        borderRadius="default"
        shadow="card"
        background="card">
        A card
      </Box>
      <Box
        css={[styles.card]}
        paddingX="regular"
        display="inline flex"
        borderRadius="default"
        shadow="card"
        background="card">
        A card with a bit more content
      </Box>
      <Box
        css={[styles.card]}
        paddingX="regular"
        display="inline flex"
        borderRadius="default"
        shadow="card"
        background="card">
        A card with a pretty decent amount of content in it
      </Box>
    </>
  );
}

function MarginParent() {
  return (
    <ExampleStepper>
      <Step
        description="hmm"
        code={`css
        .card {}
      `}>
        <div>
          <Children />
        </div>
      </Step>
      <Step
        description="hmm"
        code={`css
        .card {}
      `}>
        <div css={styles.flex}>
          <Children />
        </div>
      </Step>
    </ExampleStepper>
  );
}

export default MarginParent;
