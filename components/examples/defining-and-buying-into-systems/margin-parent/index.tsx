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
    gap: 0,
  },
  start: {
    alignItems: 'flex-start',
  },
  gap: {
    gap: 8,
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
        description="We start with our cards again"
        code={`css
        .parent {}
      `}>
        <div>
          <Children />
        </div>
      </Step>
      <Step
        description="Make the parent a flex container"
        code={`diff
        .parent {
        +  display: flex;
        }
      `}>
        <div css={styles.flex}>
          <Children />
        </div>
      </Step>
      <Step
        description="Ah but the size of our children have gone all whack"
        code={`css
        .parent {
          display: flex;
          align-items: flex-start;
        }
      `}>
        <div css={[styles.flex]}>
          <Children />
        </div>
      </Step>

      <Step
        description="Make items align to the start of the flex container"
        code={`diff
        .parent {
          display: flex;
        +  align-items: flex-start;
        }
      `}>
        <div css={[styles.flex, styles.start]}>
          <Children />
        </div>
      </Step>
      <Step
        description="And add some gap"
        code={`diff
        .parent {
          display: flex;
          align-items: flex-start;
        +  gap: 8px;
        }
      `}>
        <div css={[styles.flex, styles.start, styles.gap]}>
          <Children />
        </div>
      </Step>
    </ExampleStepper>
  );
}

export default MarginParent;
