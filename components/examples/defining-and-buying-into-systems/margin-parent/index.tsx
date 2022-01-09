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
  unzoom: {
    transformOrigin: 'left 50%',
  },
  zoom: {
    transformOrigin: 'left 50%',
    transform: 'scale(1.4)',
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
        description="We start with some cards"
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
        <div css={[styles.flex, styles.unzoom]}>
          <Children />
        </div>
      </Step>
      <Step
        description="Ah... the height of our children are all stretched now"
        code={`css
        .parent {
          display: flex;
        }
      `}>
        <div css={[styles.flex, styles.zoom]}>
          <Children />
        </div>
      </Step>

      <Step
        description="Let's fix that by settings align items start"
        code={`diff
        .parent {
          display: flex;
        +  align-items: flex-start;
        }
      `}>
        <div css={[styles.flex, styles.start, styles.zoom]}>
          <Children />
        </div>
      </Step>
      <Step
        description="And space it nicely with some gap"
        code={`diff
        .parent {
          display: flex;
          align-items: flex-start;
        +  gap: 8px;
        }
      `}>
        <div css={[styles.flex, styles.start, styles.gap, styles.zoom]}>
          <Children />
        </div>
      </Step>
      <Step
        description="That works!"
        code={`diff
        .parent {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
      `}>
        <div css={[styles.flex, styles.start, styles.gap, styles.unzoom]}>
          <Children />
        </div>
      </Step>
    </ExampleStepper>
  );
}

export default MarginParent;
