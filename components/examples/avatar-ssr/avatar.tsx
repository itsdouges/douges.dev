/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';

const avatarStyles = css({
  border: `2px solid ${token('color.background.default')}`,
  borderRadius: '50%',
  width: 40,
  height: 40,
  display: 'inline-block',
  backgroundColor: token('color.text.lowEmphasis'),
  overflow: 'hidden',
  backgroundSize: 'contain',
});

interface AvatarProps {
  url: string;
  isConstrained: boolean;
}

function Avatar({ url, isConstrained }: AvatarProps) {
  const bgStyles = { backgroundImage: `url(${url})` };

  return (
    <div
      css={[avatarStyles, !isConstrained && bgStyles]}
      style={isConstrained ? bgStyles : undefined}
    />
  );
}

export default Avatar;
