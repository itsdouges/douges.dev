/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import ExampleStepper, { Step } from 'components/examples/example-stepper';
import Inline from 'design-system/inline';

const styles = css({
  card: {
    padding: 4,
    width: 100,
    fontSize: 12,
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

function MarginAbstraction() {
  return (
    <ExampleStepper>
      <Step
        description="We start with our items again"
        code={`jsx
        <div class="card" />
        <div class="card" />
        <div class="card" />
      `}>
        <Children />
      </Step>
      <Step
        description="We wrap them with an inline component - note the card heights remain intact"
        code={`diff
        +<Inline>
          <div class="card" />
          <div class="card" />
          <div class="card" />
        +</Inline>
      `}>
        <Inline>
          <Children />
        </Inline>
      </Step>
      <Step
        description="We set a gap between the elements"
        code={`diff
        -<Inline>
        +<Inline gap="regular">
          <div class="card" />
          <div class="card" />
          <div class="card" />
        </Inline>
      `}>
        <Inline gap="regular">
          <Children />
        </Inline>
      </Step>
      <Step
        description="We can even change their alignment"
        code={`diff
        -<Inline gap="regular">
        +<Inline gap="regular" blockAlign="middle">
          <div class="card" />
          <div class="card" />
          <div class="card" />
        </Inline>
      `}>
        <Inline gap="regular" blockAlign="middle">
          <Children />
        </Inline>
      </Step>
      <Step
        description="And on the bottom as well"
        code={`diff
        -<Inline gap="regular" blockAlign="middle">
        +<Inline gap="regular" blockAlign="bottom">
          <div class="card" />
          <div class="card" />
          <div class="card" />
        </Inline>
      `}>
        <Inline gap="regular" blockAlign="bottom">
          <Children />
        </Inline>
      </Step>
    </ExampleStepper>
  );
}

export default MarginAbstraction;
