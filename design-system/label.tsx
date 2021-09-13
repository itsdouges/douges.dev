import Text from 'design-system/text';
import Stack from 'design-system/stack';

interface LabelProps {
  label: string;
  htmlFor: string;
  children?: React.ReactNode;
}

function Label({ label, htmlFor, children }: LabelProps) {
  return (
    <Stack gap="regular">
      <div>
        <label htmlFor={htmlFor}>
          <Text size="small" color="medium">
            <strong>{label}</strong>
          </Text>
        </label>
      </div>

      {children}
    </Stack>
  );
}

export default Label;
