/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { token } from '@atlaskit/tokens';
import Box from 'design-system/box';
import FocusRing from 'design-system/focus-ring';

const styles = css({
  container: {
    maxWidth: 500,
    width: '100%',
    ':hover,:focus-within': {
      backgroundColor: 'transparent',
    },
  },
  input: {
    fontSize: 14,
    width: '100%',
    fontFamily: 'inherit',
    '::placeholder': {
      color: token('color.text.lowEmphasis'),
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
    <FocusRing focus="within" appearance="inset">
      <Box
        display="block flex"
        background={isDisabled ? 'disabled' : 'neutralSubtle'}
        css={styles.container}
        border="neutral"
        borderRadius="default">
        <Box
          as="input"
          paddingY="medium"
          paddingX="regular"
          name={name}
          type={type}
          background="transparent"
          required={isRequired}
          id={id}
          disabled={isDisabled}
          css={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </Box>
    </FocusRing>
  );
}

export default Textfield;
