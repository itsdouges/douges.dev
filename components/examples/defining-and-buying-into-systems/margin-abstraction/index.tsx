/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import ExampleStepper, { Step } from 'components/examples/example-stepper';
import { token } from '@atlaskit/tokens';
import Inline from 'design-system/inline';
import Text from 'design-system/text';

const styles = css({});

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
        Hey
      </Step>
      <Step
        description="We wrap them with an inline component - note their sizes remain intact"
        code={`jsx
        <Inline>
          <div class="card" />
          <div class="card" />
          <div class="card" />
        </Inline>
      `}>
        Hey
      </Step>
      <Step
        description="We set a gap between the elements"
        code={`jsx
        <Inline gap="small">
          <div class="card" />
          <div class="card" />
          <div class="card" />
        </Inline>
      `}>
        Hey
      </Step>
      <Step
        description="We can even change their alignment"
        code={`jsx
        <Inline gap="small" inlineAlign="middle>
          <div class="card" />
          <div class="card" />
          <div class="card" />
        </Inline>
      `}>
        Hey
      </Step>
      <Step
        description="And on the bottom as well"
        code={`jsx
        <Inline gap="small" inlineAlign="bottom>
          <div class="card" />
          <div class="card" />
          <div class="card" />
        </Inline>
      `}>
        Hey
      </Step>
    </ExampleStepper>
  );
}

export default MarginAbstraction;
