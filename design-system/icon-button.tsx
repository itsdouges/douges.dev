/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Button from './button';
import VisuallyHidden from './visually-hidden';

const styles = css({
  icon: {
    width: 20,
    height: 20,
    fontSize: 20,
  },
});

interface IconButtonProps {
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  label: string;
}

function IconButton({ icon, label, onClick }: IconButtonProps) {
  return (
    <Button onClick={onClick} appearance="subtle">
      <VisuallyHidden>{label}</VisuallyHidden>
      <span css={styles.icon}>{icon}</span>
    </Button>
  );
}

export default IconButton;
