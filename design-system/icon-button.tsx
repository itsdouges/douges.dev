/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from './button';
import VisuallyHidden from './visually-hidden';

const iconStyles = css({
  width: 25,
  height: 25,
  fontSize: 20,
  display: 'block',
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
      <span css={iconStyles}>{icon}</span>
    </Button>
  );
}

export default IconButton;
