import { token } from '@atlaskit/tokens';

const customTokens = {
  'color.background.inverse.subtleNeutral': 'var(--background-inverse-subtleNeutral)',
  'color.overlay.inverse.hover': 'var(--overlay-inverse-hover)',
  'color.overlay.inverse.pressed': 'var(--overlay-inverse-pressed)',
} as const;

type Tokens = Parameters<typeof token>[0];

export default function tkn(name: keyof typeof customTokens | Tokens) {
  const names: any = name as any;
  return (customTokens as any)[names] || token(names);
}
