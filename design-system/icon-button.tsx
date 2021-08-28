/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from './button';
import VisuallyHidden from './visually-hidden';

interface IconButtonProps {
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  label: string;
}

function IconButton({ icon, label, onClick }: IconButtonProps) {
  return (
    <Button onClick={onClick} appearance="subtle">
      <VisuallyHidden>{label}</VisuallyHidden>
      {icon}
    </Button>
  );
}

export default IconButton;
