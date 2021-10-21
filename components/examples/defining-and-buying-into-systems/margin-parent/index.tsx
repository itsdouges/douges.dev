/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box from 'design-system/box';
import ExampleStepper, { Step } from 'components/examples/example-stepper';
import { token } from '@atlaskit/tokens';
import Inline from 'design-system/inline';
import Text from 'design-system/text';

const styles = css({});

function MarginParent() {
  return (
    <ExampleStepper>
      <Step
        description="hmm"
        code={`css
      `}>
        Hey
      </Step>
      <Step
        description="hmm"
        code={`css
      `}>
        There
      </Step>
    </ExampleStepper>
  );
}

export default MarginParent;
