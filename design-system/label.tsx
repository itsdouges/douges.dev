import Text from 'design-system/text';
import Stack from 'design-system/stack';

interface LabelProps {
  label: string;
  htmlFor: string;
  children?: React.ReactNode;
}

function Label({ label, htmlFor, children }: LabelProps) {
  return (
    <Stack gap="small">
      <div>
        <label htmlFor={htmlFor}>
          <Text size="small" color="low">
            {label}
          </Text>
        </label>
      </div>

      {children}
    </Stack>
  );
}

export default Label;
