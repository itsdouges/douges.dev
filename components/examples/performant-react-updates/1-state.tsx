/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import ExampleStepper, { Step } from 'components/examples/example-stepper';

const styles = css({});

export default function Example() {
  return (
    <ExampleStepper>
      <Step
        description=""
        code={`
      `}>
        hmm
      </Step>
      <Step
        description=""
        code={`
      `}>
        hmm
      </Step>
    </ExampleStepper>
  );
}
