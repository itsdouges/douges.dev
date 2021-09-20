/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { token } from '@atlaskit/tokens';
import Box from 'design-system/box';
import FocusRing from 'design-system/focus-ring';

const styles = css({
  input: {
    fontSize: 14,
    width: '100%',
    maxWidth: 500,
    '::placeholder': {
      color: token('color.text.lowEmphasis'),
    },
    ':hover,:focus': {
      backgroundColor: 'transparent',
    },
  },
});

interface TextfieldProps {
  id?: string;
  type?: 'email' | 'text';
  isRequired?: boolean;
  isDisabled?: boolean;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
}

function Textfield({
  id,
  placeholder,
  name,
  type = 'text',
  isRequired,
  isDisabled,
  value,
  onChange,
}: TextfieldProps) {
  return (
    <FocusRing appearance="inset">
      <Box
        as="input"
        border="neutral"
        borderRadius="default"
        paddingY="medium"
        paddingX="regular"
        background={isDisabled ? 'disabled' : 'neutralSubtle'}
        name={name}
        type={type}
        required={isRequired}
        id={id}
        disabled={isDisabled}
        css={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </FocusRing>
  );
}

export default Textfield;
