/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';
import Image from 'next/image';

const avatarStyles = css({
  border: `2px solid ${token('color.background.default')}`,
  borderRadius: '50%',
  width: 40,
  height: 40,
  display: 'inline-block',
  backgroundColor: token('color.text.lowEmphasis'),
  overflow: 'hidden',
  position: 'relative',
});

interface AvatarProps {
  url: string;
}

function Avatar({ url }: AvatarProps) {
  return (
    <div css={[avatarStyles]}>
      <Image layout="fill" alt="" src={url} />
    </div>
  );
}

export default Avatar;
