/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import { token } from '@atlaskit/tokens';

const styles = css({
  avatar: {
    border: `2px solid ${token('color.background.default')}`,
    borderRadius: '50%',
    width: 40,
    height: 40,
    display: 'inline-block',
    backgroundColor: token('color.text.lowEmphasis'),
    overflow: 'hidden',
    backgroundSize: 'contain',
  },
});

interface AvatarProps {
  url: string;
  isConstrained: boolean;
}

function Avatar({ url, isConstrained }: AvatarProps) {
  const bgStyles = { backgroundImage: `url(${url})` };

  return (
    <div
      css={[styles.avatar, !isConstrained && bgStyles]}
      style={isConstrained ? bgStyles : undefined}
    />
  );
}

export default Avatar;
