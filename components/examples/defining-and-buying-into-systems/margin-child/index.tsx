/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import ExampleStepper, { Step } from 'components/examples/example-stepper';

const styles = css({
  gap: {
    margin: 4,
  },
  card: {
    padding: 4,
    width: 100,
    fontSize: 12,
  },
});

function MarginChild() {
  return (
    <ExampleStepper>
      <Step
        description="We begin with a group of cards"
        code={`
      .card {

      }
      `}>
        <Box borderRadius="default">
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
        </Box>
      </Step>
      <Step
        description="Time to slap some margins on them"
        code={`
        .card {
          margin: 4px;
        }
      `}>
        <Box borderRadius="default">
          <Box
            css={[styles.card, styles.gap]}
            paddingX="regular"
            display="inline flex"
            borderRadius="default"
            shadow="card"
            background="card">
            A card
          </Box>
          <Box
            css={[styles.card, styles.gap]}
            paddingX="regular"
            display="inline flex"
            borderRadius="default"
            shadow="card"
            background="card">
            A card with a bit more content
          </Box>
          <Box
            css={[styles.card, styles.gap]}
            paddingX="regular"
            display="inline flex"
            borderRadius="default"
            shadow="card"
            background="card">
            A card with a pretty decent amount of content in it
          </Box>
        </Box>
      </Step>
      <Step
        description="Let's reuse the card in a different area"
        code={`
        .card {
          margin: 4px;
        }
      `}>
        <Box background="sunken" borderRadius="default">
          <Box
            css={[styles.card, styles.gap]}
            paddingX="regular"
            display="inline flex"
            borderRadius="default"
            shadow="card"
            background="card">
            A card
          </Box>
          <Box
            css={[styles.card, styles.gap]}
            paddingX="regular"
            display="inline flex"
            borderRadius="default"
            shadow="card"
            background="card">
            A card with a bit more content
          </Box>
          <Box
            css={[styles.card, styles.gap]}
            paddingX="regular"
            display="inline flex"
            borderRadius="default"
            shadow="card"
            background="card">
            A card with a pretty decent amount of content in it
          </Box>
        </Box>
      </Step>
      <Step
        description="Uh oh! The margin doesn't make sense in this context. Let's hack it."
        code={`
        .card {
          margin: 4px;
        }

        .parent {
          .card {
            margin: 0;
          }
        }
      `}>
        <Box background="sunken" borderRadius="default">
          <Box
            css={[styles.card, styles.gap]}
            paddingX="regular"
            display="inline flex"
            borderRadius="default"
            shadow="card"
            background="card">
            A card
          </Box>
          <Box
            css={[styles.card, styles.gap]}
            paddingX="regular"
            display="inline flex"
            borderRadius="default"
            shadow="card"
            background="card">
            A card with a bit more content
          </Box>
          <Box
            css={[styles.card, styles.gap]}
            paddingX="regular"
            display="inline flex"
            borderRadius="default"
            shadow="card"
            background="card">
            A card with a pretty decent amount of content in it
          </Box>
        </Box>
      </Step>
      <Step
        description="Hey stop that! That's illegal!"
        code={`
        .card {
          margin: 4px;
        }

        .parent {
          .card {
            margin: 0;
          }
        }
      `}>
        <Box background="sunken" borderRadius="default">
          <Box
            css={[styles.card, styles.gap]}
            paddingX="regular"
            display="inline flex"
            borderRadius="default"
            shadow="card"
            background="card">
            A card
          </Box>
          <Box
            css={[styles.card, styles.gap]}
            paddingX="regular"
            display="inline flex"
            borderRadius="default"
            shadow="card"
            background="card">
            A card with a bit more content
          </Box>
          <Box
            css={[styles.card, styles.gap]}
            paddingX="regular"
            display="inline flex"
            borderRadius="default"
            shadow="card"
            background="card">
            A card with a pretty decent amount of content in it
          </Box>
        </Box>
      </Step>
    </ExampleStepper>
  );
}

export default MarginChild;
