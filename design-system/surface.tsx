/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';
import { CSSProperties } from 'react';

const surfaceStyles = css({
  backgroundColor: 'var(--surface)',
});

const overlayStyles = css({
  boxShadow: token('shadow.overlay'),
});

const cardStyles = css({
  boxShadow: token('shadow.card'),
});

const surfaceMap = {
  card: cardStyles,
  overlay: overlayStyles,
  sunken: undefined,
};

const bgMap = {
  card: token('color.background.card'),
  overlay: token('color.background.overlay'),
  sunken: token('color.background.sunken'),
};

interface SurfaceProps {
  appearance: 'sunken' | 'overlay' | 'card';
  children: React.ReactNode;
  className?: string;
}

function Surface({ children, className, appearance }: SurfaceProps) {
  const styles = surfaceMap[appearance];
  const surfaceColor = bgMap[appearance];

  return (
    <div
      css={[surfaceStyles, styles]}
      style={{ '--surface': surfaceColor } as CSSProperties}
      className={className}>
      {children}
    </div>
  );
}

export default Surface;
