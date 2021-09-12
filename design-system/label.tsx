import Text from 'design-system/text';
import Stack from 'design-system/stack';

interface LabelProps {
  label: string;
  htmlFor: string;
  children?: React.ReactNode;
}

function Label({ label, htmlFor, children }: LabelProps) {
  return (
    <Stack gap={1}>
      <label htmlFor={htmlFor}>
        <Text size="small" color="medium">
          <strong>{label}</strong>
        </Text>
      </label>

      {children}
    </Stack>
  );
}

export default Label;
